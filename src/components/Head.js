import React from 'react'

const Head = () => {
  return (
    <div className="grid grid-flow-col p-5 m-2 shadow-lg">
      <div className='flex col-span-1'>
          <img 
            className="h-8 cursor-pointer"
            src="https://static.vecteezy.com/system/resources/previews/002/292/406/original/hamburger-menu-line-icon-free-vector.jpg"
            alt="menu"
          />
          <img 
            className="h-8 mx-2 cursor-pointer"
            src="https://upload.wikimedia.org/wikipedia/commons/b/b8/YouTube_Logo_2017.svg"
            alt="Youtube_logo"
          />
      </div>
      <div className='col-span-10'>
          <input className='w-1/2 px-10 border border-gray-400 p-2 rounded-l-full' type="text" placeholder='Search'/>
          <button className="border border-gray-400 p-2 px-4 rounded-r-full bg-gray-200">
            🔍
          </button>
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