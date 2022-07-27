import React, { useState } from 'react'
import axios from 'axios'

export const SearchBar = () => {

  const [keyword, setKeyword] = useState("");
  const [result, setResult] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    // axios.get('http://localhost:8080/api/events/',{ params: {keyword} })
    //   .then(res => {
    //     console.log("results:", res);
    //     setResult(res.data)
    //   })
    //   .catch(err => console.log(err));
    axios.get('http://localhost:8080/api/events/')
      .then(res => {
        console.log("results:", res);
        setResult(res.data)
      })
      .catch(err => console.log(err));    
  }

  const handleChange = (e) => {
    setKeyword(e.target.value)
    console.log(keyword);
  }

  return (
    <div>
      <h2>SearchBar</h2>
      <form onSubmit={handleSubmit}>
        <input type="text" placeholder="type here ..." id="keyword" value={keyword} onChange={(e) => handleChange(e)}></input>
        <button>Search</button>
        <h3>Results:</h3>
        <p>{result}</p>
      </form>
    </div>
  )
}
