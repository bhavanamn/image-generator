import React, { useState } from 'react';
import ImageList from './components/ImageList';
import NoImage from './components/NoImage';
import searchImages from './api/api';
import logo from './logo.svg';
import './App.css';
import Loader from './components/Loader';
import Copyright from './components/Copyright';
import { FiRefreshCw } from 'react-icons/fi';
import { AiOutlineClose } from 'react-icons/ai';

function App() {
  const [images, setImages] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [searched, setSearched] = useState(false);
  const [loading, setLoading] = useState(false);
  const [loadingComplete, setLoadingComplete] = useState(false);

  const onSearchSubmit = async () => {
    setLoading(true);

    const result = await searchImages(searchTerm);
    setImages(result);
    setSearched(true);

    setTimeout(() => {
      setLoading(false);
      setLoadingComplete(true);
    }, 3000);
  }

  const handleKeyPress = (e) => {
    if (e.key === 'Enter') {
      onSearchSubmit();
    }
  }

  const clearSearchTerm = () => {
    setSearchTerm("");
  }

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo mt-5" alt="logo" />
        <h2 className="font-bold text-3xl text-center text-white">
          React Image Generator
        </h2>

        <div className="flex flex-col items-center mt-10">
          <div className="relative w-full max-w-md">
            <input
              type="text"
              className="input-search border-2 border-gray-300 bg-white h-10 px-5 pr-10 rounded-lg text-sm focus:outline-none w-full"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              onKeyPress={handleKeyPress}
              placeholder="Search Image"
            />
            {searchTerm && (
              <button
                className="absolute right-2 top-2"
                onClick={clearSearchTerm}
              >
                <AiOutlineClose className="text-gray-500 mt-1" />
              </button>
            )}
          </div>
          <div className="mt-2 flex justify-center space-x-2">
            <button
              className="button-search bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded transition duration-300 ease-in-out"
              onClick={onSearchSubmit}
            >
              Search
            </button>
            <button
              className="button-refresh bg-gray-500 hover:bg-gray-700 text-white font-bold py-2 px-4 rounded transition duration-300 ease-in-out"
            >
              <FiRefreshCw
                className="text-2xl"
                onClick={() => window.location.reload()}
              />
            </button>
          </div>
        </div>
        {loading && <Loader />}
        {searched && images.length === 0 && !loading && <NoImage />}
        {loadingComplete && images.length > 0 && <ImageList images={images} />}
        <Copyright />
      </header>
    </div>
  );
}

export default App;
