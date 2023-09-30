 
 import PokemonList from "../PokemonList/PokemonList";
import Search from "../Search/Search";
 function Pokedex(){
      return(
        <div className=" flex flex-col text-center justify-center">
       <h1 className=" text-4xl m-4 font-bold tracking-widest">Pokedex</h1>
        <Search/>
        <PokemonList />
        </div>
      )
 }
 export default Pokedex;