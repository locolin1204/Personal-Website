import styled from "styled-components";

export const StyledVideoCardContainer = styled.div`
	display: flex;
	margin: 1em 0em;
	justify-content: space-between;
	/* box-shadow: rgba(0, 0, 0, 0.1) 0px 4px 4px 0px inset; */
	background-color: ${({ theme }) => theme.color.offwhite300};
	@media only screen and (max-width: 768px) {
		flex-direction: column;
	}
	/* border: red 1px solid; */
`;

export const StyledIframe = styled.iframe`
	/* height: 100%; */
	display: inline-block;
	/* border: red 1px solid; */
	height: 18em;
	width: 32em;
	/* width: 100%; */
	/* height: 30vh; */
	/* width: 53vw; */
`;

export const Thumbnail = styled.img`
	display: inline-block;
	width: 50%;
    height: 50%;
	@media only screen and (max-width: 768px) {
		height: 100%;
		width: 100%;
	}
	/* width: 100%; */
`;

export const StyledVideoDetail = styled.div`
	padding: 1em;
	display: flex;
	flex-direction: column;
	row-gap: 0.5em;
	/* border: red 1px solid; */
	width: 70%;
	@media only screen and (max-width: 768px) {
		width: 100%;
	}
`;

export const TagContainer = styled.div``;

export const VideoTitle = styled.a`
	font-size: 1.2em;
	color: ${({ theme }) => theme.color.grey600};
	text-decoration: none;
	&:hover {
		color: ${({ theme }) => theme.color.grey600};

		text-decoration: underline;
	}
`;

export const VideoDate = styled.div`
	font-weight: 200;
	font-style: italic;
	font-size: 0.9em;
	color: ${({ theme }) => theme.color.offwhite700};
`;

export const PostTag = styled.span`
	display: inline-block;
	background-color: ${({ theme }) => theme.color.offwhite550};
	margin: 0.1em;
	/* border: red 1px solid; */
	padding: 0.1em 0.3em;
	color: ${({ theme }) => theme.color.offwhite700};
	font-weight: 200;
	border-radius: 0.3em;
	font-size: 0.8rem;
	font-family: Source Code Pro;
	/* border: red 1px solid; */
`;

export const VideoDescription = styled.div`
	word-break: break-word;
	font-size: 0.9em;
	font-weight: 200;
	/* border: red 1px solid; */
`;
