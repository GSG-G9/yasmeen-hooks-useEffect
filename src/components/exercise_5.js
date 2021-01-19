import { useState ,useEffect } from "react";

function ExerciseFive(){
const[user , setUser ]=useState();

    useEffect(()=>{
        fetch('https://randomuser.me/api/')
        .then(res=>res.json())
      .then(res=>setUser(res.results[0]))
    })
    return (
        <div>
          { user && 
          <>
            <img src={user.picture.medium} alt='profilePicture'/>
            <p> user name : {user.name.title}  {user.name.first} {user.name.last}  </p>
            <p> gender : {user.gender}</p>
            <p>Email : {user.email} </p>
            <p>Phone : {user.phone}</p>
            </>
          }
        </div>
    );
        
      
        }
export default ExerciseFive