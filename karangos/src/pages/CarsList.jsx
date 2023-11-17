import { useEffect, useState } from "react";

import myFetch from "../utils/myFetch.js";

const CarsList = () => {
  const [cars, setCars] = useState([]);

  useEffect(() => {
    fetchData();
  }, []);

  async function fetchData() {
    try {
      const result = await myFetch.get("/cars");
      setCars(result);
    } catch (error) {
      console.log(error);
      alert("ERRO: " + error.message);
    }
  }
  return (
    <>
      <h1>Listagem de Carros</h1>
      <p>{JSON.stringify(cars)}</p>
    </>
  );
};

export default CarsList;
