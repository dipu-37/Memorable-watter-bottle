
import { useState } from 'react'
import { useEffect } from 'react';
import Bottle from './Bottle';
import './Bottles.css'

const Bottles = () => {
    const [bottoles,setbottles]=useState([]);
    const [card , setCard]= useState([])

useEffect(()=>{
 fetch('bottles.json')
 .then(res =>res.json())
 .then(data =>setbottles(data))
},[])

const handleAddtocard = bottle =>{
    // console.log(bottle)
    // console.log('add bottle card')
    const newcard = [...card, bottle];
    setCard(newcard);
}

    return (
        <div>
        <h3>Bottals Available :{bottoles.length} </h3>
        <h4>card : {card.length}</h4>
        <div className="bottle-container">
        
        {
            bottoles.map(bottle => <Bottle 
                bottle={bottle} 
                key={bottle.id} handleAddtocard={handleAddtocard}></Bottle>)
          }
       </div>
        </div>
       
        
    );
};

export default Bottles;