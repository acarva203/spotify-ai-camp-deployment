import React from 'react';

function Conclusion() {
  return (
    <section className="page-section bg-light" id="conclusion">
      <div className="container">
        <div className="text-center">
          <h2 className="section-heading text-uppercase">Conclusion</h2>
          {/* <h3 className="section-subheading text-muted">placeholder</h3> */}
        </div>
        <div className="row justify-content-center">
          {/* Service Item 1 */}
          <div className="col-lg-8">
            <p className="lead"> In conclusion, our dataset was likely the cause for our low accuracy. Even after classifing the subgenres given into 16 overarching genres, our KNN model could only correctly predict the genre of the song once for every three songs. This was due to most audio features in the dataset simply not correlating well enough to a songs genre. However, we believe that in the future, with a larger dataset and more audio features, we could create a model that could predict a songs genre with a higher accuracy. 
            </p>
          </div>
          {/*<div className="col-md-4">
            <h4 className="my-3">So What</h4>
            <p className="text-muted">place holder
            </p>
          </div>*/}
        </div>
      </div>
    </section>
  );
}

export default Conclusion;