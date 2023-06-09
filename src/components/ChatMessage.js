import React from 'react'

const ChatMessage = ({name, message}) => {
  return (
    <div className="flex items-center shadow my-2 p-2">
        <img
          className="h-7 cursor-pointer "
          src='https://cdn-icons-png.flaticon.com/512/552/552721.png'
          alt='user_icon'
        />
        <span className="font-bold px-2">{name}</span> 
        <span>{message}</span>
    </div>
  )
}

export default ChatMessage