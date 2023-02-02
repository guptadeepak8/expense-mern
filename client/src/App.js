import { useState } from "react";

function App() {
  const [form, setForm] = useState({
    amount: 0,
    text: "",
    date: '',
  });

  
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(form);
  
  };
  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm({ ...form, [name]: value });
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input
          type="number"
          name="amount"
          id=""
          value={form.amount}
          onChange={handleChange}
          placeholder="Enter your transcation"
        />
        <input
          type="text"
          name="text"
          id=""
          value={form.text}
          onChange={handleChange}
          placeholder="description"
        />
        <input
          type="date"
          name="date"
          id=""
          value={form.date}
          onChange={handleChange}
          placeholder=""
        />
        <button type="submit">SUBMIT</button>
      </form>
    </div>
  );
}

export default App;
