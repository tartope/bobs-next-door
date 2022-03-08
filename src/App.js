import React, { useEffect, useState } from 'react'
import './App.css';
import Search from './components/Search'
import NewStoreForm from './components/NewStoreForm';
import StoreList from './components/StoreList';

const storesAPI = ' http://localhost:8085/stores'

function App() {

  const [stores, setStores] = useState([]);
  const [search, setSearch] = useState('');

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

  function filterSearch(searchStore){
    const searchName = search.filter(item =>{
      
    })
  }

  return (
    <div className="main-container">
      <img src="/images/bobsburgers.png" />
      <h1>Neighbor Stores</h1>
      <Search />
      <NewStoreForm handleAddStore={handleAddStore} />
      <StoreList stores={stores} />
    </div>
  );
}

export default App;
