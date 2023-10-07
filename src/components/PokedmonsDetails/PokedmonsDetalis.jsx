
import {useParams} from 'react-router-dom'
import usePokemonDetails from '../../hooks/usePokemonDetails';
function PokedmonsDetails(){
  const {id} = useParams()
  const [pokemons] = usePokemonDetails(id)

  console.log('dekhoPokemones ko',pokemons)
  
    return(
        <div className=' flex flex-col justify-center text-center items-center'>
          <img  className='m-10 w-[200px]' src={pokemons.image} alt="pokemons images" />
          <div className='text-3xl line tracking-[10px] m-4'> {pokemons.name}</div>
          <div className='text-3xl  m-4'>Height:{pokemons.height}</div>
          <div className='text-3xl  m-4'>Weight:{pokemons.weight}</div>
          <div className='text-3xl  m-4 bg-green-500 p-2 rounded-xl'>{pokemons.types}</div>
         {
          pokemons.types && pokemons.similarPokemons && 
          <div>
            more {pokemons.types[0]} type pokemons
            <ul>
            {pokemons.similarPokemons.map((p) => <li key={p.pokemon.url}>{p.pokemon.name}</li>)}
            </ul>
          </div>
          
         } 
        </div>
    )
}

export default PokedmonsDetails;