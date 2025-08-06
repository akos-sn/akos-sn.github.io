<html>
<style>
nav ul{
	list-style: none !important;
	list-style-type: none !important;
	margin: 0;
	padding: 0;
	display: flex;
	gap:32px;
	justify-content: flex-end;
}
body{
    background: var(--bg-default);
    font-family: "Outfit", sans-serif;
    color: var(--fg-default);
    margin: auto;
    font-weight: 300;
    line-height: 1.5;
}
main{
	max-width: unset;
}
ul li {
    padding: 6px 0;
    list-style-type: square;
}
.photo {
    background-image: url('./src/img/akos-cropped.jpg');
    background-size: cover;
    background-position: center;
}
#introduction{
    display:flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    padding: 120px 0;
}
#introduction > p {
    text-align: center;
    /* font-size: 3em; */
    font-size: clamp(1.7em, 3vw, 3em);
    /* clamp   ^^^  */
    width: 60%;
    min-width: 280px;
}
.avatar-wrapper {
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: flex-end;
}
.avatar {
    max-width: 200px;
    border-radius: 100%;
}
#core-values {
    display:flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    margin: 64px auto;
}
#core-values > h3 {
    margin: 4px;
}
#core-values .work-card {
    text-align: center;
}
section {
    max-width: 1600px;
    margin: 0 auto;
    padding: 0 16px;
}
a:any-link{
    color: var(--fg-default);
}
hr {
    border: 0;
    border-top: 1px solid var(--fg-default) ;
}
h2 {
    font-size: 3em;
    font-weight: 500;
}
#about {
    margin-bottom: 40px;
}
.about-highlight {
    font-size: 1.4em;
    line-height: 1.4;
}
.about-description {
    font-size: 1.1em;
    line-height: 1.7;
}
#work {
    margin-bottom: 40px;
}
.work-card {
    border-radius: 20px;
    background: var(--bg-subtle);
    padding: 12px 16px;
    display: flex;
    flex-direction: column;
    gap: 4px;
}
.work-card > h3 {
    margin: 0;
}
.work-card > h4 {
    margin: 0;
}
.work-card > p {
    margin: 0;
}
.work-grid {
    display: flex; 
    flex-direction: column;
    gap: 16px;
}
.work-grid > a {
    text-decoration: none;
}
/* .carousel */
img.reload {
    padding: 0.25em;
    display: block-inline;
    top: 6px;
    height: 0.9em;
  }
  .project-grid {
    margin: 160px 0;
  }
  .project-tags{
    font-weight: 500;
    text-transform: uppercase;
  }
  .carousel {
    width: 100%;
    max-width: 900px;
    padding: 0;
  }
  .carousel .carousel-items {
    padding: 0;
  }
  .carousel-image > img {
    width: 100%;
    /* aspect-ratio: 16 / 10; */
  }
  .controls {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
  .controls > p {
    font-size: 1.2em;
  }
  .carousel-arrow {
    font-size: 1.5em;
    cursor: pointer;
    border: none;
    background: none;
    min-height: 44px;
    min-width: 44px;
    display: inline-flex;
    align-items: center;
    justify-content: center;
  }
  .carousel-arrow > svg {
    fill: var(--fg-default);
  }
  .carousel .carousel-items.focus {
    padding: 2px;
    border: solid 3px #005a9c;
  }
  .carousel .carousel-item {
    display: none;
    /* max-height: 400px; */
    max-width: 900px;
    overflow: hidden;
    width: 100%;
  }
  .carousel .carousel-item.active {
    display: block;
  }
  .carousel-arrow:hover {
    background-color: var(--bg-subtle);
  }
  /* More accessible carousel styles, with caption and controls above/below image */
  .carousel-moreaccessible {
    padding: 0;
    margin: 0;
    border: #eee solid 4px;
    border-radius: 5px;
  }
  /* Shared CSS for Pause and Tab Controls */
  .carousel-moreaccessible .controls {
    top: 0;
    left: 0;
    padding: 0.25em 0.25em 0;
  }
  .carousel.carousel-moreaccessible .controls {
    position: static;
    height: 36px;
  }
  .controls > button {
    min-height: 44px;
  }
  .carousel.carousel-moreaccessible .controls button.previous {
    right: 60px;
  }
  .carousel.carousel-moreaccessible .controls button.next {
    right: 6px;
  }
  .carousel-moreaccessible .carousel-items,
  .carousel-moreaccessible .carousel-items.focus {
    padding: 0;
    border: none;
  }
  .carousel-moreaccessible .carousel-items.focus .carousel-image a {
    padding: 2px;
    border: 3px solid #005a9c;
  }
  /* More accessible caption styling */
  .carousel-moreaccessible .carousel-item {
    padding: 0;
    margin: 0;
    max-height: none;
  }
  .carousel-moreaccessible .carousel-item .carousel-caption {
    position: static;
    padding: 0;
    margin: 0;
    height: 60px;
    color: black;
  }
footer svg {
    fill: var(--fg-default);
}
@media screen and (min-width: 600px) {
    #introduction {
        height: 100vh;
        padding: 0;
    }
    .about-highlight {
        font-size: 1.8em;
        line-height: 1.4;
    }   
    .about-description {
        font-size: 1.2em;
        line-height: 1.7;
    }
    .about-grid {
        margin-bottom: 40px;
        display: grid; 
        max-width: 1400px;
        grid-template-columns: 2fr 4fr; 
        grid-template-rows: 1fr; 
        grid-column-gap: 120px;
        grid-row-gap: 0px; 
    }
    .work-grid {
        display: grid; 
        grid-template-columns: 1fr 1fr 1fr; 
        grid-gap: 24px;
    }
    .work-card {
        padding: 40px 40px;
    }
    .project-grid {
        display: grid; 
        grid-template-columns: 1fr 2fr; 
        grid-template-rows: 1fr; 
        grid-column-gap: 24px;
        grid-row-gap: 0px; 
    }
    .carousel .carousel-items {
        padding: 64px;
        background: #131313;
        border-radius: 24px;
      }
    section {
        padding: 0 40px;
    }
}
</style>
        <section id="introduction">
            <img class="avatar" src="/assets/img/akos-2024.jpg" />
            <p>
                UX Practitioner and Design Engineer based in the Netherlands with a focus on innovative, inclusive and sustainable solutions.
            </p>
        </section>
        <hr>
        <section id="core-values">
            <h2>Core Values</h2>
            <!--             <h3>1. Inclusivity</h3>
            <p>A design usable by anyone is a good product experience.</p>
            <h3>2. Simplicity</h3>
            <p>Elegant, minimalist design approaches complex challenges with thoughtful, seemingly effortless solutions.</p>
            <h3>3. Empathy</h3>
            <p>Listening to human pain-points and addressing them during design proposals.</p> -->
            <div class="work-grid">
                <div class="work-card">
                    <h3>1. Inclusivity</h3>
                    <p>A design usable by anyone is a good product experience.</p>
                </div>
                <div class="work-card">
                    <h3>2. Simplicity</h3>
                    <p>Elegant, minimalist design approaches complex challenges with thoughtful, seemingly effortless solutions.</p>
                </div>
                <div class="work-card">
                    <h3>3. Empathy</h3>
                    <p>Listening to human pain-points and addressing them during design proposals.</p>
                </div>
                <div class="work-card">
                    <h3>4. Authenticity</h3>
                    <p>Everything has a character that us humans resonate with. Designing with this character in mind evolves the look-and-feel of a product.</p>
                </div>
                <div class="work-card">
                    <h3>5. Curiousity</h3>
                    <p>Continuous learning, experimentation drives innovation and growth.</p>
                </div>
        </section>
        <hr>
        <section id="about">
                <h2>
                    About me
                </h2>
                <div class="about-grid">
                    <div>
                        <p class="about-highlight">
                            I make design decisions by listening to customer pain-points and tracking product measurements.
                            Innovation comes from need and usability.
                        </p>
                    </div>
                    <div>
                        <p class="about-description">
                            10+ years of experience working in Design including 6+ years of UI/UX in the B2B SaaS industry
                        </p>
                    <p class="about-description">
                        As a UX Designer, I’m passionate about driving UX maturity and empowering designers to reach their full potential. I aim to bridge the gap between design and engineering, fostering collaboration that transforms ideas into innovative, user-centered solutions.
                    </p>
                    <p class="about-description">
                        I’m a firm believer of the importance of a holistic product mindset, especially when crafting visions that inspire teams and guide products toward meaningful impact. For me, great design isn’t just effective — it’s also inclusive, ensuring usable and delightful experiences for everyone.
                    </p>
                    </div>
                </div>
            <div class="work-grid">
                <div class="about-description">
                    <h3>UX skills</h3>
                    <ul>
                        <li>Product design</li>
                        <li>Research and Usability testing</li>
                        <li>UX Copywriting</li>
                        <li>Designing for accessibility and inclusivity</li>
                        <li>Design System</li>
                        <li>Developing UX Maturity</li>
                    </ul>
                </div>
                <div class="about-description">
                    <h3>Engineering skills</h3>
                    <ul>
                        <li>HTML, CSS, Javascript</li>
                        <li>Web accessibility</li>
                        <li>Building coded design prototypes using Vue3</li>
                        <li>Experience building React apps</li>
                    </ul>
                </div>
                <div class="about-description">
                    <h3>Other skills</h3>
                    <ul>
                        <li>Conducting Design Sprints to drive innovation</li>
                        <li>Writing documentation</li>
                        <li>Leadership and mentoring</li>
                        <li>Product discovery</li>
                        <li>Fluent English & Beginner Dutch</li>
                        <li>Working in an international team</li>
                    </ul>
                </div>
            </div>
        </section>
        <hr>
        <section id="work">
            <h2>
                Previous work
            </h2>
            <div class="work-grid">
                <div class="work-card">
                    <h3>TOPdesk</h3>
                    <h4>Product & Design System</h4>
                    <p>IT Service Management</p>
                    <p>From 2023</p>
                </div>
                <div class="work-card">
                    <h3>Lufthansa Techik (ex-AERQ)</h3>
                    <h4>Product Designer</h4>
                    <p>Aviation</p>
                    <p>External team member 2023</p>
                </div>
                <div class="work-card">
                    <h3>Melkweg</h3>
                    <h4>Senior Product Designer and Consultant</h4>
                    <p>Digital Agency</p>
                    <p>2023</p>
                </div>
                <div class="work-card">
                    <h3>Neticle & Zurvey.io</h3>
                    <h4>Senior Product Designer</h4>
                    <p>Media Analysis Startup & Survey and Customer Experience</p>
                    <p>2018 – 2022</p>
                </div>
                <div class="work-card">
                    <h3>Plus Kreativ</h3>
                    <h4>Designer and Front-end Developer</h4>
                    <p>Digital Agency</p>
                    <p>2017</p>
                </div>
                <div class="work-card">
                    <h3>Frank Digital</h3>
                    <h4>Key Visual Artist / Junior Art Director</h4>
                    <p>Digital Agency</p>
                    <p>2017</p>
                </div>
                <div class="work-card">
                    <h3>Oktafone</h3>
                    <h4>Junior UI Designer and Front-end Developer</h4>
                    <p>Digital Agency</p>
                    <p>2016 – 2017</p>
                </div>
                <div class="work-card">
                    <h3>Crocobee</h3>
                    <h4>Graphic Designer and Front-end Developer</h4>
                    <p>Digital Agency</p>
                    <p>2015 – 2016</p>
                </div>
                <div class="work-card">
                    <h3>ZUG</h3>
                    <h4>Co-founder, Front-end Engineering, Art Direction</h4>
                    <p>Freelancing Designer Community</p>
                    <p>2017 – 2022</p>
                </div>
        </section>
        <hr>
        <section id="projects">
                <h2>Projects</h2>
                <div id="project-motie" class="project-grid">
                    <div>
                        <h3>motie.</h3>
                        <p class="project-tags">UX + Frontend</p>
                        <p>Motie is a practice micro-app project of mine.</p>
                        <p>The aim for this project is twofold. One is for me to have a project I can practice my ReactJS chops on, the other is to practice designing for a truly Human problem.</p>
                        <p>The primary problem I try to face is the problem of overstimulation during planning. By creating restrictions, we're forced to make do with our toolkit. Without productivity features in every nook and cranny, we never waste time to select the proper tools. We only need a sticky note.</p>
                    </div>
                    <section id="myCarousel" class="carousel" aria-roledescription="carousel" aria-label="Highlighted television shows">
                        <div class="carousel-inner">
                          <div id="myCarousel-items" class="carousel-items" aria-live="off">
                            <div class="carousel-item active" role="group" aria-roledescription="slide" aria-label="1 of 6">
                              <div class="carousel-image">
                                  <img src="/assets/img/motie-1.jpg" alt="">
                              </div>
                            </div>
                            <div class="carousel-item" role="group" aria-roledescription="slide" aria-label="2 of 6">
                              <div class="carousel-image">
                                <img src="/assets/img/motie-2.jpg" alt="">
                            </div>
                            </div>
                            <div class="carousel-item" role="group" aria-roledescription="slide" aria-label="3 of 6">
                              <div class="carousel-image">
                                <img src="/assets/img/motie-3.jpg" alt="">
                            </div>
                            </div>
                          </div>
                        </div>
                          <div class="controls">
                            <p><span class="carousel-current"></span>/<span class="carousel-max"></span></p>
                            <div>
                            <button type="button" class="previous carousel-arrow" aria-controls="myCarousel-items" aria-label="Previous Slide">
                              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24"><path d="m12.718 4.707-1.413-1.415L2.585 12l8.72 8.707 1.413-1.415L6.417 13H20v-2H6.416l6.302-6.293z"/></svg>
                            </button>
                            <button type="button" class="next carousel-arrow" aria-controls="myCarousel-items" aria-label="Next Slide">
                              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24"><path d="M11.293 4.707 17.586 11H4v2h13.586l-6.293 6.293 1.414 1.414L21.414 12l-8.707-8.707-1.414 1.414z"/></svg>
                            </button>
                            </div>
                          </div>
                </div>
                <div id="zurvey" class="project-grid">
                    <div>
                        <h3>zurvey.io</h3>
                        <p class="project-tags">UX</p>
                        <p>A survey and CX toolkit product of Neticle.</p>
                        <p>Zurvey is a text-analytics supported survey tool. The problem it's aiming to solve is the time-consuming processing of open-ended responses by analysing the texts with keyword-based sentiment analysis.</p>
                        <p>While working on this platform, we started to think of Zurvey as a CX solution rather than a simple survey creator.</p>
                        <p>Other than creating surveys, the Users can upload spreadsheets, connect API inputs or set up Email forwarding as Customer Support use-cases.</p>
                    </div>
                    <section id="myCarousel" class="carousel" aria-roledescription="carousel" aria-label="Highlighted television shows">
                        <div class="carousel-inner">
                          <div id="myCarousel-items" class="carousel-items" aria-live="off">
                            <div class="carousel-item active" role="group" aria-roledescription="slide" aria-label="1 of 6">
                              <div class="carousel-image">
                                  <img src="/assets/img/zurvey-1.png" alt="">
                              </div>
                            </div>
                            <div class="carousel-item" role="group" aria-roledescription="slide" aria-label="2 of 6">
                              <div class="carousel-image">
                                <img src="/assets/img/zurvey-2.png" alt="">
                            </div>
                            </div>
                            <div class="carousel-item" role="group" aria-roledescription="slide" aria-label="3 of 6">
                              <div class="carousel-image">
                                <img src="/assets/img/zurvey-3.png" alt="">
                            </div>
                            </div>
                            <div class="carousel-item" role="group" aria-roledescription="slide" aria-label="3 of 6">
                                <div class="carousel-image">
                                  <img src="/assets/img/zurvey-4.png" alt="">
                              </div>
                              </div>
                          </div>
                        </div>
                          <div class="controls">
                            <p><span class="carousel-current"></span>/<span class="carousel-max"></span></p>
                            <div>
                            <button type="button" class="previous carousel-arrow" aria-controls="myCarousel-items" aria-label="Previous Slide">
                              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24"><path d="m12.718 4.707-1.413-1.415L2.585 12l8.72 8.707 1.413-1.415L6.417 13H20v-2H6.416l6.302-6.293z"/></svg>
                            </button>
                            <button type="button" class="next carousel-arrow" aria-controls="myCarousel-items" aria-label="Next Slide">
                              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24"><path d="M11.293 4.707 17.586 11H4v2h13.586l-6.293 6.293 1.414 1.414L21.414 12l-8.707-8.707-1.414 1.414z"/></svg>
                            </button>
                            </div>
                          </div>
                </div>
                <div id="nmi" class="project-grid">
                    <div>
                        <h3>Neticle Media Intelligence</h3>
                        <p class="project-tags">UX</p>
                        <p>Neticle Media Intelligence is the flagship product of Neticle. NMI is a Machine Learning-driven media-monitoring platform turning textual data into measurable information based on keywords and semantic phrases.</p>
                    </div>
                    <section id="myCarousel" class="carousel" aria-roledescription="carousel" aria-label="Highlighted television shows">
                        <div class="carousel-inner">
                          <div id="myCarousel-items" class="carousel-items" aria-live="off">
                            <div class="carousel-item active" role="group" aria-roledescription="slide" aria-label="1 of 6">
                              <div class="carousel-image">
                                  <img src="/assets/img/nmi-1.png" alt="">
                              </div>
                            </div>
                            <div class="carousel-item" role="group" aria-roledescription="slide" aria-label="2 of 6">
                              <div class="carousel-image">
                                <img src="/assets/img/nmi-2.png" alt="">
                            </div>
                            </div>
                            <div class="carousel-item" role="group" aria-roledescription="slide" aria-label="3 of 6">
                              <div class="carousel-image">
                                <img src="/assets/img/nmi-3.png" alt="">
                            </div>
                            </div>
                          </div>
                        </div>
                          <div class="controls">
                            <p><span class="carousel-current"></span>/<span class="carousel-max"></span></p>
                            <div>
                            <button type="button" class="previous carousel-arrow" aria-controls="myCarousel-items" aria-label="Previous Slide">
                              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24"><path d="m12.718 4.707-1.413-1.415L2.585 12l8.72 8.707 1.413-1.415L6.417 13H20v-2H6.416l6.302-6.293z"/></svg>
                            </button>
                            <button type="button" class="next carousel-arrow" aria-controls="myCarousel-items" aria-label="Next Slide">
                              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24"><path d="M11.293 4.707 17.586 11H4v2h13.586l-6.293 6.293 1.414 1.414L21.414 12l-8.707-8.707-1.414 1.414z"/></svg>
                            </button>
                            </div>
                          </div>
                </div>
                <div id="music" class="project-grid">
                    <div>
                        <h3>Sample Instruments</h3>
                        <p class="project-tags">UX + Coding + Sound</p>
                        <p>Creating and designing sample libraries is a passion project of mine. Essentially, these are instruments recorded one note at a time to transform them into a new playable instrument controlled by midi.</p>
                        <p>Composing these instruments require a lot of attention to detail. With the UI, I try to communicate what mood might these libraries evoke or how inspiration came to me.</p>
                    </div>
                    <section id="myCarousel" class="carousel" aria-roledescription="carousel" aria-label="Highlighted television shows">
                        <div class="carousel-inner">
                          <div id="myCarousel-items" class="carousel-items" aria-live="off">
                            <div class="carousel-item active" role="group" aria-roledescription="slide" aria-label="1 of 6">
                              <div class="carousel-image">
                                  <img src="/assets/img/music-1.png" alt="">
                              </div>
                            </div>
                            <div class="carousel-item" role="group" aria-roledescription="slide" aria-label="2 of 6">
                              <div class="carousel-image">
                                <img src="/assets/img/music-2.png" alt="">
                            </div>
                            </div>
                            <div class="carousel-item" role="group" aria-roledescription="slide" aria-label="3 of 6">
                              <div class="carousel-image">
                                <img src="/assets/img/music-3.png" alt="">
                            </div>
                            </div>
                          </div>
                        </div>
                          <div class="controls">
                            <p><span class="carousel-current"></span>/<span class="carousel-max"></span></p>
                            <div>
                            <button type="button" class="previous carousel-arrow" aria-controls="myCarousel-items" aria-label="Previous Slide">
                              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24"><path d="m12.718 4.707-1.413-1.415L2.585 12l8.72 8.707 1.413-1.415L6.417 13H20v-2H6.416l6.302-6.293z"/></svg>
                            </button>
                            <button type="button" class="next carousel-arrow" aria-controls="myCarousel-items" aria-label="Next Slide">
                              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24"><path d="M11.293 4.707 17.586 11H4v2h13.586l-6.293 6.293 1.414 1.414L21.414 12l-8.707-8.707-1.414 1.414z"/></svg>
                            </button>
                            </div>
                          </div>
                </div>
                    </section>
                </div>
        </section>
</html>
