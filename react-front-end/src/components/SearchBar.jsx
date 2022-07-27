import React, { useState } from 'react'
import axios from 'axios'

export const SearchBar = () => {

  const [keyword, setKeyword] = useState("");
  const [result, setResult] = useState("");
  const [location, setLocation] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    axios.get(`http://localhost:8080/api/events/${keyword}/${location}`)
      .then(res => {
        console.log("results:", res);
        setResult(res.data)
      })
      .catch(err => console.log(err));
  }

  const handleChangeKeyword = (e) => {
    setKeyword(e.target.value)
  }

  const handleChangeLocation = (e) => {
    setLocation(e.target.value)
  }

  return (
    <div>
      <h2>SearchBar</h2>
      <form onSubmit={handleSubmit}>
        <input type="text" placeholder="type here ..." id="keyword" value={keyword} onChange={(e) => handleChangeKeyword(e)}></input>
        <input type="text" placeholder="type here ..." id="location" value={location} onChange={(e) => handleChangeLocation(e)}></input>
        <button>Search</button>
        <h3>Results:</h3>
        <p>{result}</p>
      </form>
    </div>
  )
}
