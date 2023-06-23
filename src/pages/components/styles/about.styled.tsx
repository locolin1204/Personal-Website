import { GatsbyImage, StaticImage } from "gatsby-plugin-image";
import styled from "styled-components";

export const StyledTechContainer = styled.div`
	display: flex;
	flex-direction: row;
	background-color: ${({ theme }) => theme.color.yellow400};
`;

export const StyledTechFrame = styled.div`
	border-radius: 0.2em;
	padding: 2rem;
	padding-right: 10em;
`;

export const StyledList = styled.div`
	font-family: "Source Code Pro";
	font-weight: 300;
`;

export const DesignContainer = styled.div`
	margin-top: 1rem;
	padding: 2rem;
	display: flex;
	font-size: 4em;
	gap: 1em;
	background-color: ${({ theme }) => theme.color.yellow400};
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
