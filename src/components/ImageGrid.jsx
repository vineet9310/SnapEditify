import React from 'react';

export default function ImageGrid({ images, onSelect }) {
  return (
    <div className="image-grid">
      {images.map(image => (
        <div key={image.id} className="image-card">
          <img src={image.previewURL} alt={image.tags} />
          <button onClick={() => onSelect(image.previewURL)}>Add Captions</button>
        </div>
      ))}
    </div>
  );
}
