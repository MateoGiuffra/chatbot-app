import React, { useState } from 'react';
import InputChat from '../components/InputChat/InputChat';
import MessagesHistory from '../components/MessagesHistory/MessagesHistory';
import './Home.css';
import call from '../services/OpenAiService';

const Home = () => {
  const [messages, setNewMessages] = useState([]);

  const sendMessage = (e) => {
    try{
      e.preventDefault()
    const inputValue = e.target.elements.text.value;
    if (inputValue === ""){
      return
    }
    const answer = call(inputValue);
    console.log(answer)
    const newMessage = {
      myMessage: inputValue,
      IAMessage: answer,
    };
    setNewMessages(prev => [...prev, newMessage]);
    console.log(messages)
    }catch(err){
      console.log(err)
    }finally{
      e.target.elements.text.value = ""
    }
    
  };

  return (
    <div className="home-container">
      {messages.length > 0 ? (
        <MessagesHistory messages={messages} />
      ) : (
        <h1>¿Con qué puedo ayudarte?</h1>
      )}

      <div id='input-chat'>
        <InputChat handleSendMessage={(e) => sendMessage(e)} stayBelow={messages.length > 0} />
      </div>
    </div>
  );
};

export default Home;
