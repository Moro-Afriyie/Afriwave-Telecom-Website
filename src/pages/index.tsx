import Image from 'next/image';
import { Inter } from 'next/font/google';
import Navbar from '@/components/Navbar';
import LandingPage from '@/components/LandingPage';
import React, { useEffect, useRef } from 'react';
import { gsap, Expo } from 'gsap';

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

			{/* <div className="relative flex place-items-center before:absolute before:h-[300px] before:w-[480px] before:-translate-x-1/2 before:rounded-full before:bg-gradient-radial before:from-white before:to-transparent before:blur-2xl before:content-[''] after:absolute after:-z-20 after:h-[180px] after:w-[240px] after:translate-x-1/3 after:bg-gradient-conic after:from-sky-200 after:via-blue-200 after:blur-2xl after:content-[''] before:dark:bg-gradient-to-br before:dark:from-transparent before:dark:to-blue-700/10 after:dark:from-sky-900 after:dark:via-[#0141ff]/40 before:lg:h-[360px]">
				<Image
					className="relative dark:drop-shadow-[0_0_0.3rem_#ffffff70] dark:invert"
					src="/next.svg"
					alt="Next.js Logo"
					width={180}
					height={37}
					priority
				/>
			</div> */}
		</main>

		// <LandingPage />
	);
}
