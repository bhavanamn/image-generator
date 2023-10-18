import React from 'react';

const Loader = () => {
  return (
    <div className="flex justify-center items-center h-full">
      <div className="border-t-4 border-gray-300 rounded-full animate-spin w-8 h-8"></div>
    </div>
  );
};

export default Loader;

