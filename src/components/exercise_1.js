import { useState ,useEffect }   from 'react'
function ExerciseOne(){
    const [count , setCount] = useState(0);
    const incrementCount = ()=>{
        setCount(c=>c+1)
    }
   useEffect(()=>{
        document.addEventListener('mousedown',incrementCount)
     
        return ()=>{
            document.removeEventListener("mousedown", incrementCount)
            
        }
    })
   
    return (
   
        <div>
            <p>Count is : {count} </p>


        </div>
    );
}
export default ExerciseOne;