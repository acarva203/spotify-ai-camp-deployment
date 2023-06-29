import React, { useEffect, useRef, useState } from 'react';
import {
  Alert,
  AlertDescription,
  AlertTitle,
} from "@components/ui/alert"

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
      const duration = messageLength * 0.05; // 0.1s per character
  
      // Create a new style element
      const style = document.createElement('style');
      style.innerHTML = `
        @keyframes typing {
          from { width: 0 }
          to { width: ${messageLength}ch }
        }
      `;
  
      // Append the style element to the document head
      document.head.appendChild(style);
  
      // Set the animation on the typewriter element
      typewriterRef.current.style.width = 'fit-content';
      typewriterRef.current.style.animation = `typing ${duration}s steps(${messageLength}, end), blink-caret .75s step-end ${duration}s, fadeOut 0s ${duration}s`;
  
      // Clean up function to remove the style element when the component unmounts or the message changes
      return () => {
        document.head.removeChild(style);
      };
    }
  }, [messageText, key]);
  
  
  useEffect(() => {
    setKey(prevKey => prevKey + 1); // Update the key to trigger component remount
  }, [message]);

  return (
    <Alert>
      <AlertTitle>SoundSeeker Assistant</AlertTitle>
      <AlertDescription key={key} ref={typewriterRef} className="typeWriter">
        {messageText}
      </AlertDescription>
    </Alert>
  );
}

export default ChatGPT;
