import { Link } from "react-router-dom";


function Pokemon( {name, image, id} ){
return (
    <div className="hover:bg-slate-600 cursor-pointer">
        <Link to={`/pokemon/${id}`}>  
        <div className="font-bold text-2xl mt-10 tracking-[15px]">{name}</div>
        <div className="w-[280px] h-[300px] flex justify-center items-center gap-x-96 m-10 "><img src={image} alt="" /></div>
        </Link>
    </div>
)
}
export default Pokemon;