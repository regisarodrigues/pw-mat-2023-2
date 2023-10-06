import { useState } from "react";

function Greeting({ initialName = "" }) {
  const [name, setName] = useState(initialName);

  function handleChange(event) {
    setName(event.target.value);
  }

  return (
    <div>
      <form>
        <label htmlFor="name">Name: </label>
        <input value={name} onChange={handleChange} id="name" />
      </form>
      {name ? <strong>Olá {name}</strong> : "Por favor, informe seu nome"}
    </div>
  );
}

function Exercicio01() {
  return <Greeting />;
}

export default Exercicio01;
