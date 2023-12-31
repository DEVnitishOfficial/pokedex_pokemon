import axios from "axios";
import {useState, useEffect} from 'react'

function usePokemonDetails(id,pokemonName){
    const [pokemons, setPokemons] = useState({})
     async function downloadPokemons(){
      try {
        let response
      if(pokemonName){
        response = await axios.get(`https://pokeapi.co/api/v2/pokemon/${pokemonName}`);
      }else{
       response = await axios.get(`https://pokeapi.co/api/v2/pokemon/${id}`);

      }
        const pokemonOfSameType = await axios.get(`https://pokeapi.co/api/v2/type/${response.data.types ? response.data.types[0].type.name : ''}`)
        console.log('same type pokemons',pokemonOfSameType)
        console.log('responselksdlfkslkjdfjsdf',response)
        console.log('got the request',response.data)

        setPokemons({
          name:response.data.name,
          image:response.data.sprites.other.dream_world.front_default,
          height:response.data.height,
          weight:response.data.weight,
          types:response.data.types.map((t) => t.type.name),
          similarPokemons : pokemonOfSameType.data.pokemon.slice(0,5)
        })
        setPokemonListState({...pokemonListState, type:response.data.types ? response.data.types[0].type.name : ''})
      } catch (error) {
        console.log('something went wrong')
      }
      
       }

       const [pokemonListState, setPokemonListState] = useState({})      
       useEffect(() => {
        downloadPokemons()
      console.log('pokeResult',pokemons.types, pokemonListState)
      }, [])
      return [pokemons]
}
export default usePokemonDetails;