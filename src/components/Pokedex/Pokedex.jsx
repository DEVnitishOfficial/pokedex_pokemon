 
 import { useEffect, useState } from "react";
import PokemonList from "../PokemonList/PokemonList";
import Search from "../Search/Search";
import PokedmonsDetails from "../PokedmonsDetails/PokedmonsDetalis";
 function Pokedex(){

  const [searchTerm, setSearchTerm] = useState('')

      useEffect(() => {

      },[searchTerm])

      return(
        <div className=" flex flex-col text-center justify-center ">
        <Search  updataSearchTerm={setSearchTerm}/>
        {(!searchTerm) ? <PokemonList /> : <PokedmonsDetails key={searchTerm} pokemonName={searchTerm} />}
        </div>
      )
 }
 export default Pokedex;