import { useEffect } from "react";
import { useState } from "react";
import Card from "../Card/Card";

const Cards = ({handleCookButton}) => {

    const [cards,setCards]=useState([]);

    useEffect(()=>{
       fetch('blogs.json')
       .then(res => res.json())
       .then(data => setCards(data))
    },[])
   
    return (
        <div>
           <div className="grid grid-cols-1 lg:grid-cols-2 gap-3">
               {
                 cards.map(card => <Card key={card.Recipe_Id} card={card} handleCookButton={handleCookButton}>
                 </Card>)
               }
            </div>
        </div>
    );
};

export default Cards;