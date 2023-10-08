
function useDebounce(cb, delay = 2000){
    let timerid;
    return(...args) => {
    console.log('arg',...args)

        clearTimeout(timerid);
        timerid = setTimeout(() => {
      cb(...args);
        },delay)
    }
    
}

export default useDebounce