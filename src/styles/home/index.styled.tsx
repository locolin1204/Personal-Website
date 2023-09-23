import styled from "styled-components";
import { motion } from "framer-motion";
import React from "react";

export const StyledMain = styled.div`
	min-height: 50vh;
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
	/* border: solid red 1px; */
`;

export const StyledTextContainer = styled.div`
	display: flex;
	flex-direction: column;
	padding-top: 15vh;
	min-height: 90vh;
	@media (max-width: 768px) {
		font-size: 0.7rem;
	}
	/* border: solid red 1px; */

`;

export const StyledMainText = styled.div`
	font-size: 6em;
	font-weight: 700;
`;

export const StyledSubText = styled.div`
	font-size: 1.5em;
	color: ${({ theme }) => theme.color.grey500};
	padding-bottom: 1em;
`;

export const StyledSpanColin = styled.span`
	color: ${({ theme }) => theme.color.orange500};
`;

export const StyledSpanCS = styled.span`
	color: ${({ theme }) => theme.color.yellow400};

	font-family: Source Code Pro;
	font-weight: 300;
	font-size: 0.9em;
	background-color: ${({ theme }) => theme.color.yellow400};
	padding: 0.1em 0.5em;
	color: ${({ theme }) => theme.color.grey500};
	border-radius: 0.3em;
`;

export const EnterAnimationText = ({ children, delay }) => (
	<motion.span
		initial="hidden"
		whileInView="visible"
		viewport={{ once: true }}
		transition={{ ease: "easeInOut", duration: 1, delay: delay }}
		variants={{
			visible: { opacity: 1 },
			hidden: { opacity: 0 },
		}}
	>
		{children}
	</motion.span>
);
