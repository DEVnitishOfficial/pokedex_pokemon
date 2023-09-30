import axios from "axios";
import { useEffect, useState } from "react";


function PokemonList() {

    const [pokemonList, setPokemeonList] = useState([])
    const [isLoading, setIsLoading] = useState(true)

    async function downloadPokemons() {
        const response = await  axios.get('https://pokeapi.co/api/v2/pokemon')
        const pokemonResults = response.data.results
        const pokemonResultPromise = pokemonResults.map((pokemon) => axios.get(pokemon.url))

        const pokemonData = await axios.all(pokemonResultPromise)
        console.log("nitish",pokemonData);

        const res = pokemonData.map((pokeData) => {
            const pokemon = pokeData.data;
            return{name:pokemon.name,
                 image: pokemonData.sprites.other.dream_world.front_default,
                 types:pokemon.types
                }
        });
        console.log('kargil',res);
        setPokemeonList(res)

        console.log(pokemonResults);
        setIsLoading(false)
    }
    useEffect( () => {
  downloadPokemons()
    }, [])

   
    return(
        <div> 
        <div>Pokemon List</div>
        {(isLoading) ? 'loading......' : 'Data downloaded'}
        </div>
    )
}

export default PokemonList;