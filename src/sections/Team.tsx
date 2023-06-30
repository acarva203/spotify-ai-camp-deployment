import React from 'react';
import Image from 'next/image';
import Aishari from '@public/Aishwari.png';
import Ayana from '@public/Ayana.png';
import Rex from '@public/Rex.png';
import Travis from '@public/Travis.jpg';
import Roshni from '@public/Roshni.png';
import Alex from '@public/Alex.png';
import Andy from '@public/Andy.jpg';
// import placeholderImage from '@public/placeholderImage.jpeg';

function Team() {
  return (
    <section className="page-section" id="team">
      <div className="container">
        <div className="text-center">
          <h2 className="section-heading text-uppercase">Our Amazing Team</h2>
        </div>
        <div className="row">
          <div className="col-lg-4">
            <div className="team-member">
              <Image src={Travis} alt="Travis Peng" className="mx-auto rounded-circle" />
              <h4>Travis Peng</h4>
              <p className="text-muted">Hello! Im currently a rising junior passionate about AI. Some of my hobbies include cross country, badminton, and mountain biking.</p>
            </div>
          </div>
          <div className="col-lg-4">
            <div className="team-member">
              <Image src={Roshni} alt="Roshni Yousuf" className="mx-auto rounded-circle" />
              {/* <Image src={placeholderImage} alt="Roshni Yousuf" className="mx-auto rounded-circle" /> */}
              <h4>Roshni Yousuf</h4>
              <p className="text-muted">I&apos;m a rising senior and I am really happy I got to take part in the program! I love singing and listening to/making music. I love being outside and skateboarding.</p>
            </div>
          </div>
          <div className="col-lg-4">
            <div className="team-member">
              <Image src={Rex} alt="Rex Wang" className="mx-auto rounded-circle" />
              <h4>Rex Wang</h4>
              <p className="text-muted">I do vector graphics and vector art for fun. I also do logos for people online for free (if you ask nicely). Find me on Discord, @verkii_. I definitely look like this in real life, yes. Yep, yeah.  </p>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-lg-4">
            <div className="team-member">
              <Image src={Alex} alt="Alex Du" className="mx-auto rounded-circle" />
              <h4>Alex Du</h4>
              <p className="text-muted">Hi, I exist. (maybe)</p>
            </div>
          </div>
          <div className="col-lg-4">
            <div className="team-member">
              <Image src={Ayana} alt="Ayana Javed" className="mx-auto rounded-circle" />
              <h4>Ayana Javed</h4>
              <p className="text-muted">Hi! Im currently a rising senior interested in machine learning and the future of AI. In my free time, I enjoy listening to music (A$AP Rocky and Childish Gambino are some favs) and playing my piano.</p>
            </div>
          </div>
          <div className="col-lg-4">
            <div className="team-member">
              <Image src={Aishari} alt="Aishwari Sirur" className="mx-auto rounded-circle" />
              <h4>Aishwari Sirur</h4>
              <p className="text-muted">Currently a rising senior eager to learn more about AI. I knit and write a lot. </p>
            </div>
          </div>
          <div className="col-lg-4">
            <div className="team-member">
              <Image src={Andy} alt="Andy Yang" className="mx-auto rounded-circle" />
              <h4>Andy Yang</h4>
              <p className="text-muted">I&apos;m a rising senior studying data science at Boston University. Some of my hobbies include lifting weights, playing tennis, fashion, and eating food.</p>
          </div>
        </div>
      </div>
      </div>
      <div className="about_us">
        <h3>About Us</h3>
        <p className="lead">We are a team of high school students learning about AI implementation and data science through practical experience and projects like our <a href="product">product</a>. The three-week virtual summer camp with <a href="https://www.ai-camp.org/?utm_source=google&utm_medium=wix-smart-campaign&utm_campaign=google-ads-campaign-2023-6-21-de5493b7&gclid=Cj0KCQjwtO-kBhDIARIsAL6LoreldNcheFAsUbJ-mh4tbQGN8JSKR0smSVffwcJTymKACVvmfQ40ZDYaAjMPEALw_wcB"> AI-Camp</a> taught us how to interpret these large datasets, analyze given data, and reach fruitful conclusions. If you like what you saw here and want to know more, feel free to check them out. </p>
      </div>
    </section>
  );
}

export default Team;
