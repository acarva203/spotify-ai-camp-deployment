import React from 'react';
import Image from 'next/image';
import Dataframe from '@public/dataframe.png';
import EDA from '@public/EDA.png';
import ML from '@public/ML.png';

function TableOfContents() {
  return (
    <section className="py-12">
      <div className="container mx-auto px-4">
        <div className="text-center">
          <h2 className="text-3xl font-semibold uppercase">Overview</h2>
        </div>
        <div className="flex justify-center text-center mt-8">
          {/* Service Item 1 */}
          <div className="w-full md:w-1/3">
            <a href="https://www.kaggle.com/datasets/maharshipandya/-spotify-tracks-dataset" target="_blank" rel="noopener noreferrer">
              <Image src={Dataframe} alt="Our Dataset" className="mx-auto" height={150} width={150} />
              <h4 className="my-3 text-black">Our Dataset</h4>
            </a>
            <p className="text-gray-600">Our dataset contains Spotify tracks over a range of 100 different genres. Each track has certain audio features associated with it such as danceability and tempo.</p>
          </div>
          {/* Service Item 2 */}
          <div className="w-full md:w-1/3">
            <a href="#EDA">
              <Image src={EDA} alt="Exploratory Data Analysis" className="mx-auto" height={150} width={150} />
            </a>
            <h4 className="my-3">Exploratory Data Analysis</h4>
            <p className="text-gray-600">We created a series of graphs and charts to prove correlations between certain factors.</p>
          </div>
          {/* Service Item 3 */}
          <div className="w-full md:w-1/3">
            <a href="#mlmodels">
              <Image src={ML} alt="Machine Learning" className="mx-auto" height={150} width={150} />
            </a>
            <h4 className="my-3">Machine Learning</h4>
            <p className="text-gray-600">We used Machine Learning to create several models that could recommend new songs based on your preferences.</p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default TableOfContents;

