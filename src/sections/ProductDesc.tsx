import React from 'react';
import Link from 'next/link';
import Image from 'next/image'
import flowchart from '@public/flowchart.png';

function ProductDesc() {
  return (
    <section className="py-12" id="product-description">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-semibold uppercase">Why SoundSeeker?</h2>
        </div>
        <div className="flex justify-center">
          <div className="lg:w-2/3 text-center">
            <p className="text-lg mb-6">Imagine a world where...</p>
            <ul className="list-disc pl-5 mb-6 text-center mx-auto">
              <li className="text-lg">You&apos;re constantly discovering new music that resonates with your soul</li>
              <li className="text-lg">Your playlists are always fresh, curated to your unique taste</li>
              <li className="text-lg">You receive personalized recommendations that hit the mark every time</li>
              <li className="text-lg">You&apos;re part of a fun and interactive experience that makes all of the above possible</li>
            </ul>
            <p className="text-lg mb-6">Welcome to that world. Welcome to <Link href="/product" className="text-blue-500">SoundSeeker</Link>. And the best part? It&apos;s available for free.</p>
            <p className="text-xl mb-6 font-bold">Here&apos;s why you&apos;ll love SoundSeeker:</p>
            <ol className="list-decimal pl-5 mb-6 text-center mx-auto">
              <li className="text-lg mb-6"><b>Save Time and Effort</b>: With our extensive library of songs, you could spend hours, even days, manually searching for songs that match your preferences. Or you could let SoundSeeker do the work. Our platform offers a randomized selection, saving you time and effort in finding music you&apos;ll love.</li>
              <li className="text-lg mb-6"><b>Overcome Decision Fatigue</b>: Ever feel overwhelmed by the sheer number of songs to choose from? SoundSeeker&apos;s randomization feature takes the burden of choice off your shoulders. Sit back, relax, and enjoy the thrill of discovering new tracks.</li>
              <li className="text-lg mb-6"><b>Broaden Your Music Taste</b>: With SoundSeeker, you&apos;ll be exposed to diverse genres, artists, and musical experiences. We encourage you to step out of your comfort zone and discover new favorites. Your musical journey is about to get a lot more exciting.</li>
            </ol>
            <p className="text-lg mb-6">Curious about how we do it? Check out the flowchart we used to map out our processes:</p>
            <div className="flex justify-center">
              <Link href="https://lucid.app/lucidspark/09afb384-3035-43ea-bd58-318a4e67ab1d/edit?viewport_loc=-1993%2C-3230%2C2509%2C1375%2C0_0&invitationId=inv_df9d5244-b4ec-49be-b33b-322b0e79226d">
                <Image src={flowchart} alt="Image" id="myImage" height={500} width={500} />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default ProductDesc;