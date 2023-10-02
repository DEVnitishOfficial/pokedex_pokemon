 
 import PokemonList from "../PokemonList/PokemonList";
import Search from "../Search/Search";
 function Pokedex(){
      return(
        <div className=" flex flex-col text-center justify-center ">
        <Search/>
        <PokemonList />
        </div>
      )
 }
 export default Pokedex;