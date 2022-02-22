import './App.css';
import React, {useState} from 'react';

function App() {

  const [items, setItems] = useState([
    {name: "Milk", isPurchased: false},
    {name: "Cheese", isPurchased: true},
    {name: "Beans", isPurchased: false}
  ]);

  const [newItem, setNewItem] = useState("");

  const purchaseItem = (index) => {
    items[index].isPurchased = true;
    const copyOfItems = [...items];
    setItems(copyOfItems);
  }

  const itemNodes = items.map( (item, index) => {
    return (
      <li key={index} className={item.isPurchased ? "purchased" : "not-purchased"}>
        <span>{item.name}</span>
        {item.isPurchased ?  <span>Purchased</span> : <button onClick={() => purchaseItem(index)}>Buy</button>}
      </li>
    );
  })

  const handleItemInput = (event) => {
    setNewItem(event.target.value);
  }

  const saveNewItem = (event) => {
    event.preventDefault();
    //creates a new object to add to the shopping list
    const newShoppingItem = {name: newItem, isPurchased: false};
    //create a copy of the original shopping and append the new object to it.
    const copyOfItems = [...items, newShoppingItem];
    //setting the state with a copy forces a rerender
    setItems(copyOfItems);
    setNewItem("");
  }

  return (
    <div className="App">

      <h1>Shopping List</h1>
      <hr></hr>

      <ul>
        {itemNodes}
      </ul>
      
      <form onSubmit={saveNewItem}>
        <label htmlFor="new-item">Add a new item:</label>
        <input type="text" id="new-item" value={newItem} onChange=
        {handleItemInput}/>
        <input type="submit" value="Add"/>
      </form>

    </div>
  );
}

export default App;
