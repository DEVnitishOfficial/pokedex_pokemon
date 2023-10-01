

function Pokemon( {name, image} ){
return (
    <div className="hover:bg-slate-600 cursor-pointer">
        <div className="font-bold text-2xl mt-10 tracking-[15px]">{name}</div>
        <div className="w-[280px] h-[300px] flex justify-center items-center gap-x-96 m-10 "><img src={image} alt="" /></div>
    </div>
)
}
export default Pokemon;