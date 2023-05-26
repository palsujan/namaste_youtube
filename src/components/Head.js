import React, { useState, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { toggleMenu } from '../utils/appSlice';
import { YOUTUBE_SEARCH_API } from '../utils/content';
import { json } from 'react-router-dom';
import store from '../utils/store';
import { cacheResults } from '../utils/searchSlice';



const Head = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [suggestions, setSuggestions] = useState([])
  const [showSuggestions, setShowSuggestions] = useState(false);

  const searchCache = useSelector( store => store.search);
 
  useEffect(() => {
    //API call
    const timer = setTimeout(()=>  {
      if(searchCache[searchQuery]){
        setSuggestions(searchCache[searchQuery]);
      } else {
        getSearchSugestions();
      }
      getSearchSugestions()
    }, 200);
    return () =>{
      clearTimeout(timer)
    }
  }, [searchQuery])
  
  const getSearchSugestions = async () =>{
    const data = await fetch(YOUTUBE_SEARCH_API + searchQuery);
    const json = await data.json();
    setSuggestions(json[1]);

    dispatch(cacheResults({
      [searchQuery]:json[1],
    }));
  }
  const dispatch = useDispatch();
  const toggleMenuHandler = () => {
    dispatch(toggleMenu());
}
  return (
    <div className="grid grid-flow-col p-5 m-2 shadow-lg sticky top-2 z-50">
      <div className='flex col-span-1'>
          <img 
            onClick={()=>toggleMenuHandler()}
            className="h-8 cursor-pointer"
            src="https://static.vecteezy.com/system/resources/previews/002/292/406/original/hamburger-menu-line-icon-free-vector.jpg"
            alt="menu"
          />
          <a href='/'><img 
            className="h-8 mx-2 cursor-pointer"
            src="https://upload.wikimedia.org/wikipedia/commons/b/b8/YouTube_Logo_2017.svg"
            alt="Youtube_logo"
          /></a>
      </div>
      <div className='col-span-10'>
         <div>
            <input className='w-1/2 px-10 border border-gray-400 p-2 rounded-l-full' 
                type="text" 
                placeholder='Search' 
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                onFocus={() => setShowSuggestions(true)}
                onBlur={() => setShowSuggestions(false)}
              />
              <button className="border border-gray-400 p-2 px-4 rounded-r-full bg-gray-200">
                🔍
              </button>
         </div>
         {showSuggestions &&  (<div className="fixed bg-white px-5 w-[32rem] shadow-lg rounded-lg border border-gray-100">
          <ul>
            {suggestions.map((suggestion)=>(
                <li key={suggestion} className="px-3 py-2 shadow-sm hover:bg-gray-200">🔍 {suggestion}</li>
            ))}
            
          </ul>
         </div>)}
      </div>
      <div className='flex px-2 align-center col-span-1'>
        <img
          className="h-6 cursor-pointer"
          src='https://cdn.icon-icons.com/icons2/2248/PNG/512/video_plus_icon_136058.png'
          alt='video_icon'
        />
        <img
          className="h-6 mx-2 cursor-pointer"
          src='https://cdn.pixabay.com/photo/2020/10/31/06/28/youtube-bell-icon-5700370_1280.png'
          alt='notification_icon'
        />
        <img
          className="h-7 cursor-pointer"
          src='https://cdn-icons-png.flaticon.com/512/552/552721.png'
          alt='user_icon'
        />
      </div>
    </div>
  )
}

export default Head;