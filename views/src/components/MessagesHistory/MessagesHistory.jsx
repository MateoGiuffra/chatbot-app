import React from 'react'
import "./MessagesHistory.css"
/**
 * messages = lista de objetos con los campos myMessage y IAMessage
 * */ 
const TextBubble = ({myText, otherText}) =>{
    return(
        <section className='text-bubble-container'>
             <p className='text-bubble-myText'>
                {myText}
            </p>
            <p className='text-bubble-otherText'>
                {otherText}
            </p>
         
        </section>
    )
}


const MessagesHistory = ({messages}) => {
  return (
    <section className='messages-history-container'>
      {messages.map((json, index) => 
        <TextBubble key={index} myText={json.myMessage} otherText={json.IAMessage}></TextBubble>
      )}
    </section>
  )
}

export default MessagesHistory
