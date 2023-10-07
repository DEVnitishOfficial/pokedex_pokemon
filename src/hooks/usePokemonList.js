import { useEffect, useState } from "react";
import axios from "axios";
function usePokemonList(){
    const [pokemonListState, setPokemonListState] = useState({
        pokemonList : [],
        isLoading : true,
        pokedexUrl : 'https://pokeapi.co/api/v2/pokemon',
        nextUrl : '',
        prevUrl : ''
    })

    async function downloadPokemons() {
       

            setPokemonListState({ ...pokemonListState, isLoading:true})
            const response = await  axios.get(pokemonListState.pokedexUrl) // this download the raw data of pokemons
            console.log("raw data",response);
    
    
            const pokemonResults = response.data.results // downloading the 20 pokemon data list
        
    
            setPokemonListState( (state) => ({
                ...state, 
                nextUrl:response.data.next, 
                prevUrl:response.data.previous
            }))

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
        // setPokemonList(pokeListResult)
        setPokemonListState((state) => ({
            ...state,
            pokemonList:pokeListResult,
            isLoading:false
        }))
    }

    useEffect(() => {
downloadPokemons()
    },[pokemonListState.pokedexUrl])
    return [pokemonListState,setPokemonListState]

}
export default usePokemonList;