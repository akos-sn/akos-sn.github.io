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
#other-work {
    width:100%;
    margin-bottom: 40px;
    display:flex;
    align-items: center;
    flex-direction: column;
}
.other-work-grid{
      margin: 32px auto;
      display: grid;
      grid-template-columns: 1fr 1fr; 
      grid-gap: 48px;
      width: 100%;
}
.other-work-card{
    min-width: 100%;
    display: flex;
    flex-direction: column;
    gap: 12px;
}
.other-work-card > h3 {
    font-size: 1.3rem;
}
.other-work-card > p {
    font-size: 1.15rem;
    margin: 0;
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
	font-weight: 500;
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
        grid-gap: 8cqw;
        margin: 0 8cqw;
    }
    .work-card {
        padding: 40px 40px;
    }
    .project-grid {
        display: grid; 
        grid-template-columns: 1fr 1fr; 
        grid-gap: 48px;
    }
    .other-work-grid{
        margin: 32px auto;
        display: grid;
        grid-template-columns: 1fr 1fr 1fr; 
        grid-gap: 120px;
        width: 100%;
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
                Product Designer and Design Engineer based in the Netherlands with a focus on innovative, inclusive and sustainable solutions.
            </p>
        </section>
        <hr>
        <section id="projects">
                <h2>Selected projects</h2>
                <div class="project-grid">
                  <div class="project-tile">
                      <a href="/portfolio/ops-design-system.html"><img src="/assets/img/ds-devmode.png"></a>
                      <div class="project-title">
                        <a href="/portfolio/ops-design-system.html"><h3>Design System: Shared language</h3></a>
                      </div>
											<!--
                      <div class="project-description">
                        <p class="result-header">Design Lead</p>
                        <p class="result">Shared language between developers and designers.</p>
                      </div>
                      <div class="project-description">
                        <p class="result-header">Impact</p>
                        <p class="result">Simplified design handoff process.</p>
                      </div>-->
                  </div>
                  <div class="project-tile">
                      <a href="/portfolio/ops-design-system-vision.html"><img src="/assets/img/ds-vision-thumbnail.png"></a>
                      <div class="project-title">
                        <a href="/portfolio/ops-design-system-vision.html"><h3>Design System: Product vision</h3></a>
                      </div>
											<!--
                      <div class="project-description">
                        <p class="result-header">Design Lead</p>
                        <p class="result">Showcasing the importance of the Design System as a product</p>
                      </div>
                      <div class="project-description">
                        <p class="result-header">Impact</p>
                        <p class="result">Higher trust and adoption of our Design System.</p>
                      </div>-->
                  </div>
									<div class="project-tile">
                      <a href="/portfolio/ux-ssp.html"><img src="/assets/img/ssp-thumbnail.png"></a>
                      <div class="project-title">
                        <a href="/portfolio/ux-ssp.html"><h3>TOPdesk Self-Service Portal </h3></a>
                      </div>
											<!--
                      <div class="project-description">
                        <p class="result-header">Design Lead</p>
                        <p class="result">AI-assisted search to fast-track users to meaningful answers to their questions.</p>
                      </div>
                      <div class="project-description">
                        <p class="result-header">Impact</p>
                        <p class="result">Shorter time on task, less incoming requests.</p>
                      </div>-->
                  </div>
									<div class="project-tile">
                      <a href="/portfolio/ops-measuring-ux.html"><img src="/assets/img/measuring-ux-thumbnail.png"></a>
                      <div class="project-title">
                        <a href="/portfolio/ops-measuring-ux.html"><h3>Measuring UX</h3></a>
                      </div>
											<!--
                      <div class="project-description">
                        <p class="result-header">DesignOps</p>
                        <p class="result">Creating a framework for connecting usability pain points and business goals.</p>
                      </div>
                      <div class="project-description">
                        <p class="result-header">Impact</p>
                        <p class="result">Shared language with PMs, higher engagement in product decisions.</p>
                      </div>-->
                  </div>
                  <div class="project-tile">
                      <a href="/portfolio/ux-aerq.html"><img src="/assets/img/aerq-thumbnail.png"></a>
                      <div class="project-title">
                        <a href="/portfolio/ux-aerq.html"><h3>AERQ</h3></a>
                      </div>
											<!--
                      <div class="project-description">
                      <p class="result-header">UX</p>
                        <p class="result">Preventive maintenance of aircrafts' in-flight entertainment systems.</p>
                      </div>
                      <div class="project-description">
                        <p class="result-header">Impact</p>
                        <p class="result">A smart notification setup process enabling preventive maintenance.</p>
                      </div>-->
                  </div>
                  <div class="project-tile">
                      <a href="/portfolio/uxdev-motie.html"><img src="/assets/img/motie-thumbnail.png"></a>
                      <div class="project-title">
                        <a href="/portfolio/uxdev-motie.html"><h3>motie.</h3></a>
                      </div>
											<!--
                      <div class="project-description">
                        <p class="result-header">UX+Dev</p>
                        <p class="result">Modular, distraction-free notetaking.</p>
                      </div>-->
                  </div>
              </div>
        </section>
        <hr>
        <!--
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
        <hr>-->
        <section id="other-work">
          <h2>Project history</h2>
          <div class="other-work-grid">
            <div class=other-work-card>
              <h3>TOPdesk Asset Management</h3>
              <p>2025</p>
              <p>UX design of a largely complex legacy enterprise product module. Working on automation of inventory management and order delivery service design.</p>
            </div>
            <div class=other-work-card>
              <h3>TOPdesk Self-Service Portal</h3>
              <p>2025</p>
              <p>UX design and design engineering for the end-user facing help-desk platform of TOPdesk. I was working on our first end-user facing AI experience.</p>
            </div>
            <div class=other-work-card>
              <h3>TOPdesk Design System</h3>
              <p>2023-2024</p>
              <p>Creating components, writing guidelines, and maintaining a design system for scalability.</p>
            </div>
            <div class=other-work-card>
              <h3>Alma+ App</h3>
              <p>2023</p>
              <p>iOS and Android application design for a pharmaceutical loyalty program. Created a multi-brand design system.</p>
            </div>
            <div class=other-work-card>
              <h3>Lufthansa NetLine</h3>
              <p>2023</p>
              <p>Logo design project for Lufthansa's NetLine products.</p>
            </div>
            <div class=other-work-card>
              <h3>AERQ</h3>
              <p>2023</p>
              <p>A joint venture between LG Electronics and Lufthansa Technik. I was an external UX designer working on the maintenance/monitoring product for aircraft IFE systems.</p>
            </div>
            <div class=other-work-card>
              <h3>ELLE</h3>
              <p>2023</p>
              <p>Design for ELLE's Hungarian EDIDA award page for 2023 and the in-article quiz widget.</p>
            </div>
            <div class=other-work-card>
              <h3>Neticle Media Intelligence</h3>
              <p>2018-2022</p>
              <p>A media monitoring tool by Neticle that uses semantic text analysis to help brands understand audiance voice and discover pain points from scattered sources. Created a multi-product design system.</p>
            </div>
            <div class=other-work-card>
              <h3>Zurvey.io</h3>
              <p>2018-2022</p>
              <p>A CX survey software by Neticle that uses semantic text analysis to assist with understanding complex datasets of customer feedback.</p>
            </div>
            <div class=other-work-card>
              <h3>Neticle Text Analysis API</h3>
              <p>2018-2022</p>
              <p>Neticle's toolkit for semantic text analysis supported by machine learning. UX and web design.</p>
            </div>
            <div class=other-work-card>
              <h3>Budapest Museum of Applied Arts</h3>
              <p>2017</p>
              <p>Editorial design, freelance work.</p>
            </div>
            <div class=other-work-card>
              <h3>RendbeJössz Consultation Centre</h3>
              <p>2017-2021</p>
              <p>Psychological consultation centre, where I have done web development and UX. This was a project with my freelancing team, ZUG.</p>
            </div>
            <div class=other-work-card>
              <h3>Oktafone</h3>
              <p>2016</p>
              <p>Browser-based educational platform, where I created UI designs for different widgets and the overall look-and-feel.</p>
            </div>
            <div class=other-work-card>
              <h3>WeAreKids</h3>
              <p>2015</p>
              <p>Web development, UI design, and app illustrations for an educational software used in kindergarten groups to teach kids English.</p>
            </div>
            <div class=other-work-card>
              <h3>Crocobee</h3>
              <p>2015</p>
              <p>Digital agency and startup where I have done brand design, web design, web development, and animation.</p>
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
