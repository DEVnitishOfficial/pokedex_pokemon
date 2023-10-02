
import { Routes, Route } from "react-router-dom";
import Pokedex from "../components/pokedex/pokedex";
import PokedmonsDetails from "../components/PokedmonsDetails/PokedmonsDetalis";
function CustomRoutes(){
    return(
        <Routes>
            <Route path="/" element={<Pokedex />}/>
            <Route path="/pokemon/:id/" element={<PokedmonsDetails />}/>
        </Routes>
    )
}
export default CustomRoutes;