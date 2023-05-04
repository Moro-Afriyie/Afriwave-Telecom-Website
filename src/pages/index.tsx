import Image from 'next/image';
import { Inter } from 'next/font/google';
import Navbar from '@/components/Navbar';
import LandingPage from '@/components/LandingPage';
import React, { useEffect, useRef } from 'react';
import { gsap, Expo } from 'gsap';
import Carousel from '@/components/Carousel';
import Slider from '@/components/Slider';

const inter = Inter({ subsets: ['latin'] });

export default function Home() {
	const app: any = useRef();

	// useEffect(() => {
	// 	let ctx = gsap.context(() => {
	// 		gsap.to('.overlay h1', {
	// 			opacity: 0,
	// 			y: -60,
	// 			duration: 2,
	// 			ease: Expo.easeInOut,
	// 		});

	// 		gsap.to('.overlay', 2, {
	// 			delay: 1,
	// 			top: '-100%',
	// 			ease: Expo.easeInOut,
	// 		});

	// 		gsap.from('.logo', {
	// 			delay: 2.4,
	// 			opacity: 0,
	// 			y: 20,
	// 			duration: 1,
	// 			ease: Expo.easeInOut,
	// 		});

	// 		gsap.from('.nav ul li', {
	// 			delay: 2.4,
	// 			opacity: 0,
	// 			y: 20,
	// 			duration: 1,
	// 			ease: Expo.easeInOut,
	// 			stagger: 0.2,
	// 		});

	// 		gsap.from('.navbar-links li a', {
	// 			delay: 2.4,
	// 			opacity: 0,
	// 			y: 20,
	// 			duration: 1,
	// 			ease: Expo.easeInOut,
	// 			stagger: 0.2,
	// 		});

	// 		gsap.from('.side-strip', {
	// 			delay: 2.4,
	// 			opacity: 0,
	// 			y: 40,
	// 			duration: 2,
	// 			ease: Expo.easeInOut,
	// 		});

	// 		gsap.from('.row', {
	// 			delay: 2.4,
	// 			opacity: 0,
	// 			x: 40,
	// 			duration: 2,
	// 			ease: Expo.easeInOut,
	// 		});

	// 		gsap.from('.row h6', {
	// 			delay: 3,
	// 			opacity: 0,
	// 			y: 40,
	// 			duration: 2,
	// 			ease: Expo.easeInOut,
	// 		});

	// 		gsap.from('.row p', {
	// 			delay: 3.2,
	// 			opacity: 0,
	// 			y: 20,
	// 			duration: 2,
	// 			ease: Expo.easeInOut,
	// 		});

	// 		gsap.from('.header h1', {
	// 			delay: 3.2,
	// 			opacity: 0,
	// 			y: 20,
	// 			duration: 2,
	// 			ease: Expo.easeInOut,
	// 		});

	// 		gsap.from('.header p', {
	// 			delay: 3.4,
	// 			opacity: 0,
	// 			y: 20,
	// 			duration: 2,
	// 			ease: Expo.easeInOut,
	// 		});

	// 		gsap.from('.header button', {
	// 			delay: 3.6,
	// 			opacity: 0,
	// 			y: 20,
	// 			duration: 2,
	// 			ease: Expo.easeInOut,
	// 		});
	// 	}, app);

	// 	return () => ctx.revert();
	// }, []);

	return (
		<main ref={app} className="flex min-h-screen flex-col">
			<Navbar />
			<section className="h-[50rem]">
				<Slider />
			</section>
		</main>
	);
}
