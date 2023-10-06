import AddItems from './AddItems';
import Content from './Content';
import Footer from './Footer';
import Header from './Header';
import { useState, useEffect  } from "react";
import SearchItem from './SearchItem';


function App() {
  const [items, setItems] = useState(JSON.parse(localStorage.getItem('shoppingList')));
  const [newItem, setNewItem] = useState('');
  const [search, setSearch] = useState('');


  const setAndSaveItems = (newItems) => {
    setItems(newItems);
    localStorage.setItem('shoppingList', JSON.stringify(newItems))
  }

  const onDelete = (id) => {
    const newItems = items.filter((item) => item.id !== id)
    setAndSaveItems(newItems);
  };

  const handleCheck = (id) => {
    const newItems = items.map((item) => item.id === id ? { ...item, checked: !item.checked } : item);
    setAndSaveItems(newItems);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!newItem) return;
    // Create a new item object
    const newItemObject = {
      id: items.length ? items.length + 1 : 1,
      checked: false,
      item: newItem,
    };
    // Update the items state
    const newItems = [...items, newItemObject];
    setAndSaveItems(newItems);
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
