import React from 'react'

export const SearchBar = () => {

  const handleSubmit = (e) => {
    e.preventDefault();
    
  }

  return (
    <div>
      <h2>SearchBar</h2>
      <form onSubmit={handleSubmit()}>
        <input type="text" placeholder="type here ..." name="keyword"></input>
        <button>Search</button>
      </form>
    </div>
  )
}
