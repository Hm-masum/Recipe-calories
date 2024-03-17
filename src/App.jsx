import { useState } from 'react'
import './App.css'
import Banner from './components/Banner/Banner'
import Cards from './components/Cards/Cards'
import Header from './components/Header/Header'
import CookCart from './components/CookCart/CookCart'
import PreparingCard from './components/PreparingCard/PreparingCard'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


function App() {
  const[cookCart,setCookCart]=useState([])
  const[preparingCard,setPreparingCard]=useState([])
  const[numOfCookItem,setNumOfCookItem]= useState(0);
  const[numOfPrepareItem,setNumOfPrepareItem]=useState(0)
  const[totalTime,setTotalTime]=useState(0)
  const[totalCalories,setTotalCalories]=useState(0)


  const handleCookButton =(card) =>{
    const isExist = cookCart.find(item=> item.Recipe_Id == card.Recipe_Id);
    if(!isExist){
      const newCookItem=[...cookCart,card]
      setCookCart(newCookItem)
      setNumOfCookItem(numOfCookItem+1);
    }
    else{
      toast('data already exist')
    }
  }

  const handlePrepareButton=(cookItem)=>{
       //Add to preparing card
       const newPreparingItem=[...preparingCard,cookItem]
       setPreparingCard(newPreparingItem);

       // remove the item from Cook card
       const remainingCookItem=cookCart.filter( item=> item.Recipe_Id!==cookItem.Recipe_Id);
       setCookCart(remainingCookItem)
       setNumOfCookItem(numOfCookItem-1);
       setNumOfPrepareItem(numOfPrepareItem+1);
       setTotalTime(totalTime+cookItem.Preparing_Time)
       setTotalCalories(totalCalories+cookItem.Calories)
  }

  return (
    <>
       <div className='container mx-auto lg:px-14 px-8 my-5'>
         <Header></Header>
         <Banner></Banner>
          
         <div className='my-12 space-y-5'>
             <h1 className="text-center lg:text-4xl font-semibold">Our Recipes</h1>
             <p className="lg:w-[55%] mx-auto text-center">Unlock Flavorful Delights: Our Signature Recipes Await! Embark on a gastronomic adventure and delight in the rich flavors of our carefully crafted dishes. </p>
             <div className='lg:flex gap-3'>
                <div className='lg:w-[65%]'>
                    <Cards handleCookButton={handleCookButton}></Cards>
                    <ToastContainer></ToastContainer>
                </div>
                <div className='lg:w-[35%] border-2 rounded-2xl'>
                    <CookCart cookCart={cookCart} handlePrepareButton={handlePrepareButton} numOfCookItem={numOfCookItem}></CookCart>

                    <PreparingCard 
                       preparingCard={preparingCard} 
                       numOfPrepareItem={numOfPrepareItem}
                       totalTime={totalTime}
                       totalCalories={totalCalories}>
                    </PreparingCard>
                </div>
             </div>
         </div>
       </div>
    </>
  )
}

export default App
