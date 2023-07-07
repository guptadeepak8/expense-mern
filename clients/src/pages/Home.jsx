import { useEffect, useState } from "react";
import TransactionTable from "../Components/Transactiontable.jsx";
import Cookies from "js-cookie";
import { Link } from "react-router-dom";
import { MagnifyingGlass } from 'react-loader-spinner'
import dayjs from "dayjs";
import Skeleton from 'react-loading-skeleton'
import 'react-loading-skeleton/dist/skeleton.css'


function Home() {
  const [transaction, setTransaction] = useState([]);
  const [loading, SetLaoding] = useState(false);
  const apiUrl = import.meta.env.VITE_REACT_APP_API_URL;
  
  const fetchTransaction = async () => {
    SetLaoding(true);
    const token = Cookies.get("token");
    const res = await fetch(`${apiUrl}/transaction`, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
    if (res.ok) {
      const { data } = await res.json();
      data.sort((a, b) => {
        const dateA = dayjs(a.date, 'MMMM YYYY').valueOf();
        const dateB = dayjs(b.date, 'MMMM YYYY').valueOf();
        return dateB - dateA;
      });
      console.log(data);
      setTransaction(data);
      SetLaoding(false);
    }
  };

  useEffect(() => {
    fetchTransaction();
  }, []);

  function Skeletons() {
    const isMobile = window.innerWidth <= 480;
    console.log(isMobile);
  return (
    <div className='flex justify-center flex-col'>
      {isMobile ? (
        <Skeleton count={5} className="mx-4 my-3" height={50} width={'90%'} />
      ) : (
        <Skeleton count={5} className="mx-20 my-3" height={50} width={'80%'} />
      )}
    </div>
  );
  }

  
  return (
    <div className="">
      <div className="flex flex-wrap justify-center ">
        <Link
          to="/form"
          className="  bg-white font-bold text-center min-w-[20%] text-slate-600  text-xl  px-2 py-3 mx-2 my-5 shadow-lg shadow-indigo-700/50 rounded-3xl hover:bg-violet-300 hover:text-white max-[470px]:min-w-[44%] "
        >
          {" "}
          Add Transaction
        </Link>
        <Link to="/graph"
          className=" bg-white font-bold text-center min-w-[20%] text-slate-600 text-xl  px-2 py-3 mx-2 my-5 shadow-lg shadow-indigo-700/50 rounded-3xl hover:bg-violet-300 hover:text-white max-[470px]:min-w-[44%] "
        >
          Charts
        </Link>
      </div>
    
      
      {loading ? <Skeletons />
       : (
        <TransactionTable
          transaction={transaction}
          fetchTransaction={fetchTransaction}
        />
      )}
    </div>
  );
}

export default Home;
