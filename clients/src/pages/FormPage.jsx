import { useEffect, useState } from "react";
import { useLocation,useNavigate } from 'react-router-dom';
import { useAddTransactionMutation, useUpdateTransactionMutation } from "../store/transaction/transactionApi";
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


const today = new Date().toISOString().slice(0, 10);

const InitalValue = {
  amount: '',
  text: "",
  date:today
};

export default function FormPage() {

  const [form, setForm] = useState(InitalValue);
  const [toggle,setToggle]=useState(false);
  const [cancel,setCancel]=useState(false);
  const navigate=useNavigate();
  const location = useLocation();
  const { _id,amount,text,date } = location.state || {};

  const [addTransaction] = useAddTransactionMutation();
  const [updateTransaction] = useUpdateTransactionMutation();
  

  useEffect(() => {
    if (_id) {
      setForm({amount,text,date});
      setToggle(true)
      setCancel(true)
      
    }
   
  }, [_id]);

  const handleSubmit = async(e) => {

    e.preventDefault();
     
    if(_id){
      try {
       const {data}=await updateTransaction({_id,...form})
       console.log(data);
       if(data){
        toast.success(data.message, {
          position: "top-center",
          autoClose: 2000,
          theme: "colored",
        });
         setForm(InitalValue);
         setToggle(false)
         setCancel(false)
         navigate('/')

       }else{
        throw new Error;
       }

      }
        
      catch (error) {
        console.log(error)
      }
      
      
     
    }
    else{
       
      

      try {
        const { data } = await addTransaction(form);
        if (data) {
          toast.success(data.message, {
            position: "top-center",
            autoClose: 2000,
            theme: "colored",
          });
          setForm(InitalValue);
          setToggle(false);
          setCancel(false);
          navigate("/");
        }
      } catch (error) {
        console.error("Add Transaction Error:", error);
      }

    }
  
   
  };


  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm({ ...form, [name]: value });
  };

 
  const cancelEvent=()=>{
    setForm(InitalValue);
    setToggle(false)
    setCancel(false)
    navigate('/')
  }

  
 


  return (
    <>
    <div className="flex flex-col  ">
      <div className="flex 	items-center mx-10 my-5">
        <h2 className=" text-xl text-slate-600 font-bold">Add New Transaction</h2>
        <button className="ml-auto px-4  py-2  text-white  text-xl bg-slate-600 shadow-lg shadow-neutral-500/50  rounded-xl"onClick={cancelEvent}>BACK</button>
      </div>
        <form onSubmit={handleSubmit} className="flex flex-col  ">
          <input
           className="text-slate-600 min-[850px]:mx-50  outline-none text-xl  px-4 py-3 mx-10 my-5 shadow-lg shadow-indigo-700/50 rounded-3xl"
            name="amount"
            type="text"
            placeholder="Amount"
            onChange={handleChange}
            value={form.amount}
            required
          />
          <input
           className="text-slate-600  text-xl outline-none px-4 py-3 mx-10 my-5 shadow-lg shadow-indigo-700/50 rounded-3xl"
            name="text"
            label="Text"
            type='text'
            placeholder="Text"
            onChange={handleChange}
            value={form.text}
            required
          />
           <input
            name="date"
            className="text-slate-600  text-xl outline-none  px-4 py-3 mx-10 my-5 shadow-lg shadow-indigo-700/50 rounded-3xl"
            type="date"
           
            onChange={handleChange}
            value={form.date ? form.date.slice(0, 10) : ''}
            required
          />

           <div className="mx-10">    
          <button   className="mr-auto mx-2 px-4  py-2  text-white  text-xl bg-slate-600 shadow-lg shadow-neutral-500/50  rounded-xl">{toggle?`UPDATE`:"SUBMIT"}</button>
          </div>   
        </form>   
    </div>

    </>
  );
}
