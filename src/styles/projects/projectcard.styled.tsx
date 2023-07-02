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

	background-color: ${({ theme }) => theme.color.offwhite300};
	border-radius: 0.2em;
	padding: 1em;
	transition: box-shadow 0.3s ease-in-out, transform 0.3s ease-in-out;
	/* box-shadow: 0 5px 10px rgba(154,160,185,.05), 0 15px 40px rgba(191, 198, 224, 0.1); */
	box-shadow: 0 5px 10px rgba(160,160,160,.05), 0 15px 40px rgba(175,175,175,.2);
	&:hover {
		/* box-shadow: rgba(149, 157, 165, 0.2) 0px 8px 24px; */
		box-shadow: 0 5px 10px rgba(160,160,160,.05), 0 15px 40px rgba(175,175,175,.4);
		/* transform: scale(1.05); */
	}

	@media only screen and (max-width: 768px) {
		flex-direction: column;
		pointer-events: none;
	}
	/* border-radius: 1em; */
	padding: 0;
	margin: 0;
	/* position: relative; */

`;

export const StyledTitle = styled.div`
	font-size: 1.2em;
	font-weight: 500;
	color: ${({ theme }) => theme.color.grey700};

	/* border: red 1px solid; */
`;

export const StyledTechList = styled.div``;

export const StyledTechItem = styled.span`
	font-family: Source Code Pro;
	font-size: 0.8em;
	font-weight: 300;
	font-style: italic;
	background-color: ${({ theme }) => theme.color.offwhite550};
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

	margin: 0;
`;

export const InfoWrapper = styled.div`
	padding: 0.5em 1em;
	/* padding-top: 5em; */
	/* position: absolute; */
	/* bottom: 0; */
	width:100%;
	/* backdrop-filter: blur(10px) saturate(20%);
	background-color: rgba(255, 255, 255, 0.7); */
	/* box-shadow: 0 0 10px 10px rgba(0, 0, 0, 0.5); */
	/* background: linear-gradient(to top, #e2e2e2, transparent); */
`

export const StyledGatsbyImage = styled(GatsbyImage)`
	/* object-fit: fill; */
	/* width: 120%; */
	height:100%;
	transition: transform 0.3s ease-in-out;
	&:hover {
		transform: scale(1.09);
	}
	/* filter: blur(5.5px); */
`;
