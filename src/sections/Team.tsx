import React from 'react';

function Team() {
  return (
    <section className="page-section" id="team">
      <div className="container">
        <div className="text-center">
          <h2 className="section-heading text-uppercase">Our Amazing Team</h2>
          {/* <h3 className="section-subheading text-muted">placeholder</h3>*/}
        </div>
        <div className="row">
          <div className="col-lg-4">
            <div className="team-member">
              <img className="mx-auto rounded-circle" src="@assets/img/team/placeholder-image-person-jpg.jpeg" alt="..." />
              <h4>Travis Peng</h4>
              <p className="text-muted">Hello!</p>
            </div>
          </div>
          <div className="col-lg-4">
            <div className="team-member">
              <img className="mx-auto rounded-circle" src="@assets/img/team/placeholder-image-person-jpg.jpeg" alt="..." />
              <h4>Roshni Yousuf</h4>
              <p className="text-muted">placeholder</p>
            </div>
          </div>
          <div className="col-lg-4">
            <div className="team-member">
              <img className="mx-auto rounded-circle" src="@assets/img/team/Rex.png" alt="..." />
              <h4>Rex Wang</h4>
              <p className="text-muted">I do vector graphics and vector art for fun. I also do logos for people online for free (if you ask nicely). Find me on Discord, @verkii_. I definitely look like this in real life, yes. Yep, yeah.  </p>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-lg-4">
            <div className="team-member">
              <img className="mx-auto rounded-circle" src="@assets/img/team/placeholder-image-person-jpg.jpeg" alt="..." />
              <h4>Alex Du</h4>
              <p className="text-muted">place holder</p>
            </div>
          </div>
          <div className="col-lg-4">
            <div className="team-member">
              <img className="mx-auto rounded-circle" src="@assets/img/team/placeholder-image-person-jpg.jpeg" alt="..." />
              <h4>Ayana Javed</h4>
              <p className="text-muted">place holder</p>
            </div>
          </div>
        <div className="col-lg-4">
          <div className="team-member">
            <img className="mx-auto rounded-circle" src="@assets/img/team/Aishwari.png" alt="..." />
            <h4>Aishwari Sirur</h4>
            <p className="text-muted">Currently a rising senior eager to learn more about AI. I knit and write a lot. </p>
          </div>
        </div>
          <div className="col-lg-4">
          <div className="team-member">
            
            <h4>Andy Yang</h4>
            <p className="text-muted">placeholder </p>
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
