import React, { useEffect, useState } from "react";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
} from "recharts";
import dayjs from "dayjs"
import { useGetTransactionsQuery } from "../store/transaction/transactionApi";

const Graph = () => {
  const [monthlyExpenses, setMonthlyExpenses] = useState({});
  const apiUrl = import.meta.env.VITE_REACT_APP_API_URL;
  const {data, error, isLoading } = useGetTransactionsQuery()
  
  useEffect(() => {
    if (data) {
      const fetchTransactionData = () => {
        let monthlyData = {};
        data.transaction.forEach((item) => {
          const month = dayjs(item.date).format("MMMM YYYY");
          if (monthlyData[month]) {
            monthlyData[month] += item.amount;
          } else {
            monthlyData[month] = item.amount;
          }
        });
        setMonthlyExpenses(monthlyData);
      };

      fetchTransactionData();
    }
  }, [data]);

  
  const generateChartData = () => {
    const data = Object.entries(monthlyExpenses).map(([month, amount]) => ({
      month,
      amount,
    }));

    data.sort(
      (a, b) =>
        dayjs(a.month, "MMMM YYYY").valueOf() -
        dayjs(b.month, "MMMM YYYY").valueOf()
    );
    const lastThreeMonthsData = data.slice(-3);

    return lastThreeMonthsData;
  };
 
  return (
    <div className="w-full h-auto flex justify-center items-center my-10">
    {isLoading ? (
        <h3>Loading...</h3>
      ) : error ? (
        <div>Error: {error.message}</div>
      ) : (
        <div className="max-w-screen-lg mx-auto">
          <BarChart
            width={window.innerWidth > 640 ? 600 : 350}
            height={window.innerWidth > 640 ? 300 : 200}
            data={generateChartData()}
          >
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="month" />
            <YAxis />
            <Tooltip />
            <Legend />
            <Bar dataKey="amount" fill="#8884d8" />
          </BarChart>
        </div>
      )}
    </div>
  );
};

export default Graph;
