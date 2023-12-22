import React, { useState } from 'react'

const Menu = () => {
    const [item,setItems]=useState([
        {id:1,
        checked:true,
        ingredient:"Patty"},
        {id:2,
        checked:false,
        ingredient:"Lettuce"},
        {id:3,
        checked:false,
        ingredient:"Mustard Sauce"},
        {id:4,
        checked:false,
        ingredient:"Tomato Sauce"},
        {id:5,
        checked:false,
        ingredient:"Onion"},
        {id:6,
        checked:false,
        ingredient:"Cucumber"},
        {id:7,
        checked:false,
        ingredient:"Cheese"}
    ])

    const handleDelete=(id)=>{
        const listItems=item.filter((item)=> item.id !== id)
        setItems(listItems)
    }
    const handleCheck=(id)=>{
        const listItems=item.map((item)=>item.id === id ? {...item,checked:!item.checked}:item)
        setItems(listItems)
    }
  return (
    <main>
        <ul>
            { item.map((item) => (<li key={item.id} className='flex flex-row justify-center items-center'>
                <input className='h-8 w-4 m-2' type="checkbox" checked={item.checked} onChange={()=>{handleCheck(item.id)}}/>
                <label className='text-emerald-700 text-2xl font-bold font-mono'>{item.ingredient}</label>
                <button onClick={()=> handleDelete(item.id)} className='bg-red-600 text-rose-300 w-20 border-2 border-yellow-400 m-2'>Delete</button>
            </li>
            )
            )
            }
           
            
            
        </ul>
        <div className='flex flex-row justify-center items-center m-4'><a href='/burger'><button className='bg-cyan-500 h-10 w-20 '>Submit</button></a></div>
        
    </main>
  )
}

export default Menu