import  React,{useState} from 'react';
import { Link,useNavigate} from 'react-router-dom';
import Cookies from 'js-cookie';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Loading from "../Components/Loading.jsx";

export default function Register() {
  const apiUrl = import.meta.env.VITE_REACT_APP_API_URL;

  const [form,setForm]=useState({
    firstName: '',
      lastName: '',
      email: '',
      password: '',
  })
const navigate=useNavigate();
const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = async(event) => {

    event.preventDefault();
    setIsLoading(true);
    try {
      
      const res= await fetch(`${apiUrl}/auth/register`,{
        method:'POST',
        body:JSON.stringify(form),
        headers:{
          'content-type':'application/json',
        }
      })
      const data=await res.json()
      if(res.ok){
        Cookies.set('token',data.token)
        navigate("/")
        setIsLoading(false);
      }else{
        throw new Error(data.message);
      }
        
    } catch (error) {
      setIsLoading(false);
      toast.error(error.message, {
        position: "top-center",
        autoClose: 2000,
        theme: "colored",
      });
      
    }finally {
      setIsLoading(false);
    }
  }

   const handleChange=(e)=>{
    const {name,value}=e.target;
    setForm({...form,[name]:value})
   }

   const isFormValid = form.email.trim() !== '' && form.password.trim() !== '' && form.firstName.trim() !=='' && form.lastName.trim() !== '';

  return (
      <>
        <ToastContainer className="max-[500px]:w-5" />
     {isLoading && <Loading />}
      <div className="flex flex-col">
         <h2 className="mx-10 my-5 text-xl text-slate-600 font-bold text-center">SignIN</h2>
        <form  onSubmit={handleSubmit} className="flex flex-col">
          <input 
            className="text-slate-600 min-[850px]:mx-50 outline-none  text-xl  px-4 py-3 mx-10 my-5 shadow-lg shadow-indigo-700/50 rounded-3xl"
            id="firstName"
            placeholder="First Name"
            name="firstName"
            value={form.firstName}
            onChange={handleChange}
            autoFocus
          />
          <input 
            className="text-slate-600 min-[850px]:mx-50 outline-none  text-xl  px-4 py-3 mx-10 my-5 shadow-lg shadow-indigo-700/50 rounded-3xl"
            id="lastName"
            placeholder="Last Name"
            name="lastName"
            value={form.lastName}
            onChange={handleChange}
            
          />
          <input 
            className="text-slate-600 min-[850px]:mx-50  outline-none text-xl  px-4 py-3 mx-10 my-5 shadow-lg shadow-indigo-700/50 rounded-3xl"
            id="email"
            placeholder="email"
            name="email"
            value={form.email}
            onChange={handleChange}
           
          />
          <input
             className="text-slate-600 min-[850px]:mx-50 outline-none  text-xl  px-4 py-3 mx-10 my-5 shadow-lg shadow-indigo-700/50 rounded-3xl"
            name="password"
            value={form.password}
            onChange={handleChange}
            type="password"
            id="password"
            placeholder="Password"

          />
          <button
            type="submit"
            disabled={!isFormValid}
            className={`mx-10 my-3 px-4  py-2  text-white  text-xl rounded-xl text-center ${
              isFormValid
                ? "bg-slate-600 shadow-lg shadow-neutral-500/50"
                : "bg-gray-400 cursor-not-allowed"}`}
          >
            Register
          </button>
          <h2 className="mx-10 my-2 text-l text-slate-600 font-bold">Already have an account?<Link to="/login" ><span className="text-indigo-500">Sign in</span></Link></h2>
        </form>
      </div>
     
      </>
   
  );
}