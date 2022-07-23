import React from 'react'

const FoodItem = (props) => {
  return (
    <div className='text-center'>
     <h3>{props.item.name}</h3>
     <img className="img-fluid" src={props.item.image} alt="item-food"/>
    </div>
  )
}

export default FoodItem;