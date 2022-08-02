import React, { useState } from 'react'
import axios from 'axios'
import "./SearchBar.css"


export const SearchBar = (props) => {
const {setResults} = props
  const [keyword, setKeyword] = useState("");
// const [results, setResults] = useState([]);
  const [location, setLocation] = useState("");

  const resultsSet = (data) => {
    const infoAll = [];
    data.forEach(item => {
      const infoItem = {
        id: item.id,
        name: item.name,
        rating: item.rating,
        latitude: item.coordinates.latitude,
        longitude: item.coordinates.longitude,
        review: item.review_count,
      }
      infoAll.push(infoItem);
    });
    console.log("infoAll", infoAll);
//    setResults([])
   setResults(infoAll)
  }

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const resp = await axios.get(`http://localhost:8080/api/events/${keyword}/${location}`);
      console.log("this is resp", resp )
      resultsSet(resp.data)
//      console.log("results:", results);
    } catch (error) {
      console.log(error);
    }

  }

//   const handleChangeKeyword = (e) => {
//     setKeyword(e.target.value)
//   }

//   const handleChangeLocation = (e) => {
//     setLocation(e.target.value)
//   }

//   return (
//     <div className='searchbar'>
//       <h2>Search</h2>
//       <form onSubmit={handleSubmit}>
//         <input type="text" placeholder="type here ..." id="keyword" value={keyword} onChange={(e) => handleChangeKeyword(e)}></input>
//         <input type="text" placeholder="type here ..." id="location" value={location} onChange={(e) => handleChangeLocation(e)}></input>
//         <button>Search</button>

//       </form>
//     </div>
//   )
// }

  const handleChange = (e) => {
    const {name, value} = e.target
    console.log("name", name)
    if (name === "keyword") {
      setKeyword(value)
    } 
    else if (name === "location"){
      setLocation(value)
    } 
  }

  return (
    <div className='searchbar'>
      <h2>Search</h2>
      <form onSubmit={handleSubmit}>
        <input name="keyword" type="text" placeholder="type here ..." id="keyword" value={keyword} onChange={handleChange}></input>
        <input name="location" type="text" placeholder="type here ..." id="location" value={location} onChange={handleChange}></input>
        <button>Search</button>

      </form>
    </div>
  )
}
