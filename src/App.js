import React, { useState } from 'react';
import ImageList from './components/ImageList';
import NoImage from './components/NoImage';
import searchImages from './api/api';
import logo from './logo.svg';
import './App.css';

function App() {
  const [images, setImages] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [searched, setSearched] = useState(false);

  const onSearchSubmit = async () => { 
    const result = await searchImages(searchTerm);
    setImages(result);
    setSearched(true); 
  }

  const handleKeyPress = (e) => {
    if (e.key === 'Enter') {
      onSearchSubmit();
    }
  }

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo mt-5" alt="logo" />
        <h2 className='font-bold text-3xl text-center text-white'>
          React Image Generator
        </h2>
        <div className='flex justify-center items-center mt-10'>
          <input 
            type='text' 
            className='border-2 border-gray-300 bg-white h-10 px-5 pr-16 rounded-lg text-sm focus:outline-none'
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            onKeyPress={handleKeyPress}
            placeholder='Search Image'
          />
          <button 
            className='ml-2 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded transition duration-300 ease-in-out'
            onClick={onSearchSubmit}
          >
            Search
          </button>
        </div>
        {searched && images.length === 0 && <NoImage />}
        {images.length > 0 && <ImageList images={images} />}
      </header>
    </div>
  );
}

export default App;
