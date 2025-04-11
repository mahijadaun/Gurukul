import React, { useState } from 'react';
import { assets } from '../../assets/assets/assets';
import { useNavigate } from 'react-router-dom';

const SearchBar = ({data}) => {


  const navigate = useNavigate()
  const [input, setInput] = useState(data ? data :'')

  const onSearchHandler = (e)=>{
    e.preventDefault()
    navigate('/course-list/'+input)
  }
  return (
    <form onSubmit={onSearchHandler} className='max-w-xl w-full h-12 md:h-12 flex items-center bg-white border border-gray-300 rounded-lg overflow-hidden shadow-sm'>
      <img src={assets.search_icon} alt='search-icon' className='w-5 h-5 ml-3 mr-2 opacity-60' />
      <input onChange={e => setInput(e.target.value)} value={input}
        type="text"
        placeholder='Search for courses'
        className='flex-1 h-full text-sm px-2 text-gray-600 placeholder-gray-400 focus:outline-none'
      />
      <button
        type='submit'
        className='bg-blue-600 text-white text-sm px-6 py-2 h-full hover:bg-blue-700 transition-colors'
      >
        Search
      </button>
    </form>
  );
};

export default SearchBar;
