import AddItems from './AddItems';
import Content from './Content';
import Footer from './Footer';
import Header from './Header';
import { useState, useEffect } from "react";
import SearchItem from './SearchItem';
const { v4: uuidv4 } = require('uuid');


function App() {
  const API_URL = 'http://localhost:3500/itemss';
  const [items, setItems] = useState([]);
  const [newItem, setNewItem] = useState('');
  const [search, setSearch] = useState('');
  const [fetchError, setFetchError] = useState(null);

  useEffect(() => {

    const fetchItems = async () => {
      try {
        const response = await fetch(API_URL);
        if (!response.ok) throw Error('Did not receive expected data');
        const listItems = await response.json();
        console.log(listItems);
        setItems(listItems); 
        setFetchError(null);
      } catch (err) {
        console.log(err.message);
        setFetchError(err.message)
      }
    }
    fetchItems();
  }, []);


  const onDelete = (id) => {
    const newItems = items.filter((item) => item.id !== id)
    setItems(newItems);
  };

  const handleCheck = (id) => {
    const newItems = items.map((item) => item.id === id ? { ...item, checked: !item.checked } : item);
    setItems(newItems);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!newItem) return;
    // Create a new item object
    const newItemObject = {
      id: uuidv4(),
      checked: false,
      item: newItem,
    };
    // Update the items state
    const newItems = [...items, newItemObject];
    setItems(newItems);
    setNewItem('');
  };


  return (
    <div className="App">
      <Header title="Groceries List" />
      <AddItems
        newItem={newItem}
        setNewItem={setNewItem}
        handleSubmit={handleSubmit}
      />
      <SearchItem
        search={search}
        setSearch={setSearch}
      />
      <Content
        items={items.filter((item) => ((item.item).toLowerCase()).includes(search.toLowerCase()))}
        onDelete={onDelete}
        handleCheck={handleCheck}
      />
      <Footer length={items.length} />
    </div>
  );
}

export default App;
