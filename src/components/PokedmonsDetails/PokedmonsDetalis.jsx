import axios from 'axios';
import { useEffect, useState } from 'react';
import {useParams} from 'react-router-dom'
function PokedmonsDetails(){
    const {id} = useParams();
    const [pokemons, setPokemons] = useState({})
       async function downloadPokemons(){

        try {
          
        const response = await axios.get(`https://pokeapi.co/api/v2/pokemon/${id}`);
        console.log('got the request',response.data)
        setPokemons({
          name:response.data.name,
          image:response.data.sprites.other.dream_world.front_default,
          height:response.data.height,
          weight:response.data.weight,
          types:response.data.types.map((t) => {t.type.name})
        })
        } catch (error) {
          console.error('Error:', error);
        }
       }

       useEffect(() => {
         downloadPokemons()
       }, [])

    return(
        <div className=' flex flex-col justify-center text-center items-center'>
          <img  className='m-10 w-[200px]' src={pokemons.image} alt="pokemons images" />
          <div className='text-3xl line tracking-[10px] m-4'> {pokemons.name}</div>
          <div className='text-3xl  m-4'>Height:{pokemons.height}</div>
          <div className='text-3xl  m-4'>Weight:{pokemons.weight}</div>
          <div className='text-3xl  m-4'> 
            {pokemons.types && pokemons.types.map((t) => <div key={t}> {t} </div>)}
            </div>
        </div>
    )
}

export default PokedmonsDetails;