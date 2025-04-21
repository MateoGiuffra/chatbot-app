import React, { useState } from 'react';
import InputChat from '../components/InputChat/InputChat';
import MessagesHistory from '../components/MessagesHistory/MessagesHistory';
import './Home.css';
import call from '../services/OpenAiService';
import { useRef, useEffect } from 'react';
const Home = () => {
  const [messages, setNewMessages] = useState([]);

  const sendMessage = async (e) => {
    try{
      e.preventDefault()
      const inputValue = e.target.elements.text.value;
      if (inputValue === ""){
        return
      }
      const answer = await call(inputValue);
      const newMessage = {
        myMessage: inputValue,
        IAMessage: answer,
      };
      setNewMessages(prev => [...prev, newMessage]);
    }catch(err){
      console.log(err)
    }finally{
      e.target.elements.text.value = ""
    }
    
  };

  const bottomRef = useRef(null);

  useEffect(() => {
    bottomRef.current?.scrollIntoView({ behavior: 'instant' });
  }, [messages]); 

  return (
    <div className="home-container" >
      {messages.length > 0 ? (
       <div className='chat-container'>
          <MessagesHistory messages={messages} bottomRef={bottomRef}/>
          <div id="input-chat">
            <InputChat
              handleSendMessage={(e) => sendMessage(e)}
              stayBelow={true}
            />
          </div>
        </div>
      ) : (
        <section className='home-container-welcome'>
          <h1>¿Con qué puedo ayudarte?</h1>
          <div id="input-chat">
            <InputChat
              handleSendMessage={(e) => sendMessage(e)}
              stayBelow={false}
            />
          </div>
        </section>
      )}
    </div>
  );
  
};

export default Home;
