import { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import {
  useAddTransactionMutation,
  useUpdateTransactionMutation,
} from "../store/transaction/transactionApi";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { RingLoader } from "react-spinners";
import { ColorRing } from "react-loader-spinner";

const today = new Date().toISOString().slice(0, 10);

const InitalValue = {
  amount: "",
  text: "",
  date: today,
};

export default function FormPage() {
  const [form, setForm] = useState(InitalValue);
  const [toggle, setToggle] = useState(false);

  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();
  const { _id, amount, text, date } = location.state || {};

  const [addTransaction] = useAddTransactionMutation();
  const [updateTransaction] = useUpdateTransactionMutation();

  useEffect(() => {
    if (_id) {
      setForm({ amount, text, date });
      setToggle(true);
    }
  }, [_id]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    if (_id) {
      try {
        const { data } = await updateTransaction({ _id, ...form });
        if (data) {
          toast.success(data.message, {
            position: "top-center",
            autoClose: 2000,
            theme: "colored",
          });
          setForm(InitalValue);
          setToggle(false);
          navigate("/");
        } else {
          throw new Error();
        }
      } catch (error) {
        console.log(error);
      }
    } else {
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

  const cancelEvent = () => {
    setToggle(false);
    navigate("/");
  };

  return (
    <>
      <div className="flex flex-col mt-12 items-center min-h-screen  ">
        <div className="bg-zinc-100 rounded-xl">
          <div className="py-6 px-10">
            <div className="flex 	items-center justify-between my-3 ">
              <h2 className=" text-xl text-slate-600 font-bold mr-2">
                {toggle ? "Update" : "Add New"} Transaction
              </h2>
              <button
                className="ml-auto px-4  py-2  text-white  text-xl bg-slate-600 shadow-lg shadow-neutral-500/50  rounded-xl"
                onClick={cancelEvent}
              >
                BACK
              </button>
            </div>
            <form onSubmit={handleSubmit} className="flex flex-col my-2 ">
              <input
                className="text-slate-600 min-[850px]:mx-50  outline-none text-xl  px-4 py-3 mx-3 my-3 shadow-lg shadow-indigo-700/50 rounded-3xl"
                name="amount"
                type="text"
                placeholder="Amount"
                onChange={handleChange}
                value={form.amount}
                required
              />
              <input
                className="text-slate-600  text-xl outline-none px-4 py-3 mx-3 my-3 shadow-lg shadow-indigo-700/50 rounded-3xl"
                name="text"
                label="Text"
                type="text"
                placeholder="Text"
                onChange={handleChange}
                value={form.text}
                required
              />
              <input
                name="date"
                className="text-slate-600  text-xl outline-none  px-4 py-3 mx-3 my-3 shadow-lg shadow-indigo-700/50 rounded-3xl"
                type="date"
                onChange={handleChange}
                value={form.date ? form.date.slice(0, 10) : ""}
                required
              />

              <div className="mx-3 my-2">
                <button className=" mx-2 px-4  py-2  text-white  text-xl bg-slate-600 shadow-lg shadow-neutral-500/50  rounded-xl">
                  {loading ? (
                    <ColorRing
                      color="#ffffff"
                      height="50"
                      width="50"
                      className="py-2 px-4"
                    />
                  ) : toggle ? (
                    `UPDATE`
                  ) : (
                    "SUBMIT"
                  )}
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
}
