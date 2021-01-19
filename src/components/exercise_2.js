import { useState , useEffect } from "react";
import '../App.css'
function ExerciseTwo (){
    const [xAxis , setX] = useState(0);
    const [yAxis , setY] = useState(0);
    const [color ,setColor] = useState('#fff');

    const handleAxis = (e)=>{
      setX(e.clientX);
      setY(e.clientY);
    }
    useEffect(()=>{
        document.addEventListener('mousemove',handleAxis)
        if (xAxis< 0.5*window.innerWidth){
            setColor('#0100F1')
          
        }else {
            setColor('#EF554A')
        }

        return ()=>{
            document.removeEventListener('mousemove',handleAxis)
        }
    },[xAxis,color])

    return (
        <div className='ex-2' style={{backgroundColor:color}}>

            <p>iam now on x:{xAxis} and y:{yAxis}   </p>
        </div>
    )
}

export default ExerciseTwo