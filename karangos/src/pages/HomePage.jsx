import React, { useState } from "react";
import Button from "@mui/material/Button";

export default function Homepage() {
  // const visible = false;   // Transforme isto em uma variável de estado
  // criando a variavel como uma variavel de estado como false para que ela nao apareça 
  // quando o usuario clicar ela vai setar para true e aparece a imagem.
  const [visible, setVisible] = useState(false);

  return (
    <>
      <h1>Bem-vindo(a) à loja Karangos!</h1>
      <p>
        Karangos é um projeto front-end desenvolvido pelo Prof. Fausto Cintra
        juntamente com a turma do 4º semestre matutino de ADS da Fatec Franca.
      </p>
      <p>
        Seu objetivo é demonstrar as funcionalidades e possibilidades do React
        em conjunto com a biblioteca de componentes Material UI, acessando uma
        API REST remota.
      </p>
      <p>
        Clique sobre ícone do menu no canto superior esquerdo para acessar as
        funcionalidades.
      </p>
      <p>
        Use o menu na parte superior à esquerda para acessar as funcionalidades
        do sistema.
      </p>
      <p style={{ textAlign: "center" }}>
        <Button
          color="secondary"
          variant="contained"
          onClick={() => setVisible(!visible)}
          // neste local eu chamo a propriedate setVisible para que ocorra a mudança 
          // de estado com click do usuário negando o valor dela se tiver true vai para false 
          // ou vise versa
        >
          Surpresa!
        </Button>
      </p>
      <img
        src="/vintage-cars.png"
        alt="Carros antigos"
        style={{
          height: visible ? "591px" : "0",
          opacity: visible ? "1" : "0",
        }}
      />
    </>
  );
}
