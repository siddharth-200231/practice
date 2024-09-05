import React, { useState } from 'react';

function Comp(props) {
    return (
        <div className='w-fit bg-slate-200 shadow-lg hover:shadow-xl p-6 rounded-lg transition-shadow duration-300 ease-in-out'>
            <div className='flex justify-center'>
                <img 
                    src={props.image} 
                    alt={props.name} 
                    className='h-40 w-40 object-cover rounded-sm border-2 border-gray-300' 
                />
            </div>
            <h1 className='text-lg font-semibold text-center mt-4'>{props.name}</h1>
            <button 
                className={`w-24 block mx-auto py-1 mt-4 text-sm rounded-sm tracking-tight text-white font-semibold font-sans transition-colors duration-300 ${props.isFriend ? "bg-green-500 hover:bg-green-600" : "bg-blue-600 hover:bg-blue-700"}`} 
                onClick={props.dummy}
                aria-label={props.isFriend ? "Friends" : "Add Friend"}
            >
                {props.isFriend ? "Friends" : "Add Friend"}
            </button>
        </div>
    );
}
export default Comp