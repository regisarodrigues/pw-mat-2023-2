import { useEffect, useRef } from "react";
import VanillaTilt from "vanilla-tilt";

function Tilt({ children }) {
  // 🐨 crie uma ref aqui usando React.useRef()
  const tiltRef = useRef();

  // Quando componente for carregado , fazemos a associação entre a biblioteca vanilla-tilt
  // 🐨 adicione uma função `React.useEffect` aqui e use VanillaTilt para
  // fazer sua div parecer fantástica.
  // 💰 assim:
  useEffect(() => {
    const tiltNode = tiltRef.current;
    VanillaTilt.init(tiltNode, {
      max: 25,
      speed: 400,
      glare: true,
      "max-glare": 0.5,
    });
    return () => {
      tiltNode.vanillaTilt.destroy();
      // alert("Destruído!");
    };
  }, []);

  // 💰 Não se esqueça de retornar uma função de limpeza. VanillaTilt.init
  // vai adicionar um objeto ao seu DOM, precisando ser eliminado:
  // `return () => tiltNode.vanillaTilt.destroy()`

  // 💰 Não se esqueça de especificar seu vetor de dependências! No nosso
  // caso, samemos que o nodo do tilt nunca muda, então ajuste o vetor para `[]`.

  // 🐨 adicione a prop `ref` à div `tilt-root` aqui:
  return (
    <div className="tilt-root" ref={tiltRef}>
      <div className="tilt-child">{children}</div>
    </div>
  );
}

function Exercicio05() {
  return (
    <>
      <Tilt>
        <div className="totally-centered">vanilla-tilt.js</div>
      </Tilt>
      <Tilt>
        <div className="totally-centered">vanilla-tilt.js</div>
      </Tilt>
    </>
  );
}

export default Exercicio05;
