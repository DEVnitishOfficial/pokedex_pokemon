import usePokemonList from "../../hooks/usePokemonList";
import Pokemon from "../Pokemon/Pokemon";

function PokemonList() {
  const [ pokemonListState, setPokemonListState ] = usePokemonList(false);
  return (
    <div>
      <div className="font-sans text-5xl m-5">Pokemon List</div>
      <div className="flex flex-wrap place-content-evenly ">
        {pokemonListState.isLoading
          ? "loading......"
          : pokemonListState.pokemonList.map((p) => (
              <Pokemon name={p.name} image={p.image} key={p.id} id={p.id} />
            ))}
      </div>

      <div className="gap-x-5 gap-y-5">
        <button
          className="p-2 m-5 pl-8 pr-8 bg-orange-600"
          disabled={pokemonListState.prevUrl === null}
          onClick={() => {
            const urlToSet = pokemonListState.prevUrl;
            setPokemonListState({ ...pokemonListState, pokedexUrl: urlToSet });
          }}
        >
          Prev
        </button>

        <button
          className="p-2 m-5 pl-8 pr-8 bg-green-600"
          disabled={pokemonListState.nextUrl === null}
          onClick={() => {
            const urlToSet = pokemonListState.nextUrl;
            setPokemonListState({ ...pokemonListState, pokedexUrl: urlToSet });
          }}
        >
          Next
        </button>
      </div>
    </div>
  );
}

export default PokemonList;
