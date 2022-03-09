import React, { useEffect, useState } from 'react'
import './App.css';
import Search from './components/Search'
import NewStoreForm from './components/NewStoreForm';
import StoreList from './components/StoreList';

const storesAPI = ' http://localhost:8085/stores'

function App() {

  const [stores, setStores] = useState([]);
  const [searchText, setSearchText] = useState('');

  useEffect(()=>{
    fetch(storesAPI)
    .then(response => response.json())
    .then(storesData =>{
      // console.log(storesData)
      setStores(storesData)
    })
  }, [])

  function handleAddStore(store){
    fetch(storesAPI, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(store),
    })
    .then(response => response.json())
    .then(json =>{
      setStores([...stores, json])
    })
  }

  function handleSearch(searchText){
    setSearchText(searchText);
  }
  const filteredData = stores.filter((store) =>{
    const upperSearchText = searchText.toUpperCase();
    return store.name.toUpperCase().includes(upperSearchText)
  })

  return (
    <div className="main-container">
      <img src="/images/bobsburgers.png" />
      <h1>Neighbor Stores</h1>
      <Search handleSearch={handleSearch} />
      <NewStoreForm handleAddStore={handleAddStore} />
      <StoreList stores={filteredData} />
    </div>
  );
}

export default App;
