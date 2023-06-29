import React from 'react';
import Link from 'next/link';

function Masthead() {
  return (
    <header className="masthead pt-28 pb-16 md:pt-64 md:pb-48 text-center text-white relative">
      <div className="container">
        <div className="masthead-subheading text-lg italic leading-6 md:text-4xl md:leading-9 mb-10 font-serif">Welcome to SoundSeeker!</div>
        <div className="masthead-heading text-6xl font-bold leading-12 md:text-9xl md:leading-15 mb-16 font-sans">Its Nice To Meet You!</div>
        <Link className="btn btn-primary btn-xl uppercase" href="/product">Try out our product</Link>
      </div> 
    </header>
  );
}

export default Masthead;

