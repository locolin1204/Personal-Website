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
	overflow: hidden;
	grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
	/* border: red 1px solid; */
	/* background-color: ${({ theme }) => theme.color.yellow200}; */
	border-radius: 1em;
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
	background-color: ${({ theme }) => theme.color.offwhite300};

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

export const SoftwareFrameContainer = styled.div`
	/* margin-top: 1rem; */
	/* padding: 2rem; */
	display: grid;
	font-size: 4em;
	justify-content: center;
	gap: 2em;
	/* background-color: ${({ theme }) => theme.color.yellow400}; */
	grid-template-columns: repeat(auto-fit, minmax(1em, 1em));
	/* border: red 1px solid; */
	margin: 1rem;
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

export const StyledAboutSelfIntroContainer = styled.div`
	display: flex;
	/* flex-wrap: wrap; */
	/* display: grid; */
	/* grid-template-columns: repeat(auto-fit, minmax(5em, 10em)); */
	padding: 2em 0em;
`

export const RedLineDiv = styled.div`
	border: red 1px solid;
`

export const AboutBodyText = styled.div`
	display: flex;
	align-items: center;
	background-color: ${({ theme }) => theme.color.offwhite300};
	border-radius: 1em;
	padding: 2em 4em;
	/* border: red 1px solid; */
	/* width: 200%; */
	margin-top: 5rem;
	margin-left: -2em;
	font-weight: 350;
`

export const ProfilePic = styled.span`
	/* width: 500px; */
	display: block;
	/* border: red solid 1px; */
	/* right: -100px; */
	/* width: 70rem; */
	/* margin-bottom: 10%; */
	/* margin-right: -3%; */
	z-index: 999;
`;

export const SoftwareFrameWrapper = styled.div`
	text-align: center;
	padding: 2rem 0em;
	/* border: red 1px solid; */
`

export const SoftwareText = styled.div`
	font-size: 1rem;
	white-space: nowrap;
	padding: 1em;
	font-weight: 300;
	font-family: Source Code Pro;
	/* border: red 1px solid; */
`

export const SoftwareIconTextWrapper = styled.div`
	display: flex;
	flex-direction: column;
	align-items: center;
	color: ${({ theme }) => theme.color.grey400};
	/* border: red 1px solid; */
`

export const SoftwareTitle = styled.h5`
	padding-bottom: 1em ;
`
