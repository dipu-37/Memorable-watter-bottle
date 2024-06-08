
import './bottle.css'
const Bottle = ({bottle, handleAddtocard}) => {
    const {name , img , price}=bottle;
    //console.log(bottle)
    return (

    <div className="bottle">
        <h3>Bottle:{name} </h3>
        <img src={img} alt="" />
        <p>price: {price}</p>
        <button onClick={()=>handleAddtocard(bottle)}>Parches</button>
    </div>
        
       
    );
};

export default Bottle;