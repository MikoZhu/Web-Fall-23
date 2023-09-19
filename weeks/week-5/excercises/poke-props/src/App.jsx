import { Header } from "./components/Header";
import { Pokemon } from "./components/Pokemon";
import { DataParent } from "./components/Examples/DataParent";
import data from "./data.json";

export const App = () => {
  const pokemons = data.pokemons;
  console.log(pokemons);

  // function map over pokemon array and get each pokemon object to display to the UI!

  // Not Destructured
  // const renderPokemons = () => {
  //   return pokemons.map((pokemon) => (
  //     <Pokemon
  //       key={pokemon.id}
  //       name={pokemon.name}
  //       weight={pokemon.weight}
  //       height={pokemon.height}
  //       types={pokemon.types}
  //       weaknesses={pokemon.weeknesses}
  //       category={pokemon.category}
  //     />
  //   ));
  // };

  // Function Map over pokemons using destructuring for better legibility
  const renderPokemonsDestructured = () => {
    return pokemons.map(
      ({ id, name, weight, height, types, weeknesses, category }) => (
        <Pokemon
          key={id}
          name={name}
          weight={weight}
          height={height}
          types={types}
          weaknesses={weeknesses}
          category={category}
        />
      )
    );
  };

  return (
    <>
      <Header />
      <DataParent />
      {/* <section className="pokemon-outer">{renderPokemons()}</section> */}
      <section className="pokemon-outer">
        {renderPokemonsDestructured()}
      </section>
    </>
  );
};
