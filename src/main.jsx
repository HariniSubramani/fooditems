import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import Card from './components/Card.jsx'

const foodItems = [
  {
    title: 'Cheeseburger',
    imageUrl: 'https://source.unsplash.com/1600x1000/?Burger',
    price: 150,
    desc: 'Delicious cheeseburger with juicy patty and melted cheese.',
    type: 'nonveg'
  },
  {
    title: 'Margherita Pizza',
    imageUrl: 'https://source.unsplash.com/1600x1000/?Pizza',
    price: 200,
    desc: 'Classic Margherita pizza with fresh mozzarella and basil.',
    type: 'veg'
  },
  {
    title: 'Chicken Biryani',
    imageUrl: 'https://source.unsplash.com/1600x1000/?Biryani',
    price: 250,
    desc: 'Spicy and flavorful chicken biryani with aromatic basmati rice.',
    type: 'nonveg'
  },
  {
    title: 'Vegetable Pasta',
    imageUrl: 'https://source.unsplash.com/1600x1000/?Pasta',
    price: 180,
    desc: 'Creamy vegetable pasta with a mix of colorful veggies.',
    type: 'veg'
  },
  {
    title: 'Sushi Platter',
    imageUrl: 'https://source.unsplash.com/1600x1000/?Sushi',
    price: 300,
    desc: 'Assorted sushi platter with fresh fish and seaweed.',
    type: 'nonveg'
  },
  {
    title: 'Greek Salad',
    imageUrl: 'https://source.unsplash.com/1600x1000/?Salad',
    price: 120,
    desc: 'Healthy Greek salad with feta cheese, olives, and fresh veggies.',
    type: 'veg'
  },
  {
    title: 'BBQ Chicken Wings',
    imageUrl: 'https://source.unsplash.com/1600x1000/?BBQ',
    price: 180,
    desc: 'Spicy BBQ chicken wings with a tangy sauce.',
    type: 'nonveg'
  },
  {
    title: 'Chocolate Brownie Sundae',
    imageUrl: 'https://source.unsplash.com/1600x1000/?Dessert',
    price: 120,
    desc: 'Indulgent chocolate brownie sundae with vanilla ice cream.',
    type: 'veg'
  }
];


ReactDOM.createRoot(document.getElementById('root')).render(
 
  <>
 <div className='container'>
 {
  foodItems.map((item)=>{
     return <Card title={item.title} img={item.imageUrl} price={item.price} desc={item.desc} type={item.type} desc={item.desc} /> 
     })
}
  </div>
    </>
)


