import React from 'react';
import './InputChat.css';
import { IoSend } from 'react-icons/io5';

const InputChat = ({handleSendMessage, stayBelow}) => {

  const onKeyDownTextArea = (e) =>{
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      e.target.form.requestSubmit();
    }
  }

  return (
    <article className="input-chat-container">
      <form onSubmit={handleSendMessage}>
        <textarea 
          type="text" 
          className="input-chat" 
          name="text"
          placeholder='Pregunta lo que quieras'
          onKeyDown={(e) => onKeyDownTextArea(e)}
          />
        <button type="submit">
          <IoSend />
        </button>
      </form>
    </article>
  );
};

export default InputChat;

