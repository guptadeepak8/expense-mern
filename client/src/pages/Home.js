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
    const res = await fetch( `${process.env.REACT_APP_API_URL}/transaction`, {
      headers: {
        Authorization: `Bearer ${token}`
      },
    });
    const { data } = await res.json();
    setTransaction(data);
    setLoading(false);
    setEdittransaction(null)
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
