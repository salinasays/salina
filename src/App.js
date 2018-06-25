import React, { Component } from 'react';
import './App.css';

class App extends Component {
	render() {
		return (
			<main className="App">
				<div className="container">
					<header className="App-header">
						<h1>Hello World! I'm Salina Fu.</h1>
						<h3>Frontend Web Developer | New York, NY</h3>
						<h3><a href="mailto:sfu.concepts@gmail.com">Email Salina</a></h3>
						<details>
							<summary>Brief Summary</summary>
							<code>
								const salina = new SalinaFu();<br />
								salina.getsKnowledge('full-stack-web-development')<br />
									.then((knowledge) => salina.getsInternship('Giift.com'))<br />
									.then((experience) => salina.getsHired('Junior Frontend Developer'))<br />
									.then((opportunity) => salina.seeksGrowth())<br />
									.catch((error) => this.HandleError(error));
							</code>
						</details>
					</header>
					<br />
					<div className="body">
					<div className="Work-experience">
						<h2 id="experience-title">Experience</h2>
						<h4 className="Title">Junior Frontend Developer</h4>
						<h4 className="Employer">Giift.com | December 2017 - Current</h4>
						<p className="Job-Description">
							blah blah blah
						</p>
						<h4 className="Title">Full Stack Web Developer</h4>
						<h4 className="Employer">Coalition For Queens | July 2016 - June 2017</h4>
						<p className="Job-Description">
							C4Q’s Access Code program is a highly competitive Google-funded software engineering program whose graduates have been hired as developers at leading companies such as Blue Apron, Jet, Capital One, and Spotify.
						</p>
						<p className="Job-Description">
							An intensive 10-month project-based full stack web development curriculum designed by engineers from Vice, Facebook, Yahoo, Artsy, and LinkedIn; topics include Node, Express, React/Redux, PostgreSQL, git/github, TDD, build tools like webpack, data structures, algorithms, and tech principles and culture.
						</p>
						<h4 className="Title">Corporate Communications/PR Freelancer</h4>
						<h4 className="Employer">Ralph Lauren | September 2014 - April 2016</h4>
						<p className="Job-Description">
							Compiled RL-relevant news clips from Meltwater, Critical Mention, BurrellesLuce and web search to create a daily report to distribute to Mr. Lauren's office and internal teams every morning. Continuously archived news related to the company and Mr. Lauren's family.
							<br /><br />
							Recapped Public Relations/Corporate initiatives and calculated advertising cost equivalent (ACE) with the use of Cision and Compete. Updated recaps for The Polo Bar and Ralph's Coffee with new press (broadcast, online, print) placements, as well as tagged social media posts.
							<br/><br />
							Continuously updated Fashion GPS with media, influencer and vendor contacts. Supported team during events, launches, presentations and fashion shows.
						</p>
					</div>
					<div className="Projects">
						<h2 id="projects-title">Projects</h2>
						<div id="Art-Gal">
							<h4>Art Gal</h4>
							<summary>A crowdsourcing platform for art events in New York City. In addition to creating and bookmarking events, users can use the search engine to filter events based on zip code, date, and/or type of event.</summary>
							<ul>
								<li>
									Led frontend development by creating wireframes and designing the overall layout of the site.
								</li>
								<li>
									Implemented Express Sessions for login process.
								</li>
								<li>
									Constructed routes and AJAX calls for search engine, forms, and bookmarks to render data.
								</li>
							</ul>
						</div>
						<div id="Early-Start">
							<h4>Early Start</h4>
							<summary>An interactive website that assists parents in finding the right Pre-K to middle school for their children. Created for C4Q's Access Hackathon and won award for best UX Design. Utilized Aunt Bertha's API and NYC OpenData API for school details such as graduation rate, English and Math scores, and available resources.</summary>
						</div>
						<div id="Moodboard-PJT">
							<h4>The Moodboard PJT</h4>
							<summary>A creative outlet for individuals to compose moodboard collages as an inspiration piece for their own work. Integrated with Bing API, allowing users to search and select images to add to their board(s).</summary>
						</div>
					</div>
					<div className="Education">
						<h2 id="education-title">Education</h2>
						<div>
							<h4 className="edu">Coalition For Queens | Long Island City, NY</h4>
							<p>Full Stack Web Development Fellowship</p>
							<p>July 2016 - June 2017</p>
						</div>
					</div>
					</div>
				</div>
			</main>
		);
	}
}

export default App;
