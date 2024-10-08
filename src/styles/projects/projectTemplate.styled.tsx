import styled from "styled-components";
import GatsbyImage from "gatsby-image";

export const StyledTechList = styled.div`
    padding-left: 1em;
	padding-bottom: 1em;
    display: flex;
    flex-wrap: wrap;
    row-gap: 0.5em;
    column-gap: 0.5em;
`;

export const StyledTechItem = styled.span`
	font-family: Source Code Pro;
	font-size: 1.2em;
	font-weight: 300;
	font-style: italic;
	background-color: ${({ theme }) => theme.color.offwhite200};
	color: ${({ theme }) => theme.color.yellow900};
	padding: 0em 0.5em;
	border-radius: 0.3rem;
    @media (max-width: 768px) {
        font-size: 1em;
    }
`;

export const BodyWrapper = styled.div`
    display: flex;
    flex-direction: column-reverse;
    column-gap: 1em;
    height: 100%;
    justify-items: center;
    align-items: center;
    @media(max-width: 1350px){
        flex-direction: column-reverse;
    }
`

export const StyledGatsbyImageFront = styled(GatsbyImage)`
	position: absolute;
	z-index: 999;
    width: 50%;
    min-width: 30em;
	box-shadow: 0 5px 10px rgba(160, 160, 160, 0.05),
		0 15px 40px rgba(175, 175, 175, 0.2);
	margin-bottom: 1em;
	@media (max-width: 1350px) {
		width: 100%;
        min-width: 0;
	}
`;

export const StyledGatsbyImageBG = styled(GatsbyImage)`
	filter: blur(3px);
	-webkit-filter: blur(3px);
	width: 100%;
	height: 40vh;
	/* 
	object-fit: cover;
	object-position: 50% 65%;
	 */
`;


export const ImageWrapper = styled.div`
	left: 50%;
	margin-left: -50vw;
	margin-right: -50vw;
	max-width: 100vw;
	position: relative;
	right: 50%;
	width: 100vw;
	overflow: hidden;
	display: flex;
	align-items: center;
	justify-content: center;
`;

export const DateWrapper = styled.div`
	padding: 1em 0em;
	padding-bottom: 0.2em;
	font-size: 1.2em;
	color: ${({ theme }) => theme.color.yellow900};
	font-style: italic;
    @media (max-width: 768px) {
        font-size: 1em;
    }
`;


export const LinkWrapper = styled.div`
	padding-bottom: 1em;
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

export const ContentWrapper = styled.div`
	margin: 0rem 1rem;
`

export const OverflowDiv = styled.div`
	overflow: hidden;
`
