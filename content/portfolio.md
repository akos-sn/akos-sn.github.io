<html>
<style>
nav > ul li {
    padding: 0;
}
body{
    background: var(--bg-default);
    color: var(--fg-default);
    margin: auto;
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
    font-size: clamp(1.7em, 3vw, 3em);
    font-weight: 200;
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
#core-values > h2,
#about > h2,
#projects > h2 {
    margin-bottom: 32px;
    text-align: center;
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
hr {
    border: 0;
    border-top: 1px solid var(--border-subtle) ;
}
#about {
    margin-bottom: 40px;
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
.value-card {
  display: flex; 
  flex-direction: column;
  align-items: center;
  text-align: center;
}
.project-grid {
  display: flex; 
  flex-direction: column;
  gap: 64px;
  margin-bottom: 64px;
}
.project-tile {
  display: flex;
  flex-direction: column;
  gap: 8px;
  margin: 0 0 48px 0;
}
.project-title {
  display: flex;
  flex-wrap: wrap;
  gap: 8px;
}
.project-title > sup {
  font-family: var(--font-mono);
  line-height: 2.4rem;
  font-weight: 500;
}
.project-tile img {
  margin-bottom: 16px;
  border-radius: 8px;
  aspect-ratio: 16 / 10;
}
.project-tile a, .project-tile h3 {
  font-size: clamp(1.25rem, 1rem + 1vw, 1.8rem);
	font-weight: 300;
	line-height: 1.1;
	margin: 0;
  margin-bottom: 4px;
}
.project-tile p {
  margin: 0;
}
.project-description {
  font-family: var(--font-mono);
}
.result-header {
  font-weight:600;
  font-size: 1rem; 
}
.result {
  font-size: 1rem; 
}
footer svg {
    fill: var(--fg-gradient);
}
@media screen and (min-width: 900px) {
    #introduction {
        height: calc(100vh - 130px);
        padding: 0;
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
        grid-template-columns: 1fr 1fr; 
        grid-gap: 24px;
    }
    .work-card {
        padding: 40px 40px;
    }
    .project-grid {
        display: grid; 
        grid-template-columns: 1fr 1fr; 
        grid-gap: 48px;
    }
    .carousel .carousel-items {
        padding: 64px;
        background: #131313;
        border-radius: 24px;
      }
    section {
        padding: 0 40px;
    }
    .project-title {
      display: flex;
      flex-wrap: wrap;
      gap: 8px;
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
        <section id="projects">
                <h2>Selected projects</h2>
                <div class="project-grid">
                  <div class="project-tile">
                      <img src="/assets/img/ds-devmode.png">
                      <div class="project-title">
                        <a href="/portfolio/ops-design-system.html"><h3>Design System: Shared language</h3></a>
                      </div>
                      <div class="project-description">
                        <p class="result-header">Design Lead</p>
                        <p class="result">Shared language between developers and designers.</p>
                      </div>
                      <div class="project-description">
                        <p class="result-header">Impact</p>
                        <p class="result">Simplified design handoff process.</p>
                      </div>
                  </div>
                  <div class="project-tile">
                      <img src="/assets/img/ds-vision-thumbnail.png">
                      <div class="project-title">
                        <a href="/portfolio/ops-design-system-vision.html"><h3>Design System: Product vision</h3></a>
                      </div>
                      <div class="project-description">
                        <p class="result-header">Design Lead</p>
                        <p class="result">Showcasing the importance of the Design System as a product</p>
                      </div>
                      <div class="project-description">
                        <p class="result-header">Impact</p>
                        <p class="result">Higher trust and adoption of our Design System.</p>
                      </div>
                  </div>
									<div class="project-tile">
                      <img src="/assets/img/ssp-thumbnail.png">
                      <div class="project-title">
                        <a href="/portfolio/ux-ssp.html"><h3>TOPdesk Self-Service Portal </h3></a>
                      </div>
                      <div class="project-description">
                        <p class="result-header">Design Lead</p>
                        <p class="result">AI-assisted search to fast-track users to meaningful answers to their questions.</p>
                      </div>
                      <div class="project-description">
                        <p class="result-header">Impact</p>
                        <p class="result">Shorter time on task, less incoming requests.</p>
                      </div>
                  </div>
									<div class="project-tile">
                      <img src="/assets/img/measuring-ux-thumbnail.png">
                      <div class="project-title">
                        <a href="/portfolio/ops-measuring-ux.html"><h3>Measuring UX</h3></a>
                      </div>
                      <div class="project-description">
                        <p class="result-header">DesignOps</p>
                        <p class="result">Creating a framework for connecting usability pain points and business goals.</p>
                      </div>
                      <div class="project-description">
                        <p class="result-header">Impact</p>
                        <p class="result">Shared language with PMs, higher engagement in product decisions.</p>
                      </div>
                  </div>
                  <div class="project-tile">
                      <img src="/assets/img/aerq-thumbnail.png">
                      <div class="project-title">
                        <a href="/portfolio/ux-aerq.html"><h3>AERQ</h3></a>
                      </div>
                      <div class="project-description">
                      <p class="result-header">UX</p>
                        <p class="result">Preventive maintenance of aircrafts' in-flight entertainment systems.</p>
                      </div>
                      <div class="project-description">
                        <p class="result-header">Impact</p>
                        <p class="result">A smart notification setup process enabling preventive maintenance.</p>
                      </div>
                  </div>
                  <div class="project-tile">
                      <img src="/assets/img/motie-thumbnail.png">
                      <div class="project-title">
                        <a href="/portfolio/uxdev-motie.html"><h3>motie.</h3></a>
                      </div>
                      <div class="project-description">
                        <p class="result-header">UX+Dev</p>
                        <p class="result">Modular, distraction-free notetaking.</p>
                      </div>
                  </div>
              </div>
        </section>
        <hr>
        <section id="core-values">
            <h2>Core values</h2>
            <div class="value-list">
                <div class="value-card">
                    <h3>1. Inclusivity and empathy</h3>
                    <p>A design usable by anyone is a good product experience. <br />
                    Listening to human pain-points and addressing them during design proposals.</p>
                </div>
                <div class="value-card">
                    <h3>2. Simplicity</h3>
                    <p>Elegant, minimalist design approaches complex challenges with thoughtful, seemingly effortless solutions.</p>
                </div>
                <div class="value-card">
                    <h3>3. Curiousity</h3>
                    <p>Continuous learning, experimentation drives innovation and growth.</p>
                </div>
              </div>
        </section>
        <hr>
        <section id="about">
                <h2>
                    About me
                </h2>
            <div class="work-grid">
                <div class="about-description">
                    <h3>Highlighted efforts</h3>
										<p>My mission is to nurture a healthy organisation with a high level of maturity.</p>
                    <ul class="effort-list">
                        <li>Shared language between Engineers and Designers via the Design System</li>
												<li>Creating a long-term vision for the future of both the Design System as a product and the Navigation team</li>
												<li>Facilitated workshops and Design Sprints</li>
												<li>Worked on the Growth Path for UX practitioners</li>
												<li>Created a framework to measure and amplify UX efforts</li>
												<li>Created a Definition of Done document and Figma widget for designers</li>
                    </ul>
                </div>
                <div class="about-description">
                    <h3>Core Skills</h3>
										<p>My skillset enables me to think strategically in cross-functional contexts.</p>
                    <p><strong>UX Leadership & Mentorship:</strong> Organisational health, team growth, career coaching.</p>
                    <p><strong>UX Strategy & Operations:</strong> DesignOps, UX Maturity Programs, Design Systems Advocacy.</p>
                    <p><strong>Product Design:</strong> 10+ years in product design; 7+ years in B2B SaaS (UI/UX, accessibility, inclusive design).</p>
                    <p><strong>Research & Experience Design:</strong> UX Research, Empathic Design, Service Design, UX Copywriting.</p>
                    <p><strong>Prototyping & Engineering Fluency:</strong> From concept sketches to high-fidelity prototypes; coding familiarity (React, Vue3).</p>
                </div>
            </div>
        </section>
</html>
