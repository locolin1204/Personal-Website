import styled from "styled-components";
import { GatsbyImage, StaticImage } from "gatsby-plugin-image";

export const StyledCardContainer = styled.div`
	/* background-color: ${({ theme, cardColor }) => {
		if (cardColor === "change"){
		console.log("this is card color ", cardColor);

			return theme.color.yellow400
		} else{
		console.log("this is orange");
			return theme.color.yellow000;
		} 
	}}; */

	background-color: ${({ theme }) => theme.color.yellow300};
	border-radius: 0.2em;
	padding: 1em;
	transition: box-shadow 0.3s ease-in-out;
	&:hover {
		box-shadow: rgba(149, 157, 165, 0.2) 0px 8px 24px;
	}
`;

export const StyledTitle = styled.div`
	font-size: 1.2em;
	font-weight: 500;
	color: ${({ theme }) => theme.color.grey700};

	/* border: red 1px solid; */
`;

export const StyledExcerpt = styled.div`
	color: ${({ theme }) => theme.color.grey500};
`;
export const StyledTechList = styled.div``;

export const StyledTechItem = styled.span`
	font-family: Source Code Pro;
	font-size: 0.8em;
	font-weight: 300;
	font-style: italic;
	background-color: ${({ theme }) => theme.color.yellow000};
	color: ${({ theme }) => theme.color.yellow900};
	margin-right: 0.5em;
	padding: 0em 0.5em;
	border-radius: 0.3rem;
	font-weight: 300;
`;

export const ImageWrapper = styled.div`
	/* width: 100%; */
	height: 15em;
	margin-top: 0.5em;
	margin-bottom: 0.5em;
	overflow: hidden;
	transition: 0.3s all ease-in-out;


	/* border: red 1px solid; */
`;

export const StyledGatsbyImage = styled(GatsbyImage)`
	/* object-fit: fill; */
	/* width: 120%; */
	height:100%;
	transition: transform 0.3s ease-in-out;
	&:hover {
		transform: scale(1.09);
	}
`;
