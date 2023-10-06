import { useEffect, useState } from "react";

function Greeting({ initialName = "" }) {
  const [name, setName] = useState(() => getInitialName());

  const [theme, setTheme] = useState("lightTheme");

  useEffect(() => {
    localStorage.setItem("name", name);
  },[name]);

  function handleChange(event) {
    setName(event.target.value);
  }

  function getInitialName() {
    console.log("Leu localStorage");
    return localStorage.getItem("name") ?? initialName;
  }

  return (
    <div className={theme}>
      <form autoComplete="off">
        <fieldset>
          <legend>Tema</legend>
          <input
            type="radio"
            checked={theme === "lightTheme"}
            onClick={() => setTheme("lightTheme")}
          />
          &nbsp;Calro
          <br />
          <input
            type="radio"
            checked={theme === "darkTheme"}
            onClick={() => setTheme("darkTheme")}
          />
          Escuro
        </fieldset>
        <label htmlFor="name">Name: </label>
        <input value={name} onChange={handleChange} id="name" />
      </form>
      {name ? <strong>Olá {name}</strong> : "Por favor, informe seu nome"}
    </div>
  );
}

function Exercicio02() {
  return <Greeting />;
}

export default Exercicio02;
