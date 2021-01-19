import {useState , useEffect} from 'react'
function ExerciseFour (){
    const [search , setSearch]=useState();
    const [img , setImg] = useState();
    const handleChange = (e)=>{
   setSearch(e.target.value)
   
    }
    useEffect(()=>{
     setImg(`https://robohash.org/${search}`)
    },[search])

return(
    <div>
        <input type='text' value={search} onChange={handleChange}  />
          {search&& <img src={img} alt='unique'/>}
    </div>
);
}
export default ExerciseFour