import './App.css';
import React from 'react'
import { SearchBar } from './components/SearchBar';

export const App = () => {
  return (
    <div className="App">
      <h1>Tripper!</h1>
      <SearchBar/>
      Some content here...
    </div>
  )
}
