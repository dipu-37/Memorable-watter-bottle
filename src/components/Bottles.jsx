
import { useState } from 'react'
import { useEffect } from 'react';
import Bottle from './Bottle';
import './Bottles.css'

const Bottles = () => {
    const [bottoles,setbottles]=useState([]);

useEffect(()=>{
 fetch('bottles.json')
 .then(res =>res.json())
 .then(data =>setbottles(data))
},[])


    return (
        <div>
        <h3>here</h3>
        <div className="bottle-container">
        
        {
            bottoles.map(bottle => <Bottle 
                bottle={bottle} 
                key={bottle.id}></Bottle>)
          }
       </div>
        </div>
       
        
    );
};

export default Bottles;