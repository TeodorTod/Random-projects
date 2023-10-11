import AddItems from './AddItems';
import Content from './Content';
import Footer from './Footer';
import Header from './Header';
import { useState, useEffect } from "react";
import SearchItem from './SearchItem';
const { v4: uuidv4 } = require('uuid');
import apiRequest from './apiRequest';


function App() {
  const API_URL = 'http://localhost:3500/items';
  const [items, setItems] = useState([]);
  const [newItem, setNewItem] = useState('');
  const [search, setSearch] = useState('');
  const [fetchError, setFetchError] = useState(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchItems = async () => {
      try {
        const response = await fetch(API_URL);
        if (!response.ok) throw Error('Did not receive expected data');
        const listItems = await response.json();
        setItems(listItems);
        setFetchError(null);
      } catch (err) {
        setFetchError(err.message)
      } finally {
        setIsLoading(false);
      }
    }
    setTimeout(() => {
      fetchItems();
    }, 2000)
  }, []);

  const addItem = async (item) => {
    const id = items.length ? items[items.length - 1].id + 1 : 1;
    const myNewItem = { id, checked: false, item };
    const listItems = [...items, myNewItem];
    setItems(listItems);

    const postOptions = {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(myNewItem)
    }
    const result = await apiRequest(API_URL, postOptions);
    if (result) setFetchError(result);
  } 


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
      <main>
        {isLoading && <p>Loading...</p>}
        {fetchError && <p style={{ color: "red" }}>{`Error: ${fetchError}`}</p>}
        {!fetchError && !isLoading && <Content
          items={items.filter((item) => ((item.item).toLowerCase()).includes(search.toLowerCase()))}
          onDelete={onDelete}
          handleCheck={handleCheck}
        />}
      </main>
      <Footer length={items.length} />
    </div>
  );
}

export default App;
