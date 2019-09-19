import React from "react";

export default class Projects extends React.Component {
    constructor(props) {
        super(props);
    }


    render() {
		require('./assets/css/main.css')

        return (
        <section id="one" class="main style1 special">
			<div class="container">
				{/* <header class="major">
					<h2>
						<span style={{"background": "white", "padding": "0px 5px;"}}>Featured Projects</span>
					</h2>
				</header> */}
				<div class="row gtr-150">
					<div class="col-4 col-12-medium">
						<div id="project-bg">
						<span class="image fit"> <a href="http://instagraff.natedonato.com/"><img src="images/banana.png" alt="" /></a></span>
						<h3>Instagraff</h3>
						<p>Full stack clone of Instagram, using Ruby on Rails / Postgres backend and React.js / Redux frontend & AWS cloud storage
						</p>
						<div class="actions special" >
								<a  href="http://instagraff.natedonato.com/"> Live Demo</a>
								<a  href="http://github.com/natedonato/instagraff"> Github</a>
						</div>
						</div>
					</div>
					<div class="col-4 col-12-medium">
						<div id="project-bg">

						<span class="image fit"><a href="http://landslide.natedonato.com"><img src="images/landslide-copy.png" alt="" /></a></span>
						<h3>Landslide.js</h3>
						<p>Online platforming game using JavaScript HTML and CSS, with MongoDB / Express.js backend for high score leaderboard
						</p>
						<div class="actions special" >
								<a  href="http://landslide.natedonato.com"> Live Demo</a>
								<a  href="https://github.com/natedonato/landslide"> Github</a>

						</div>
						</div>
					</div>
					<div class="col-4 col-12-medium">
						<div id="project-bg">
					
							<span class="image fit"><a href="https://natedonato.com/meditate"><img src="images/meditate2.png"
										alt="" /></a></span>
							<h3>Meditate</h3>
							<p>A simple meditation timer web app created for personal use. Features calming music and images. Built using
								React.js
							</p>
							<div class="actions special" >
								<a  href="https://natedonato.com/meditate"> Live Demo</a>
								<a  href="https://github.com/natedonato/meditate"> Github</a>
					
							</div>
						</div>
					</div>


				</div>
			</div>
			<div class="container">
				<div class="row gtr-150">
					<div class="col-4 col-12-medium">
						<div id="project-bg">
						<span class="image fit"> <a href="https://knowitall-app.herokuapp.com/"><img src="images/knowitall.gif" alt="" /></a></span>
						<h3>Know It All</h3>
						<p>A question / answer game with statistics and online search results. Team-built web-application utilizing MongoDB, Express.js, React.js, Node.js (MERN).
						</p>
						<div class="actions special" >
								<a  href="https://knowitall-app.herokuapp.com/"> Live Demo</a>
								<a  href="https://github.com/alissacrane123/KnowItAll"> Github</a>
						</div>
						</div>
					</div>
					<div class="col-4 col-12-medium">
						<div id="project-bg">
							<span class="image fit"> <a href="https://natedonato.com/glitch"><img src="images/lighthouse.gif" alt="" />
								</a></span>
							<h3>Glitch.js</h3>
							<p>Destructive photo editor uses custom pixel sorting algorithms to create destructive reimaginations of any
								uploaded image</p>
							<div class="actions special" >
								<a  href="https://natedonato.com/glitch/."> WIP Live Demo</a>
								<a  href="https://github.com/natedonato/glitch"> Github</a>
							</div>
						</div>
					</div>
					<div class="col-4 col-12-medium">
						<div id="project-bg">
						<span class="image fit"> <a href="https://natedonato.com/bartsigns"><img src="images/bart.png" alt="" /> </a></span>
						<h3>Bart Signs</h3>
						<p>Live updating Bay Area Rapid Transit estimated train departure signs for SF Embarcadero Station, using the BART API</p>
						<div class="actions special" >
								<a  href="https://natedonato.com/bartsigns/."> WIP Live Demo</a>
								<a  href="https://github.com/natedonato/bartsigns"> Github</a>
						</div>
						</div>
					</div>
				</div>
			</div>



			<section id="four" class="main style2 special" style={{"background": "none", "padding": "20px"}}>
				<div class="container">
					<header class="major">
						<h2 style={{"color": "#3e3e3e"}}><span style={{"background": "white", "padding": "0px 5px"}}>Minor Projects</span></h2>
					</header>
					<ul className="minorProjectList" >
						<li><span >
							<a href="https://github.com/natedonato/dejumble/">Dejumble</a>
							A tool for helping solve the Daily Jumble!  Work in progress.
							</span>
						</li>
						<li><span >
							
							<a href="https://www.natedonato.com/dresscat/cat.html">DressCat</a>
							A simple game built with JavaScript, CSS & HTML5. Dress the cat!
							</span>
						</li>
						<li><span >
							
							<a href="https://natedonato.com/circus/">Circus</a>
							A directory of fun web haiku / micro projects to practice.
							</span>
						</li>
					</ul>
				</div>
			</section>
		</section>

		
        )
    }
}