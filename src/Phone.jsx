import React from 'react';
import State from './State';

function Phone(props) {
  return (
    <div className="bg-white shadow-lg rounded-md overflow-hidden transform transition-transform duration-300 hover:scale-105 hover:shadow-2xl m-4 w-full flex flex-col md:flex-row items-center md:items-start md:p-6">
      <div className="md:w-2/5 flex-shrink-0 h-full flex items-center">
        <img
          src={props.img}
          alt={props.name}
          className="w-full h-full object-cover rounded-lg"
        />
      </div>
      <div className="md:w-3/5 p-4 md:pl-6">
        <p className="text-3xl font-bold mb-2 text-gray-800">{props.name}</p>
        <p className="text-xl font-medium text-gray-600 mb-4">Starting from <span className="text-cyan-600">{props.price}</span></p>
        <p className="text-base text-gray-700 mb-4">
          {props.description} This phone combines elegant design with powerful performance, offering users a seamless experience whether you're browsing the web, capturing photos, or using the latest apps. Its sleek form factor is complemented by a high-resolution display and advanced camera features, making it a top choice for tech enthusiasts and casual users alike.
        </p>
        <div className="flex items-center gap-4 mt-4">
          <button className="bg-gradient-to-r from-cyan-500 to-blue-500 text-white font-semibold py-2 px-6 rounded-md shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:ring-opacity-50">
            Add to Cart
          </button>
          <State />
        </div>
      </div>
    </div>
  );
}

export default Phone;
