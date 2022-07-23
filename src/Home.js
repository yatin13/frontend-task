import React, { useState,useEffect } from 'react';
import FoodItem from './FoodItem';
import axios from 'axios';
import { Link } from 'react-router-dom';
const Home = () => {
    const [foodItems,setFoodItems]=useState([{}]);
    useEffect(() => {
      axios.get("https://8b648f3c-b624-4ceb-9e7b-8028b7df0ad0.mock.pstmn.io/dishes/v1/").then((res)=>{
        setFoodItems(res.data.popularDishes);
      }).catch((err)=>{
        console.error(err);
      })
    },[])
  return (
    <>
    <Link to="/itemdesc"><i class="fa-solid fa-arrow-right-long" style={{color:"black"}}></i></Link>
    <div className="container">
     <h3>Select Dishes</h3>
     <div style={{backgroundColor:"black"}}>
        <div className='card d-flex'>
      <span>
        12 May 2021
      </span>
      <span>
        10:30pm -12:30pm
      </span>
      </div>
     </div>  
      <div className="d-flex justify-content-between">
        <span className='border border-danger text-danger' >
          Italian
        </span>
        <span className='border border-dark'>
          Indian
        </span>
        <span className='border border-dark'>
          Indian
        </span>
        <span className='border border-dark'>
          Indian
        </span>
      </div>
      <h2>Popular Dishes</h2>
      <div className="d-flex justify-content-around" style={{overflowX:"scroll"}} id="upper-banner">
      <div className='ml-3'>
      <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRruns4RC-bkZuGOfPuak47dV-QY2ZQd6uLKg&usqp=CAU" className="rounded-circle" alt="food-item"/>
      </div>
      <div  className='ml-3'>
      <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRruns4RC-bkZuGOfPuak47dV-QY2ZQd6uLKg&usqp=CAU" className="rounded-circle" alt="food-item"/>
      </div>
      <div className='ml-3'>
      <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRruns4RC-bkZuGOfPuak47dV-QY2ZQd6uLKg&usqp=CAU" className="rounded-circle" alt="food-item"/>
      </div>
      <div className='ml-3'>
      <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRruns4RC-bkZuGOfPuak47dV-QY2ZQd6uLKg&usqp=CAU" className="rounded-circle" alt="food-item"/>
      </div>
      <div className='ml-3'>
      <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRruns4RC-bkZuGOfPuak47dV-QY2ZQd6uLKg&usqp=CAU" className="rounded-circle" alt="food-item"/>
      </div>
      <div className='ml-3'>
      <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRruns4RC-bkZuGOfPuak47dV-QY2ZQd6uLKg&usqp=CAU" className="rounded-circle" alt="food-item"/>
      </div>
      <div className='ml-3'>
      <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRruns4RC-bkZuGOfPuak47dV-QY2ZQd6uLKg&usqp=CAU" className="rounded-circle" alt="food-item"/>
      </div>
      <div className='ml-3'>
      <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRruns4RC-bkZuGOfPuak47dV-QY2ZQd6uLKg&usqp=CAU" className="rounded-circle" alt="food-item"/>
      </div>
      <div className='ml-3'>
      <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRruns4RC-bkZuGOfPuak47dV-QY2ZQd6uLKg&usqp=CAU"  className="rounded-circle" alt="food-item"/>
      </div>
      </div>
      <div className="container" style={{height:'300px',overflowY:"scroll"}}>
         <h2 className="text-center">Recommended</h2>
         {foodItems.map((item)=>{
          return(
           <FoodItem item={item} id={item.id}/>
          );
         })}       
      </div>
    </div>
     </>
  )
}

export default Home;