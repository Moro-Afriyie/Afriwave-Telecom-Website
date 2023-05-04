import React, { useLayoutEffect, useRef } from 'react';
import { gsap, Expo } from 'gsap';

function LandingPage() {
	const app: any = useRef();
	useLayoutEffect(() => {
		let ctx = gsap.context(() => {
			gsap.to('.overlay h1', {
				opacity: 0,
				y: -60,
				duration: 2,
				ease: Expo.easeInOut,
			});

			gsap.to('.overlay', 2, {
				delay: 1,
				top: '-100%',
				ease: Expo.easeInOut,
			});

			gsap.from('.logo', {
				delay: 2.4,
				opacity: 0,
				y: 20,
				duration: 1,
				ease: Expo.easeInOut,
			});

			gsap.from('.nav ul li', {
				delay: 2.4,
				opacity: 0,
				y: 20,
				ease: Expo.easeInOut,
				stagger: 0.2,
			});

			gsap.from('.side-strip', {
				delay: 2.4,
				opacity: 0,
				y: 40,
				duration: 2,
				ease: Expo.easeInOut,
			});

			gsap.from('.row', {
				delay: 2.4,
				opacity: 0,
				x: 40,
				duration: 2,
				ease: Expo.easeInOut,
			});

			gsap.from('.row h6', {
				delay: 3,
				opacity: 0,
				y: 40,
				duration: 2,
				ease: Expo.easeInOut,
			});

			gsap.from('.row p', {
				delay: 3.2,
				opacity: 0,
				y: 20,
				duration: 2,
				ease: Expo.easeInOut,
			});

			gsap.from('.header h1', {
				delay: 3.2,
				opacity: 0,
				y: 20,
				duration: 2,
				ease: Expo.easeInOut,
			});

			gsap.from('.header p', {
				delay: 3.4,
				opacity: 0,
				y: 20,
				duration: 2,
				ease: Expo.easeInOut,
			});

			gsap.from('.header button', {
				delay: 3.6,
				opacity: 0,
				y: 20,
				duration: 2,
				ease: Expo.easeInOut,
			});
		}, app);

		return () => ctx.revert();
	}, []);

	return (
		<div ref={app}>
			<div className="overlay">
				<h1>ESCAPE LIFE</h1>
			</div>

			<div className="wrapper">
				<div className="logo">escape</div>
				<div className="nav">
					<ul>
						<li>Home</li>
						<li>Places</li>
						<li>Hotels</li>
						<li>Search</li>
					</ul>
				</div>
				<div className="social-media">
					<ul>
						<li>
							<i className="fa fa-facebook" aria-hidden="true"></i>
						</li>
						<li>
							<i className="fa fa-instagram" aria-hidden="true"></i>
						</li>
						<li>
							<i className="fa fa-twitter" aria-hidden="true"></i>
						</li>
					</ul>
				</div>
				<div className="side-strip">
					<span>ADVENTURE FILL SOULS</span>
				</div>
				<div className="header">
					<h1>
						Iceland - The element <br /> of nature
					</h1>
					<p>
						Lorem ipsum dolor sit amet, consectetur adipisicing elit. Magni excepturi, maxime, quasi harum dolorum
						facilis iusto in odio placeat expedita maiores aspernatur delectus. Id et, quos ab illo laboriosam
						reiciendis?
					</p>
					<button>EXPLORE</button>
				</div>
				<div className="bottom-bar">
					<div className="container">
						<div className="row">
							<div className="col-lg-4">
								<h6>Lorem ipsum dolor sit.</h6>
								<p>
									Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eaque veniam labore repellendus
									necessitatibus ipsa!
								</p>
							</div>
							<div className="col-lg-4">
								<h6>Lorem ipsum dolor sit.</h6>
								<p>
									Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eaque veniam labore repellendus
									necessitatibus ipsa!
								</p>
							</div>
							<div className="col-lg-4">
								<h6>Lorem ipsum dolor sit.</h6>
								<p>
									Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eaque veniam labore repellendus
									necessitatibus ipsa!
								</p>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
}

export default LandingPage;
