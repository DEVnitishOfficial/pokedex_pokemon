import axios from "axios";
import { useEffect, useState } from "react";
import Pokemon from "../Pokemon/Pokemon";


function PokemonList() {

    const [pokemonList, setPokemonList] = useState([])
    const [isLoading, setIsLoading] = useState(true)
    const POKEDEX_URL = 'https://pokeapi.co/api/v2/pokemon'

    async function downloadPokemons() {
        const response = await  axios.get(POKEDEX_URL) // this download the raw data of pokemons
        console.log("raw data",response);


        const pokemonResults = response.data.results // downloading the 20 pokemon data list
        console.log('20 pokemon data result',response.data);

// iterating over the array of pokemons, and using their url to create an array of promise that will download those 20 pokemons results
        const pokemonResultPromise = pokemonResults.map((pokemon) => axios.get(pokemon.url))
        console.log('Returning Promise', pokemonResultPromise);

        // Passing that promise array to axios.all
        const pokemonData = await axios.all(pokemonResultPromise) // array of 20 pokemons detailed data
        console.log("pokemeon detailed data",pokemonData);

        // now iterate on the data of each pokemons and extracts id, name, images and types
        const pokeListResult = pokemonData.map((pokeData) => {
            const pokemon = pokeData.data;
            return{
                 id:pokemon.id,
                 name:pokemon.name,
                 image: (pokemon.sprites.other) ? pokemon.sprites.other.dream_world.front_default : pokemon.sprites.front_shiny,
                 types:pokemon.types
                }
        });
        console.log('kargil',pokeListResult);
        setPokemonList(pokeListResult)

        console.log(pokemonResults);
        setIsLoading(false)
    }
    useEffect( () => {
  downloadPokemons()
    }, [])

   
    return(
        <div> 

        <div className="font-sans text-5xl m-5">Pokemon List</div>
        <div className="flex flex-wrap place-content-evenly ">
        {(isLoading) ? 'loading......' : pokemonList.map((p) => <Pokemon name={p.name} image={p.image} key={p.id} />)}
        </div>

        </div>
    )
}

export default PokemonList;