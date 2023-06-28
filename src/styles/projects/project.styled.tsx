import { motion } from "framer-motion";
import { GatsbyImage } from "gatsby-plugin-image";
import styled from "styled-components";
// import React from "react";

export const StyledProjectLayout = styled.div`
	/* border: red 1px solid; */
	display: grid;
	grid-template-columns: repeat(auto-fit, minmax(350px, 1fr));
	grid-gap: 3rem;

	@media (max-width: 768px) {
		grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
	}

	@media (max-width: 480px) {
		grid-template-columns: repeat(auto-fit, minmax(100%, 1fr));
	}
	padding-bottom: 4rem;
`;

export const StyledGatsbyImageBG = styled(GatsbyImage)`
	/* filter: blur(10px);
	-webkit-filter: blur(10px); */

	/* left: 50%;
	margin-left: -50vw;
	margin-right: -50vw;
	max-width: 100vw;
	position: relative;
	right: 50%; */
	width: 100vw;
	height: 40vh;
	/* 
	object-fit: cover;
	object-position: 50% 65%;
	 */
	/* border: red 1px solid; */
`;

export const StyledGatsbyImageFront = styled(GatsbyImage)`
	position: absolute;
	z-index: 999;
	/* margin-left: -50vw;
	margin-top: -20vh; */
	/* border: red 1px solid; */
	box-shadow: 0 5px 10px rgba(160, 160, 160, 0.05),
		0 15px 40px rgba(175, 175, 175, 0.2);
	/* height:100%; */
`;

export const ImageWrapper = styled.div`
	/* width: 100em; */
	left: 50%;
	margin-left: -50vw;
	margin-right: -50vw;
	max-width: 100vw;
	position: relative;
	right: 50%;
	width: 100vw;
	overflow: hidden;
	/* border: red 1px solid; */
	display: flex;
	align-items: center;
	justify-content: center;
`;

export const StyledTechList = styled.div`
	padding-bottom: 1em;
`;
export const StyledTechItem = styled.span`
	font-family: Source Code Pro;
	font-size: 1.2em;
	font-weight: 300;
	font-style: italic;
	background-color: ${({ theme }) => theme.color.offwhite200};
	color: ${({ theme }) => theme.color.yellow900};
	margin-right: 0.5em;
	padding: 0em 0.5em;
	border-radius: 0.3rem;
	font-weight: 300;
`;

export const DateWrapper = styled.div`
	padding: 1em 0em;
	padding-bottom: 0.2em;
	font-size: 1.2em;
	color: ${({ theme }) => theme.color.yellow900};
	font-style: italic;
`;

export const Arrow = styled.span`
	display: inline-block;
	transition: 0.2s ease-in-out;
	padding-left: 0.2em;
`;

export const RepoDemoLink = styled.a`
	text-decoration: none;

	&:hover {
		text-decoration: underline;
	}
	&:hover ${Arrow} {
		transform: translateX(50%);
	}
`;

export const LinkWrapper = styled.div`
	padding-bottom: 0.5em;
`;

// export const EnterAnimationWrapperCard = ({ index, children }) => (
// 	<motion.div
// 		initial="hidden"
// 		whileInView="visible"
// 		viewport={{ once: true }}
// 		transition={{ ease: "easeInOut", duration: 1, delay: index * 0.2 }}
// 		variants={{
// 			visible: { opacity: 1, y: 0 },
// 			hidden: { opacity: 0, y: 100 },
// 		}}
// 	>
// 		{children}
// 	</motion.div>
// );

// export const EnterAnimationMDX = ({ children }) => (
// 	<motion.div
// 		initial="hidden"
// 		whileInView="visible"
// 		viewport={{ once: true }}
// 		transition={{ ease: "easeInOut", duration: 1}}
// 		variants={{
// 			visible: { opacity: 1, y: 0 },
// 			hidden: { opacity: 0, y: 100 },
// 		}}
// 	>
// 		{children}
// 	</motion.div>
// );

