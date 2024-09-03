import React, { useState } from 'react';

function State() {
  const [count, setCount] = useState(0);

  return (
    <div className="flex items-center gap-4">
    
      <div className="bg-white text-zinc-800 text-lg font-semibold px-4 py-2 rounded-md flex items-center justify-center">
        {count}
      </div>
      <button
        className="bg-gray-700 text-white text-lg font-semibold py-1 px-2 rounded-md hover:bg-gray-600 transition-colors duration-300"
        onClick={() =>{if(count>0) setCount(count - 1)}}
      >
        -
      </button>
      <button
        className="bg-gray-700 text-white text-lg font-semibold py-1 px-2 rounded-md hover:bg-gray-600 transition-colors duration-300"
        onClick={() =>{ if(count<10) setCount(count + 1)}}
      >
        +
      </button>
    </div>
  );
}

export default State;
