
import { useSelector } from "react-redux";
import TransactionTable from "../Components/Transactiontable.jsx";
import { Link } from "react-router-dom";



function Home() {
 


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
       <TransactionTable/>
    </div>
  );
}

export default Home;
