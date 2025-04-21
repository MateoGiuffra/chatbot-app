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
    <section className="input-chat-container">
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
      <article className='info-container'>
        <a href="https://github.com/MateoGiuffra" className='github-link' target="_blank" rel="noopener noreferrer">
          <img src="src/assets/github-icon.svg" alt="github" className='github-icon'/>
          <p>Ver más proyectos</p>
        </a>
      </article>
    </section>
  );
};

export default InputChat;

