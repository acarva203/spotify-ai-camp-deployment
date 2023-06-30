import React from 'react';
import Image from 'next/image'
import flowchart from '@public/flowchart.png';

function ProductDesc() {
  return (
    <section className="page-section bg-light" id="product-description">
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-lg-8">
            <h2 className="section-heading text-uppercase">Product Description</h2>
          </div>
        </div>
        <div className="row justify-content-center">
          <div className="col-lg-8">
            <p className="lead"> If you like
            </p>
            <li className="lead">discovering new music</li>
            <li className="lead">curating your playlist</li>
            <li className="lead">getting personalized recommendations</li>
            <li className="lead">a fun and interactive experience for all the above</li>
            <p> </p>
            <p className="lead">You must try our product, <a href="https://music-reccomender-app-v2.travispeng.repl.co/product">SoundSeeker</a>, available for free.</p>
            <p className="lead">Benefits: </p>
            <ol>
            <li><b>Save Time and Effort</b>: With an extensive library of songs available, it can be time-consuming and overwhelming to manually search for songs that match your preferences. Sound Seeker eliminates the need for manual searching by offering a randomized selection, saving users time and effort in finding music they enjoy.</li>
              <p> </p>
            <li><b>Overcome Decision Fatigue</b>: Sometimes, choosing what song to listen to can be challenging, especially when faced with countless options. Sound Seeker's randomization feature alleviates decision fatigue by taking the burden of choice off the user, allowing them to sit back, relax, and enjoy the surprise of discovering new tracks</li>
              <p> </p>
            <li><b>Broaden Music Taste</b>: Sound Seeker can help users broaden their music taste by exposing them to diverse genres, artists, and musical experiences. It encourages users to step out of their comfort zones and discover new favorites, ultimately enriching their musical journey.</li>
              </ol>
            <p className="lead">Flowchart we used to map out processes (Click to see in-depth):</p>
            <a href="https://lucid.app/lucidspark/09afb384-3035-43ea-bd58-318a4e67ab1d/edit?viewport_loc=-1993%2C-3230%2C2509%2C1375%2C0_0&invitationId=inv_df9d5244-b4ec-49be-b33b-322b0e79226d"><Image src={flowchart} alt="Image" id="myImage" height={500} width={500} /></a>

          </div>
        </div>
      </div>
    </section>
  );
}

export default ProductDesc;