import React from 'react'
import { useSelector } from 'react-redux'
import { Link } from 'react-router-dom'

const Sidebar = () => {
  const isMenuOpen = useSelector((store) =>store.app.isMenuOpen )
  return !isMenuOpen ? null : (
    <div className=' shadow-lg p-2 w-48'>
      <div>
        <ul>
          <li className="cursor-pointer"><Link to="/">Home</Link></li>
          <li className="cursor-pointer">Shorts</li>
          <li className="cursor-pointer">Videos</li>
          <li className="cursor-pointer">Live</li>
        </ul>
      </div>
      <div>
        <h1 className="font-bold pt-5">Subscriptions</h1>
        <ul>
          <li className="cursor-pointer">Music</li>
          <li className="cursor-pointer">Sports</li>
          <li className="cursor-pointer">Gaming</li>
          <li className="cursor-pointer">Movies</li>
        </ul>
      </div>
      <div>
        <h1 className="font-bold pt-5">Watch Later</h1>
        <ul>
          <li className="cursor-pointer">Music</li>
          <li className="cursor-pointer">Sports</li>
          <li className="cursor-pointer">Gaming</li>
          <li className="cursor-pointer">Movies</li>
        </ul>
      </div>
      <div>
        <h1 className='font-bold'>Subscriptions</h1>
        <ul>
          <li className="cursor-pointer">Music</li>
          <li className="cursor-pointer">Sports</li>
          <li className="cursor-pointer">Gaming</li>
          <li className="cursor-pointer hover:bg-gray-200 p-1 rounded-full">Movies</li>
        </ul>
      </div>
    </div>
  )
}

export default Sidebar