import React from 'react'

const commentsData = [
  {
    name: "Sujan Pal",
    text: "Lorem ipsum dolor sit amet, consecttur adip",
    replies: [

    ]
  },
  {
    name: "Sujan Pal",
    text: "Lorem ipsum dolor sit amet, consecttur adip",
    replies: [
      {
        name: "Sujan Pal",
        text: "Lorem ipsum dolor sit amet, consecttur adip",
        replies: [
    
        ]
      },
      {
        name: "Sujan Pal",
        text: "Lorem ipsum dolor sit amet, consecttur adip",
        replies: [
          {
            name: "Sujan Pal",
            text: "Lorem ipsum dolor sit amet, consecttur adip",
            replies: [
              {
                name: "Sujan Pal",
                text: "Lorem ipsum dolor sit amet, consecttur adip",
                replies: [
                  {
                    name: "Sujan Pal",
                    text: "Lorem ipsum dolor sit amet, consecttur adip",
                    replies: [
                
                    ]
                  },
                  {
                    name: "Sujan Pal",
                    text: "Lorem ipsum dolor sit amet, consecttur adip",
                    replies: [
                
                    ]
                  }
                ]
              },
            ]
          },
        ]
      }
    ]
  },
  {
    name: "Sujan Pal",
    text: "Lorem ipsum dolor sit amet, consecttur adip",
    replies: [
      
    ]
  },
  {
    name: "Sujan Pal",
    text: "Lorem ipsum dolor sit amet, consecttur adip",
    replies: [
      
    ]
  },
  {
    name: "Sujan Pal",
    text: "Lorem ipsum dolor sit amet, consecttur adip",
    replies: [
      
    ]
  },
  
]
const CommentsContainer = () => {
  return (
    <div className="m-5 p-2">
        <h1 className='text-2xl font-bold'>Comments:</h1>
    </div>
  )
}

export default CommentsContainer