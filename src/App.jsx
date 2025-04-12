import React, { useState } from 'react';
import SearchBar from './components/SearchBar';
import ImageGrid from './components/ImageGrid';
import CanvasEditor from './components/CanvasEditor';
import { fetchImages } from './api/imageApi';
import './styles/main.css';

function App() {
  const [images, setImages] = useState([]);
  const [selectedImage, setSelectedImage] = useState(null);

  const handleSearch = async (query) => {
    const results = await fetchImages(query);
    setImages(results);
  };

  return (
    <div className="app">
      <h1>Image Caption Editor</h1>
      {!selectedImage ? (
        <>
          <SearchBar onSearch={handleSearch} />
          <ImageGrid images={images} onSelect={setSelectedImage} />
        </>
      ) : (
        <CanvasEditor imageUrl={selectedImage} />
      )}
    </div>
  );
}

export default App;
