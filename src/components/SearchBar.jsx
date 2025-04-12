import React, { useState } from 'react';

export default function SearchBar({ onSearch }) {
  const [query, setQuery] = useState('');

  const handleSearch = () => {
    if (query.trim()) onSearch(query);
  };

  return (
    <div className="search-bar">
      <input
        type="text"
        value={query}
        onChange={e => setQuery(e.target.value)}
        placeholder="Search for images..."
      />
      <button onClick={handleSearch}>Search</button>
    </div>
  );
}
