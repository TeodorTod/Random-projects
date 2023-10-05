import AddItems from './AddItems';
import Content from './Content';
import Footer from './Footer';
import Header from './Header';
import { useState } from "react";


function App() {
  const [items, setItems] = useState([
    {
      id: 1,
      checked: true,
      item: "One half pound bag of Cocoa Covered Almonds Unsalted"
    },
    {
      id: 2,
      checked: false,
      item: "Item 2"
    },
    {
      id: 3,
      checked: false,
      item: "Item 3"
    }
  ]);


  const onDelete = (id) => {
    const newItems = items.filter((item) => item.id !== id)
    setItems(newItems);
    localStorage.setItem('shoppingList', JSON.stringify(newItems))
  };

  const handleCheck = (id) => {
    const listItems = items.map((item) => item.id === id ? { ...item, checked: !item.checked } : item);
    setItems(listItems)
    localStorage.setItem('shoppingList', JSON.stringify(listItems))
  }
  return (
    <div className="App">
      <Header title="Groceries List" />
      <AddItems />
      <Content
        items={items}
        onDelete={onDelete}
        handleCheck={handleCheck}
      />
      <Footer length={items.length}/>
    </div>
  );
}

export default App;
