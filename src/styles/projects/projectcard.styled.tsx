import styled from "styled-components";
import { GatsbyImage, StaticImage } from "gatsby-plugin-image";

export const StyledCardContainer = styled.div`
	background-color: ${({ theme }) => theme.color.offwhite300};
	border-radius: 0.3em;
	padding: 1em;
	transition: box-shadow 0.3s ease-in-out, transform 0.3s ease-in-out;
	box-shadow: 0 5px 10px rgba(160,160,160,.05), 0 15px 40px rgba(175,175,175,.2);
	&:hover {
		box-shadow: 0 5px 10px rgba(160,160,160,.05), 0 15px 40px rgba(175,175,175,.4);
	}

	@media only screen and (max-width: 768px) {
		flex-direction: column;
		pointer-events: none;
	}
	padding: 0;
	margin: 0;

`;

export const StyledTitle = styled.div`
	font-size: 1.2em;
	font-weight: 500;
	color: ${({ theme }) => theme.color.grey700};
`;

export const StyledTechList = styled.div`
    display: flex;
    padding-top: 0.5em;
    padding-bottom: 0.5em;
    row-gap: 0.5em;
    flex-wrap: wrap;
`;

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
	height: 15em;
	margin-top: 0.5em;
	margin-bottom: 0.5em;
	overflow: hidden;
	transition: 0.3s all ease-in-out;
	margin: 0;
`;

export const InfoWrapper = styled.div`
	padding: 0.5em 1em;
	width:100%;
`

export const StyledGatsbyImage = styled(GatsbyImage)`
	height:100%;
    border-radius: 0.3em;
	transition: transform 0.3s ease-in-out;
	&:hover {
		transform: scale(1.09);
	}
`;
