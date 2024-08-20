import styled from "styled-components";
import GatsbyImage from "gatsby-image";

export const StyledJourneyCardContainer = styled.div`
	display: flex;
	flex-direction: ${({ rowLayout }) => rowLayout || "row"};
	justify-content: space-between;
	background-color: ${({ theme }) => theme.color.offwhite550};
	background-color: ${({ theme }) => theme.color.offwhite200};
	box-shadow: 0 5px 10px rgba(160, 160, 160, 0.05),
		0 15px 40px rgba(175, 175, 175, 0.2);
	border-radius: 0.5em;
	width: 100%;
	overflow: hidden;
	transition: transform 0.5s ease-in-out, margin-top 0.5s ease-in-out,
		margin-bottom 0.5s ease-in-out;
	&:hover {
		transform: scale(1.03);
		margin-top: 1em;
		margin-bottom: 1em;
	}
    @media only screen and (max-width: 1400px) {
		flex-direction: column-reverse;
		pointer-events: none;
	}
`;

export const StyledLogo = styled(GatsbyImage)`
    min-width: 3em;
    margin-top: 0.25em;
`

export const TextWrapper = styled.div`
	width: 47%;
	text-align: center;
	padding: 1.5em 3em;
    
    @media only screen and (max-width: 1400px) {
		flex-direction: column;
		width: 100%;
	}
`;

export const TextContainer = styled.div`
	text-align: left;
`;

export const TitleLogoWrapper = styled.div`
    display: flex;
    flex-direction: row;
    column-gap: 1em;
    justify-content: space-between;
    align-items: start;
`

export const TitleWrapper = styled.div`
	font-size: 1.5em;
    font-weight: 500;
`;

export const DateWrapper = styled.div`
	color: ${({ theme }) => theme.color.yellow900};
	font-weight: 200;
	font-style: italic;
	font-size: 0.85em;
    padding-top: 1em;
`;

export const PostWrapper = styled.div`
	color: ${({ theme }) => theme.color.grey300};
	font-size: 0.9em;
	font-weight: 400;
`;

export const StyledGatsbyImage = styled(GatsbyImage)`
	width: 100%;
	height: 100%;
`;

export const ImageWrapper = styled.div`
    width: 53%;
    @media only screen and (max-width: 1400px) {
        flex-direction: column;
        width: 100%;
    }
`;
