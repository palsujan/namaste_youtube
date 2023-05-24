import React from 'react';
import SingleComment from './SingleComment';

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

const CommentsList = ({comments}) =>{
  return comments.map((comment, index)=> 
  (
    <div>
      <SingleComment key={index} data={comment}/>
      <div className="pl-5 ml-5 border-l-2">
          <CommentsList comments={comment.replies}/>
      </div>
    </div>
  ))
}

const CommentsContainer = () => {
  return (
    <div className="m-5 p-2">
      <h1 className='text-2xl font-bold'>Comments:</h1>
        <SingleComment data = {commentsData[0]} />
        <CommentsList comments= {commentsData}/>
    </div>
  )
}

export default CommentsContainer