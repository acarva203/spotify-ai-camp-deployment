import React from 'react';
import Image1 from '../../public/icons/Dataframe.svg';

function TableOfContents() {
  return (
    <section className="page-section" id="overview">
      <div className="container">
        <div className="text-center">
          <h2 className="section-heading text-uppercase">Overview</h2>
          {/* <h3 className="section-subheading text-muted">placeholder</h3> */}
        </div>
        <div className="row text-center">
          {/* Service Item 1 */}
          <div className="col-md-4">
            <a href="https://www.kaggle.com/datasets/maharshipandya/-spotify-tracks-dataset" target="_blank" rel="noopener noreferrer">
              <img src={Image1} alt="SVG Image"/>
              <h4 className="my-3">Our Dataset</h4>
            </a>
            <p className="text-muted">Our dataset contains Spotify tracks over a range of 100 different genres. Each track has certain audio features associated with it such as danceability and tempo.
            </p>
          </div>
          {/* Service Item 2 */}
          <div className="col-md-4">
            <a href="#EDA"><img src="../../public/icons/EDA.svg" alt="Uploaded SVG" /></a>
            <h4 className="my-3">Exploratory Data Analysis</h4>
            <p className="text-muted">We created a series of graphs and charts to prove correlations between certain factors.
            </p>
          </div>
          {/* Service Item 3 */}
          <div className="col-md-4">
            <a href="#mlmodels"><img src="../../public/icons/ML.svg" alt="Uploaded SVG" /></a>

            <h4 className="my-3">Machine Learning</h4>
            <p className="text-muted">We used Machine Learning to create several models that could recommend new songs based off your preferences.</p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default TableOfContents;

// Use this to optimize image loading: Add images to assets folder directory
// import React from 'react';
// import Image1 from '../../public/icons/Dataframe.svg';
// import Image2 from '../../public/icons/EDA.svg';
// import Image3 from '../../public/icons/ML.svg';

// function TableOfContents() {
//   return (
//     <section className="page-section" id="services">
//       <div className="container">
//         <div className="text-center">
//           <h2 className="section-heading text-uppercase">Table of Contents</h2>
//           <h3 className="section-subheading text-muted">placeholder</h3>
//         </div>
//         <div className="row text-center">
//           {/* Service Item 1 */}
//           <div className="col-md-4">
//             <img src={Image1} alt="Uploaded SVG" width="100" height="100" />
//             <h4 className="my-3">Our Dataset</h4>
//             <p className="text-muted">Our dataset contains Spotify tracks over a range of 100 different genres. Each track has certain audio features associated with it such as danceability and tempo.</p>
//           </div>
//           {/* Service Item 2 */}
//           <div className="col-md-4">
//             <img src={Image2} alt="Uploaded SVG" width="100" height="100" />
//             <h4 className="my-3">Exploratory Data Analysis</h4>
//             <p className="text-muted">We created a series of graphs and charts to explain correlations between certain factors</p>
//           </div>
//           {/* Service Item 3 */}
//           <div className="col-md-4">
//             <img src={Image3} alt="Uploaded SVG" width="100" height="100" />
//             <h4 className="my-3">Machine Learning</h4>
//             <p className="text-muted">We used Machine Learning to recommend new songs based on your preferences</p>
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// }

// export default TableOfContents;

