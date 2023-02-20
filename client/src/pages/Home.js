import { useEffect, useState } from "react";
import Form from "../Components/Form";
import TransactionTable from "../Components/Transactiontable.js";
import { Container } from "@mui/material";
import Cookies from "js-cookie";
import Loading from "../Components/loading";


function Home() {
  const [transaction, setTransaction] = useState([]);
  const [editTransaction, setEdittransaction] = useState();
  const [loading, setLoading] = useState(false);

  const fetchTransaction = async () => {
    setLoading(true);
    const token = Cookies.get("token");
    const res = await fetch("http://localhost:5000/transaction", {
      headers: {
        Authorization: `Bearer ${token}`
      },
    });
    const { data } = await res.json();
    setTransaction(data);
    setLoading(false);
  };

  useEffect(() => {
    fetchTransaction();
  }, []);

  if (loading) {
    return (
      <main>
        <Loading />
      </main>
    );
  }
  return (
    <div>
      <Container>
        <Form
          fetchTransaction={fetchTransaction}
          editTransaction={editTransaction}
        />
        <TransactionTable
          transaction={transaction}
          fetchTransaction={fetchTransaction}
          setEdittransaction={setEdittransaction}
        />
        
      </Container>
    </div>
  );
}

export default Home;
