import React, { useState } from 'react'

const Grocery = () => {
  const [item, setItem] = useState([])
  const handleGrocery = (event) => {
    if (event.target.checked) {
      setItem([...item, event.target.value])
    }
    else {
      setItem(item.filter((item) => {
        return item !== event.target.value
      }))
    }
  }
  return (
    <div>
      <input type="checkbox" id='Chicken' value={' Chicken,'} onChange={handleGrocery} />
      <label htmlFor="Chicken">Chicken</label>
      <br />
      <input type="checkbox" id='Bread' value={' Bread,'} onChange={handleGrocery} />
      <label htmlFor="Bread">Bread</label>
      <br />
      <input type="checkbox" id='Cheese' value={' Cheese,'} onChange={handleGrocery} />
      <label htmlFor="Cheese">Cheese</label>
      <br />
      <input type="checkbox" id='Vegetables' value={' Vegetables,'} onChange={handleGrocery} />
      <label htmlFor="Vegetables">Vegetables</label>
      <br />
      <input type="checkbox" id='Fruits' value={' Fruits,'} onChange={handleGrocery} />
      <label htmlFor="Fruits">Fruits</label>
      <br />
      <input type="checkbox" id='Chocolate' value={' Chocolate,'} onChange={handleGrocery} />
      <label htmlFor="Chocolate">Chocolate</label>
      <br />
      <input type="checkbox" id='FloorCleaner' value={' Floor Cleaner,'} onChange={handleGrocery} />
      <label htmlFor="FloorCleaner">Floor Cleaner</label>
      <br />
      <input type="checkbox" id='Detergent' value={' Detergent,'} onChange={handleGrocery} />
      <label htmlFor="Detergent">Detergent</label>
      <br />
      <input type="checkbox" id='Fish' value={' Fish,'} onChange={handleGrocery} />
      <label htmlFor="Fish">Fish</label>
      <br />
      <input type="checkbox" id='Milk' value={' Milk,'} onChange={handleGrocery} />
      <label htmlFor="Milk">Milk</label>
      <br />
      <input type="checkbox" id='Cereal' value={' Cereal,'} onChange={handleGrocery} />
      <label htmlFor="Cereal">Cereal</label>
      <br />    
      <input type="checkbox" id='Biscuits' value={' Biscuits,'} onChange={handleGrocery} />
      <label htmlFor="Biscuits">Biscuits</label>
      <br />          

      <h2>Items Selected: {item}</h2>
    </div>
  )
}

export default Grocery