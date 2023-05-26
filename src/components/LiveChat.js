import React, { useEffect, useState } from 'react'
import ChatMessage from './ChatMessage'
import { useDispatch, useSelector } from 'react-redux';
import { addMessage } from '../utils/chatSlice';
import { generateRandomName, makeRandomMessage } from './helper';

const LiveChat = () => {
  const [LiveMessage, setLiveMessage] = useState("")
  const dispatch = useDispatch();
  const chatMessages = useSelector((store) => store.chat.messages)

    useEffect(() =>{
        const i = setInterval(()=>{
            //API Polling
            // console.log("Api Polling");
            dispatch(
              addMessage({
              name:generateRandomName() ,
              message: makeRandomMessage(20),
            }))
        },2000);
        return () => clearInterval(i);
    },[]);
  return (
      <>
        <div className="">
            <div className="h-[500px] ml-2 p-2 border border-black bg-slate-100 rounded-lg overflow-y-scroll flex flex-col-reverse">
            <div>
              {
                  chatMessages.map((chat, index) => (
                  <ChatMessage key={index} name={chat.name} message={chat.message} />
                ))}
            </div>
          </div>
        </div>
        <form className="w-full p-2 ml-2 border border-black rounded-lg"
         onSubmit={(e) =>{
            e.preventDefault();
           console.log("on from" , LiveMessage);
           dispatch(
            addMessage({
            name:"Sujan",
            message: LiveMessage,
           }))
           setLiveMessage("")
           } }>
            <input type="text" placeholder="Say Something"  className='w-80 border border-b-1 border-b-black p-2' 
            value={LiveMessage} 
            onChange={(e =>{setLiveMessage(e.target.value)})}
            />
            <button className='px-2 mx-2 bg-green-100'> Submit</button>
        </form>
      </>
  )
}

export default LiveChat;