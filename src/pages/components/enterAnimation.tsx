import React from "react";
import { motion } from "framer-motion";

export const EnterAnimation = ({
	children,
	index = 1,
	delay = 0,
	duration = 1,
	isDiv = true,
	offsetY = 50,
}) => {
	const animationAttributes = {
		initial: "hidden",
		whileInView: "visible",
		viewport: { once: true },
		transition: {
			ease: "easeInOut",
			duration: duration,
			delay: delay ? delay * index : 0,
		},
		variants: {
			visible: { opacity: 1, y: 0 },
			hidden: { opacity: 0, y: offsetY },
		},
	};

	return isDiv ? (
		<motion.div {...animationAttributes}>{children}</motion.div>
	) : (
		<motion.span {...animationAttributes}>{children}</motion.span>
	);
};
