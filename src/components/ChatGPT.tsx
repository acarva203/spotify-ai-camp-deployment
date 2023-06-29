import React, { useEffect, useRef, useState } from 'react';

type MessageProps = {
  message: {
    text: string;
  };
}

function ChatGPT({ message }: MessageProps) {
  const typewriterRef = useRef<HTMLHeadingElement | null>(null);
  const [key, setKey] = useState(0);
  const messageText = message.text;

  useEffect(() => {
    if (typewriterRef.current) {
      const messageLength = messageText.length;
      typewriterRef.current.style.width = `${messageLength}ch`;
      typewriterRef.current.style.animation = `typing 4s steps(${messageLength}, end), blink-caret .75s step-end infinite`;
    }
  }, [messageText, key]);

  useEffect(() => {
    setKey(prevKey => prevKey + 1); // Update the key to trigger component remount
  }, [message]);

  return <h1 key={key} ref={typewriterRef} className="typeWriter">{messageText}</h1>;
}

export default ChatGPT;
