import { useEffect, useState } from "react";

import myFetch from "../utils/myFetch.js";

const CustomerList = () => {
  const [customers, setCustomers] = useState([]);

  useEffect(() => {
    fetchData();
  }, []);

  async function fetchData() {
    try {
      const result = await myFetch.get("/customers");
      setCustomers(result);
    } catch (error) {
      console.log(error);
      alert("ERRO: " + error.message);
    }
  }

  return (
    <>
      <h1>Listagem de Clientes</h1>
      <p>{JSON.stringify(customers)}</p>
    </>
  );
};

export default CustomerList;
