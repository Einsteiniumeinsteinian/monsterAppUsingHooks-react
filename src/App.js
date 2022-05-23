// import React, { Component } from "react";
import { useState, useEffect } from 'react'
import Cardlist from './components/card-list/card-list.component'
import SearchBar from './components/search-bar/search.component'
// import logo from './logo.svg';
import './App.css'

const App = () => {
  const [allMonsters, setAllMonsters] = useState([])
  const [searchStringState, setSearchStringState] = useState('')
  const [currentMonsters, setCurrentMonsters] = useState(allMonsters)

  console.log('rendered')

  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/users')
      .then((response) => response.json())
      .then((monsters) => setAllMonsters(monsters))
      .catch((error) => console.log(error))
  }, [])

  useEffect(() => {
      const filteredMonsters = allMonsters.filter(
        (monster) => monster.name.toLowerCase().includes(searchStringState)
      )
      setCurrentMonsters(filteredMonsters)
 

  }, [searchStringState, allMonsters])

  const onsearch = (event) => {
    const searchString = event.target.value.toLowerCase()
    setSearchStringState(searchString)
  }

  return (
    <div className="App App-header">
      <SearchBar onChangeHandler={onsearch} placeholder='search monster' className='monster-search-bar' />
      <Cardlist monsters={currentMonsters} />
    </div>
  )
}



export default App
