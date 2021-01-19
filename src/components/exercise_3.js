import { useState , useEffect } from "react";
import '../App.css'

function ExerciseThree (){

    const [search , setSearch] = useState();
    const [giphy,setGiphy] = useState();
    const handleChange = (e)=>{
     setSearch(e.target.value)
        }
        useEffect(()=>{
            const abortController = new AbortController()
           fetch(`http://api.giphy.com/v1/gifs/search?api_key=A10X4E3kV0XN8J5lpJVZ3Pgk5aosmzo8&q=${search}`,{signal:abortController.signal})
           .then((res) => res.json())
           .then((res) => setGiphy( res.data[0].images.downsized_medium.url))
           .catch((err) => console.log("error" + err.name));
   return ()=>
    abortController.abort()
   
        },[search])

    return (
        <div>
         <input type='text' value={search} onChange={handleChange}/>
         {search && <img src={giphy} alt="gif"></img>}
        </div>
    );
}

export default ExerciseThree