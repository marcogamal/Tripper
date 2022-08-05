import React, { useContext, useState } from "react";
import axios from "axios";
import "./SearchBar";
import { AppContext } from "../hooks/useAppContext";

export const SearchBar = () => {
  const [keyword, setKeyword] = useState("");
  const [location, setLocation] = useState("");
  const { setResults } = useContext(AppContext);

  const resultsSet = (data) => {
    const infoAll = [];
    data.forEach((item) => {
      const infoItem = {
        id: item.id,
        name: item.name,
        rating: item.rating,
        latitude: item.coordinates.latitude,
        longitude: item.coordinates.longitude,
        review: item.review_count,
        image_url: item.image_url,
      };
      infoAll.push(infoItem);
    });
    // console.log("infoAll", infoAll);
    
    setResults(infoAll);
    
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const resp = await axios.get(`/api/events/${keyword}/${location}`);
      resultsSet(resp.data);
      // console.log("results:", results);
    } catch (error) {
      console.log(error);
    }
  };

  const handleChangeKeyword = (e) => {
    setKeyword(e.target.value);
  };

  const handleChangeLocation = (e) => {
    setLocation(e.target.value);
  };

  return (
    <div className="searchbar">
      <h2>Search</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Keyword..."
          id="keyword"
          value={keyword}
          onChange={(e) => handleChangeKeyword(e)}
        ></input>
        <input
          type="text"
          placeholder="Location..."
          id="location"
          value={location}
          onChange={(e) => handleChangeLocation(e)}
        ></input>
        <button>Search</button>

      </form>
    </div>
  );
};
