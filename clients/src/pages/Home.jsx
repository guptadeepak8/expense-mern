import { useEffect, useState } from "react";
import TransactionTable from "../Components/Transactiontable.jsx";
import Cookies from "js-cookie";
import { Link } from "react-router-dom";



function Home() {
  const [transaction, setTransaction] = useState([]);
  const apiUrl = import.meta.env.VITE_REACT_APP_API_URL;
 
  const fetchTransaction = async () => {
    const token = Cookies.get("token")
    const res = await fetch( `${apiUrl}/transaction`, {
      headers: {
        Authorization: `Bearer ${token}`
      },
    });
    const { data } = await res.json();
    setTransaction(data);
    
  };

  useEffect(() => {
    fetchTransaction();
  }, []);


  return (
    <div className="">
      <div className="flex flex-wrap justify-center " >
      <Link to='/form' className="  bg-white font-bold text-center min-w-[20%] text-slate-600  text-xl  px-2 py-3 mx-2 my-5 shadow-lg shadow-indigo-700/50 rounded-3xl hover:bg-violet-300 hover:text-white max-[470px]:min-w-[44%] "> Add Transaction</Link>
      <Link to={{pathname: "/graph", state: { transactions: transaction }}} className=" bg-white font-bold text-center min-w-[20%] text-slate-600 text-xl  px-2 py-3 mx-2 my-5 shadow-lg shadow-indigo-700/50 rounded-3xl hover:bg-violet-300 hover:text-white max-[470px]:min-w-[44%] " >Charts</Link>
      
      </div>
      
        <TransactionTable
          transaction={transaction}
          fetchTransaction={fetchTransaction}
        />
        
     
    </div>
  );
}

export default Home;
