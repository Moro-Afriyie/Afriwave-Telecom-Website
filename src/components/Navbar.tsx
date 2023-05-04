import * as React from 'react';
import Image from 'next/image';

const Navbar: React.FunctionComponent = () => {
	return (
		<nav className="h-full  shadow-[0_8px_24px_rgba(149,157,165,0.2)] min-h-[5rem]">
			<div className="max-w-[80rem] flex justify-between w-full items-center mx-auto min-h-[5rem] px-4 py-2 ">
				<div className="cursor-pointer 0">
					<Image className="relative" src="/afriwave123.png" alt="Next.js Logo" width={110} height={20} priority />
				</div>

				<div className="ml-auto">
					<ul className="nav_links">
						<li className="current">
							<a href="#">Home</a>
						</li>
						<li>
							<a href="#">About Us</a>
						</li>
						<li>
							<a href="#">Management Team</a>
						</li>
						<li>
							<a href="#">Services</a>
						</li>
						<li>
							<a href="#">Contact</a>
						</li>
					</ul>
				</div>
			</div>
		</nav>
	);
};

export default Navbar;
//rgba(149, 157, 165, 0.2) 0px 8px 24px;
