import React, { useEffect } from 'react'
import ChatMessage from './ChatMessage'
import { useDispatch, useSelector } from 'react-redux';
import { addMessage } from '../utils/chatSlice';
import { generateRandomName, makeRandomMessage } from './helper';

const LiveChat = () => {
  const dispatch = useDispatch();
  const chatMessages = useSelector((store) => store.chat.messages)

    useEffect(() =>{
        const i = setInterval(()=>{
            //API Polling
            console.log("Api Polling");
            dispatch(
              addMessage({
              name:generateRandomName() ,
              message: makeRandomMessage(20),
            }))
        },2000);
        return () => clearInterval(i);
    },[]);
  return (
      <div className="">
          <div className="h-[500px] ml-2 p-2 border border-black bg-slate-100 rounded-lg overflow-y-scroll flex flex-col-reverse">
            {
              chatMessages.map((chat, index) => (
              <ChatMessage key={index} name={chat.name} message={chat.message} />
            ))}
            
        </div>
      </div>
  )
}

export default LiveChat;