import useDebounce from "../../hooks/useDebounce";

function Search({updataSearchTerm}) {

    const debouncedCallback = useDebounce((e) => updataSearchTerm(e.target.value))

    return(
        <div>
       <input className="w-[500px] p-3 bg-transparent border-2 border-fuchsia-700 outline-none " type="text" 
       placeholder="Pokemon"
       onChange={debouncedCallback}
       />
        </div>
    )
}
export default Search;