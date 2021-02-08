import React,{useState} from 'react'
 

const Hooks=()=>{
    const [count,incCount]=usestate(0)
  
    
    return  (
        <div>
            <h1>count</h1>
            <button onClick={()=>incCount()}>Inc</button>
        </div>
    );
}

export default Hooks;   
