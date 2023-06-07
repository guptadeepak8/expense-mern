import React, { useEffect, useState } from 'react';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend } from 'recharts';
import dayjs from 'dayjs';
import Cookies from 'js-cookie';
import { useLocation } from 'react-router-dom';

const Graph = () => {
  const [monthlyExpenses, setMonthlyExpenses] = useState({});
  const location = useLocation();
  const apiUrl = import.meta.env.VITE_REACT_APP_API_URL;

  useEffect(() => {
    const fetchTransactionData = async () => {
      const token = Cookies.get('token');
      const res = await fetch(`${apiUrl}/transaction`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      const { data } = await res.json();
      const monthlyData = {};

      if (res.ok) {
        data.forEach((item) => {
          const month = dayjs(item.date).format('MMMM YYYY');
          if (monthlyData[month]) {
            monthlyData[month] += item.amount;
          } else {
            monthlyData[month] = item.amount;
          }
        });
        setMonthlyExpenses(monthlyData);
      }
    };

    fetchTransactionData();
  }, []);

  const generateChartData = () => {
    const data = Object.entries(monthlyExpenses).map(([month, amount]) => ({
      month,
      amount,
    }));

    // Sort the data by month in ascending order
    data.sort((a, b) => dayjs(a.month, 'MMMM YYYY').valueOf() - dayjs(b.month, 'MMMM YYYY').valueOf());

    return data;
  };

  return (
    <div className="w-full h-auto flex justify-center items-center my-10">
      <div className="max-w-screen-lg mx-auto">
        <BarChart width={window.innerWidth > 640 ? 600 : 350} height={window.innerWidth > 640 ? 300 : 200} data={generateChartData()}>
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="month" />
          <YAxis />
          <Tooltip />
          <Legend />
          <Bar dataKey="amount" fill="#8884d8" />
        </BarChart>
      </div>
    </div>
  );
};

export default Graph;
