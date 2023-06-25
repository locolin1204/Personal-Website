import { GatsbyImage, StaticImage } from "gatsby-plugin-image";
import styled from "styled-components";
import React from "react";
import { motion } from "framer-motion";

export const StyledTechContainer = styled.div`
	display: grid;
	/* display: flex; */
	/* justify-content: space-evenly; */
	/* justify-content: center; */
	/* padding: 0% 5%; */
	flex-direction: row;
	background-color: ${({ theme }) => theme.color.yellow400};
	overflow: hidden;
	grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
	/* border: red 1px solid; */
`;

export const TechContainerWrapper = styled.div`
	left: 50%;
	margin-left: -50vw;
	margin-right: -50vw;
	position: relative;
	right: 50%;
	object-fit: contain;
	max-width: 100vw;
	width: 100vw;
	background-color: ${({ theme }) => theme.color.yellow400};

`

export const StyledTechFrame = styled.div`
	display: flex;
	flex-direction: column;
	align-items: center;
	padding: 2rem;
	/* padding-right: 10em; */
	/* border: red 1px solid; */
`;

export const StyledList = styled.div`
	font-family: "Source Code Pro";
	font-weight: 300;
`;

export const DesignContainer = styled.div`
	margin-top: 1rem;
	padding: 2rem;
	display: grid;
	font-size: 4em;
	justify-content: center;
	gap: 2em;
	/* background-color: ${({ theme }) => theme.color.yellow400}; */
	grid-template-columns: repeat(auto-fit, minmax(1em, 1em));
	/* border: red 1px solid; */
`;

export const MottoTextContainer = styled.div`
	display: flex;
	justify-content: center;
	font-size: 1.3rem;
	font-weight: 200;
	height: 35vh;
	/* padding: 5em; */
	/* border: red solid 1px; */
	align-items: center;
	/* top: 50%; */
`;

export const MottoWrapper = styled.div`
	text-align: center;
	/* border: red solid 1px; */
	align-items: center;
`;

export const ProfilePic = styled.div`
	display: flex;
	width: 500px;
	align-items: center;
	/* border: red solid 1px; */
`;

export const BoldText = styled.span`
	font-weight: 400;
	display: inline-block;
	position: relative;
	cursor: pointer;

	&:after {
		content: "";
		position: absolute;
		width: 100%;
		transform: scaleX(0);
		height: 1.5px;
		bottom: 0;
		left: 0;
		background-color: #000000;
		transform-origin: bottom right;
		transition: transform 0.25s ease-out;
	}
	&:hover:after {
		transform: scaleX(1);
		transform-origin: bottom left;
	}
`;

export const EnterAnimationMotto = ({ children }) => (
	<motion.span
		initial="hidden"
		whileInView="visible"
		viewport={{ once: true }}
		transition={{ ease: "easeInOut", duration: 1 }}
		variants={{
			visible: { opacity: 1, y:0 },
			hidden: { opacity: 0, y: 50},
		}}
	>
		{children}
	</motion.span>
);

export const StyledIcon = styled.img`
	height: 1em;
`

export const IconNameWrapper = styled.div`
	display: flex;
	align-items: center;
	gap: 0.3em;
`

export const EnterAnimationTechItem = ({ children, index }) => (
	<motion.div
		initial="hidden"
		whileInView="visible"
		viewport={{ once: true }}
		transition={{ ease: "easeInOut", duration: 1, delay: index*0.1 }}
		variants={{
			visible: { opacity: 1, y: 0 },
			hidden: { opacity: 0, y: 20},
			// visible: { opacity: 1, y: 0 },
			// hidden: { opacity: 0, y: 100},
		}}
	>
		{children}
	</motion.div>
);


export const UnderlineText = styled.span`
	display: inline-block;
	position: relative;
	cursor: pointer;

	&:after {
		content: "";
		position: absolute;
		width: 100%;
		transform: scaleX(0);
		height: 0.05em;
		bottom: 0;
		left: 0;
		background-color: #000000;
		transform-origin: bottom right;
		transition: transform 0.5s ease-out;
	}
	&:hover:after {
		transform: scaleX(1);
		transform-origin: bottom left;
	}
`;
