import React from 'react';

function Removeitem({ onRemove }) {
  return (
    <button
      className="p-2 rounded-lg font-semibold bg-red-500 text-white hover:bg-red-600 transition-colors duration-300"
      onClick={onRemove}
    >
      Remove item
    </button>
  );
}

export default Removeitem;
