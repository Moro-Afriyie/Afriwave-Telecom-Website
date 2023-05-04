import * as React from 'react';
import { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { wrap } from 'popmotion';

const images = [
	'https://images.unsplash.com/photo-1544197150-b99a580bb7a8?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NXx8bmV0d29ya2luZ3xlbnwwfHwwfHw%3D&auto=format&fit=crop&w=800&q=60',
	'https://images.unsplash.com/photo-1542744173-8e7e53415bb0?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTZ8fG9mZmljZXxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=800&q=60',
	'https://plus.unsplash.com/premium_photo-1661771825670-1720428a80ce?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTl8fG9mZmljZXxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=800&q=60',
	'https://media.istockphoto.com/id/1419530650/photo/leadership-management-and-teamwork-between-ceo-and-senior-manager-in-a-business-meeting-in.jpg?b=1&s=170667a&w=0&k=20&c=CJOhQ2EVC8t3JrWilqAPo4ys7FJ48GMoU8ahitoQ_c4=',
];
const variants = {
	enter: (direction: number) => {
		return {
			x: direction > 0 ? 1000 : -1000,
			opacity: 0,
		};
	},
	center: {
		zIndex: 1,
		x: 0,
		opacity: 1,
	},
	exit: (direction: number) => {
		return {
			zIndex: 0,
			x: direction < 0 ? 1000 : -1000,
			opacity: 0,
		};
	},
};

/**
 * Experimenting with distilling swipe offset and velocity into a single variable, so the
 * less distance a user has swiped, the more velocity they need to register as a swipe.
 * Should accomodate longer swipes and short flicks without having binary checks on
 * just distance thresholds and velocity > 0.
 */
const swipeConfidenceThreshold = 10000;
const swipePower = (offset: number, velocity: number) => {
	return Math.abs(offset) * velocity;
};

interface IDotsProps {
	images: string[];
	activeIndex: number;
	onClick: (index: number) => void;
}

const Dots: React.FunctionComponent<IDotsProps> = ({ images, activeIndex, onClick }) => {
	return (
		<div className="dots">
			{images.map((_, index) => (
				<span key={index} className={`dot ${index === activeIndex ? 'active' : ''}`} onClick={() => onClick(index)} />
			))}
		</div>
	);
};

const Slider: React.FunctionComponent = () => {
	const [[page, direction], setPage] = useState([0, 0]);
	const [activeIndex, setActiveIndex] = useState(0);

	// We only have 3 images, but we paginate them absolutely (ie 1, 2, 3, 4, 5...) and
	// then wrap that within 0-2 to find our image ID in the array below. By passing an
	// absolute page index as the `motion` component's `key` prop, `AnimatePresence` will
	// detect it as an entirely new image. So you can infinitely paginate as few as 1 images.
	const imageIndex = wrap(0, images.length, page);

	const paginate = (newDirection: number) => {
		setPage([page + newDirection, newDirection]);
		setActiveIndex(newDirection);
	};

	useEffect(() => {
		const interval = setInterval(() => {
			paginate(1);
		}, 5000);

		return () => clearInterval(interval);
	}, [imageIndex]);

	const handleDotClick = (index: number) => {
		setPage([index, index > page ? 1 : -1]);
		setActiveIndex(index);
	};

	return (
		<>
			<div className="carousel">
				<AnimatePresence initial={false} custom={direction}>
					<motion.img
						key={page}
						src={images[imageIndex]}
						custom={direction}
						variants={variants}
						initial="enter"
						animate="center"
						exit="exit"
						transition={{
							x: { type: 'spring', stiffness: 300, damping: 30 },
							opacity: { duration: 0.2 },
						}}
						drag="x"
						dragConstraints={{ left: 0, right: 0 }}
						dragElastic={1}
						onDragEnd={(e, { offset, velocity }) => {
							const swipe = swipePower(offset.x, velocity.x);

							if (swipe < -swipeConfidenceThreshold) {
								paginate(1);
							} else if (swipe > swipeConfidenceThreshold) {
								paginate(-1);
							}
						}}
					/>
				</AnimatePresence>
				{/* <div className="next" onClick={() => paginate(1)}>
					{'‣'}
				</div>
				<div className="prev" onClick={() => paginate(-1)}>
					{'‣'}
				</div> */}
				<Dots images={images} activeIndex={activeIndex} onClick={handleDotClick} />
			</div>
		</>
	);
};

export default Slider;
