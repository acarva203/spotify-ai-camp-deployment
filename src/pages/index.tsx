import React, { useEffect, useState } from 'react';
import Masthead from '@sections/Masthead';
import TableOfContents from '@sections/TableOfContents';
import ProductDesc from '@sections/ProductDesc';
import EDA from '@sections/EDA';
import Models from '@sections/Models';
import Conclusion from '@sections/Conclusion';
import Team from '@sections/Team';
import Footer from '@sections/Footer';

function HomePage() {
  
  return (
    <>
      <Masthead />
      <TableOfContents />
      <ProductDesc />
      <EDA />
      <Models />
      <Conclusion />
      <Team />
      <Footer />
    </>
  );
}

export default HomePage;
