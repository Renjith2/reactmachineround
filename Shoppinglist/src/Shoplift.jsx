import React, { useEffect, useState } from "react";
import "./Shoplift.css";

function Shoplift() {
  const [food, setFood] = useState("");
  const [shoplist, setShoplist] = useState([]);
  const [cart, setCart] = useState([]);
  function handleInput(e) {
    setFood(e.target.value);
  }

  const fetchItems = async () => {
    const url = ` https://api.frontendeval.com/fake/food/${food}`;
    const data = await fetch(url);
    const foods = await data.json();
    console.log(foods)
    const filteredFoods = foods.filter(foodItem => 
      !cart.some(cartItem => cartItem.item === foodItem)
    );
    setShoplist(filteredFoods);
  };

  useEffect(() => {
    if (food.length >= 2) {
      fetchItems(food);
    } else {
      setShoplist([]);
    }
   
  }, [food,cart]);
  function handleClick(e) {
    const item = e.target.textContent;
    const obj={
      id: Date.now(),
      item,
      isDone:false
    }
    setCart((prev) => [...prev, obj]);
    setShoplist([]);
  }
function handleRight(id){
  const copyCart=[...cart]
  const copy=copyCart.map((item)=>{
    if(item.id === id){
      item.isDone=!item.isDone
    }
    return item
  })
  setCart(copy)
}
function handleClose(id){
  const updatedCart = cart.filter((item) => item.id !== id); 
  setCart(updatedCart); 
}
  return (
    <div className="outer-container">
      <h3>Shoping List</h3>
      <input value={food} onChange={handleInput} className="input-box" />

      {shoplist.length > 0 ? (
        <div onClick={handleClick} className="shop-list">
          {shoplist.map((item, index) => (
            <div className="product" id={index} key={index}>
              {item}
            </div>
          ))}
        </div>
      ) : null}
      {cart.length > 0 ? (
        <div>
          {cart.map((item) => (
            <div className="item-class">
              <button onClick={()=>handleRight(item.id)} className="button-class">✓</button>
              <div className={item.isDone?"done":"item"}>{item.item}</div>
              <button onClick={()=>handleClose(item.id)} className="button-class">X</button>
            </div>
          ))}
        </div>
      ) : null}
    </div>
  );
}

export default Shoplift;
