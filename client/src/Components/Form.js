import { useEffect, useState } from "react";
import Card from "@mui/material/Card";
import { Button } from "@mui/material";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import { TextField } from "@mui/material";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { DesktopDatePicker } from "@mui/x-date-pickers/DesktopDatePicker";
import Cookies from "js-cookie";

const InitalValue = {
  amount: 0,
  text: "",
  date: new Date(),
};
export default function Form({ fetchTransaction ,editTransaction}) {
  const token =Cookies.get('token')
  const [form, setForm] = useState(InitalValue);
  const [toggle,setToggle]=useState(false);
  const [cancel,setCancel]=useState(false);



  useEffect(()=>{
    if(editTransaction){
      setToggle(true)
      setForm(editTransaction)
      setCancel(true)
    }
  },[editTransaction])


  

  const handleSubmit = async (e) => {

    e.preventDefault();

    if(editTransaction){
      const res = await fetch(`${process.env.REACT_APP_API_URL}/transaction/${editTransaction._id}`, {
        method: "PATCH",
        body: JSON.stringify(form),
        headers: {
          "content-type": "application/json",
          Authorization: `Bearer ${token}`
        },
      });
    
      if (res.ok) {
        fetchTransaction();
      }
      setForm(InitalValue);
      setToggle(false)
      setCancel(false)
    }
    else{
      const res = await fetch(`${process.env.REACT_APP_API_URL}/transaction/`, {
        method: "POST",
        body: JSON.stringify(form),
        headers: {
          "content-type": "application/json",
          Authorization: `Bearer ${token}`
        },
      });
     
      if (res.ok) {
        fetchTransaction();
      }
      setForm(InitalValue);
    }
   
   
  };


  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm({ ...form, [name]: value });
  };

  const handleDate=(newValue)=>{
    setForm({...form,date:newValue})
  }
  const cancelEvent=()=>{
    setForm(InitalValue);
    setToggle(false)
    setCancel(false)
  }

  return (
    <Card sx={{ minWidth: 275, margin: 5 }}>
      <CardContent>
        <Typography variant="h5">Add New Transaction</Typography>
        <form onSubmit={handleSubmit}>
          <TextField
            sx={{ marginRight: 5 ,marginBottom:2}}
            size="small"
            name="amount"
            id="outlined-basic"
            label="AMOUNT"
            variant="outlined"
            onChange={handleChange}
            value={form.amount}
          />
          <TextField
            sx={{ marginRight: 5 ,marginBottom:2}}
            size="small"
            name="text"
            id="outlined-basic"
            label="TEXT"
            variant="outlined"
            onChange={handleChange}
            value={form.text}
          />
          <LocalizationProvider dateAdapter={AdapterDayjs}>
            <DesktopDatePicker
              label="TRANSACTION DATE"
              inputFormat="DD/MM/YYYY"
              name="date"
              value={form.date}
              onChange={handleDate}
              renderInput={(params) => (
                <TextField
                 
                  sx={{ marginRight: 5,marginBottom:2 }}
                  size="small"
                  {...params}
                />
              )}
            />
          </LocalizationProvider>
          <Button variant="contained" type="submit"  sx={{ marginRight: 1 }}>{toggle?`UPDATE`:"SUBMIT"}</Button>
          {cancel && <Button variant="contained" onClick={cancelEvent}>CANCEL</Button>}
        </form>
      </CardContent>
    </Card>
  );
}
