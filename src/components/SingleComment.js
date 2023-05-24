import React from 'react'

const SingleComment = ({data}) => {
    const {name, text, replies} = data;
  return (
    <div className="flex shadow-sm bg-gray-100 rounded my-2">
        <img className="h-7"
            src="https://cdn-icons-png.flaticon.com/512/552/552721.png"
            alt="user"
        />
        <div className="px-3">
            <p className="font-bold">{name}</p>
            <p>{text}</p>
        </div>
    </div>
  )
}

export default SingleComment;