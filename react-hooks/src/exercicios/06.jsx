// 🐨 você vai precisar dos seguintes itens de '../pokemon':
// fetchPokemon: a função que retorna as informações do pokémon
// PokemonInfoFallback: o que é exibido enquanto as informações do pokémon
// são carregadas
// PokemonDataView: o componente usado para exibir as informações do pokémon
import { useEffect, useState } from "react";
import {
  PokemonForm,
  fetchPokemon,
  PokemonInfoFallback,
  PokemonDataView,
} from "../pokemon";

function PokemonInfo({ pokemonName }) {
  // 🐨 crie o estado para o pokémon (null)
  // const [pokemon, setPokemon] = useState(null);
  // const [error, setError] = useState(null);
  // const [status, setStatus] = useState("idle");

  const [state, setState] = useState({
    pokemon: null,
    error: null,
    status: "idle",
  });

  const { pokemon, error, status } = state;

  // 🐨 crie React.useEffect de modo a ser chamado sempre que pokemonName mudar.
  // 💰 NÃO SE ESQUEÇA DO VETOR DE DEPENDÊNCIAS!
  useEffect(() => {
    requestPokemon();
  }, [pokemonName]);

  async function requestPokemon() {
    // 💰 se pokemonName é falso (ou uma string vazia) não se preocupe em fazer
    // a requisição (retorne precocemente).
    if (!pokemonName) return;

    // 🐨 antes de chamar `fetchPokemon`, limpe o estado atual do pokemon
    // ajustando-o para null.

    // setPokemon(null);
    // setError(null);
    // setStatus("idle"); // Aguardando ação do usuário

    try {
      setState({ ...state, pokemon: null, error: null, status: "pending" });
      // Vamos disparar a requisição, e o resultado ficará pendente

      // setStatus("pending");
      // (Isso é para habilitar o estado de carregamento ao alternar entre diferentes
      // pokémon.)
      // 💰 Use a função `fetchPokemon` para buscar um pokémon pelo seu nome:
      const pokemonData = await fetchPokemon(pokemonName); // 1

      // Atualiza a variável de estado com as informações obtidas
      // setPokemon(pokemonData); // 2

      // Solicitação resolvida com sucesso!
      // setStatus("resolved");

      setState({ ...state, pokemon: pokemonData, status: "resolved" });
    } catch (error) {
      // alert(error.message)
      // setError(error);

      // A soicitação rejeitada
      // setStatus("rejected");

      setState({ ...state, error: error, status: "rejected" });
    }
  }
  // 🐨 return the following things based on the `pokemon` state and `pokemonName` prop:
  // 🐨 retorne o seguinte baseado nos estados `pokemon` e `pokemonName`:
  //   1. não há pokemonName: 'Informe um pokémon'
  //   2. tem pokemonName mas não pokemon: <PokemonInfoFallback name={pokemonName} />
  //   3. tem pokemon: <PokemonDataView pokemon={pokemon} />
  // if (error) return <div role="alert">Ocorreu um erro: {error.message}</div>;
  // else if (!pokemonName) return "Infome um pokémon";
  // else if (pokemonName && !pokemon)
  //   return <PokemonInfoFallback name={pokemonName} />;
  // else if (pokemon) return <PokemonDataView pokemon={pokemon} />;

  switch (status) {
    case "idle":
      return "Infome um pokémon";

    case "pending":
      return <PokemonInfoFallback name={pokemonName} />;

    case "resolved":
      return <PokemonDataView pokemon={pokemon} />;

    default:
      return <div role="alert">Ocorreu um erro: {error.message}</div>;
  }
}

function Exercicio06() {
  const [pokemonName, setPokemonName] = useState("");

  function handleSubmit(newPokemonName) {
    setPokemonName(newPokemonName);
  }

  return (
    <div className="pokemon-info-app">
      <PokemonForm pokemonName={pokemonName} onSubmit={handleSubmit} />
      <hr />
      <div className="pokemon-info">
        <PokemonInfo pokemonName={pokemonName} />
      </div>
    </div>
  );
}

export default Exercicio06;
