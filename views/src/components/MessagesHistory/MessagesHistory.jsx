import React, { useRef } from 'react'
import "./MessagesHistory.css"
import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm';

const TextBubble = ({ myText, otherText }) => {
  const iconRef = useRef(null);

  const handleClick = () => {
    if (!iconRef.current) return;

    navigator.clipboard.writeText(otherText).then(() => {
      iconRef.current.src = iconRef.current.src.replace("copy-icon.svg", "check-icon.svg");
      setTimeout(() => {
        iconRef.current.src = iconRef.current.src.replace("check-icon.svg", "copy-icon.svg");
      }, 1000);
    });
  };

  return (
    <section className='text-bubble-container'>
      <p className='text-bubble-myText'>{myText}</p>
      <div className='text-bubble-otherText'>
        <div className='markdown-response'>
          <ReactMarkdown
            children={otherText}
            remarkPlugins={[remarkGfm]}
            components={{
              code({ node, inline, className, children, ...props }) {
                return (
                  <code className={inline ? "inline-code" : "block-code"} {...props}>
                    {children}
                  </code>
                );
              }
            }}
          />
        </div>
        <div className='utils-container'>
          <button title="Copiar" className='copy-button' onClick={handleClick}>
            <img
              ref={iconRef}
              title="Copiar"
              src="src/assets/copy-icon.svg"
              alt="copy"
              className='copy'
            />
          </button>
        </div>
      </div>
    </section>
  );
};


const MessagesHistory = ({messages, bottomRef}) => {
    return (
        <section className='messages-history-container'>
            {messages.map((json, index) => 
                <TextBubble key={index} myText={json.myMessage} otherText={json.IAMessage} />
            )}
            <div ref={bottomRef}>

            </div>
        </section >
    )
}

export default MessagesHistory

