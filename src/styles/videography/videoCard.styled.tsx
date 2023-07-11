import styled from "styled-components";

export const StyledVideoCardContainer = styled.div`
	display: flex;
	margin: 1em 0em;
	justify-content: space-between;
	background-color: ${({ theme }) => theme.color.offwhite300};
	@media only screen and (max-width: 768px) {
		flex-direction: column;
		margin: 0.5em 0.5em;
	}
`;

export const StyledIframe = styled.iframe`
	display: inline-block;
	height: 18em;
	width: 32em;
`;

export const Thumbnail = styled.img`
	display: inline-block;
	width: 50%;
    height: 50%;
	@media only screen and (max-width: 768px) {
		height: 100%;
		width: 100%;
	}
`;

export const StyledVideoDetail = styled.div`
	padding: 1em;
	display: flex;
	flex-direction: column;
	row-gap: 0.5em;
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
	padding: 0.1em 0.3em;
	color: ${({ theme }) => theme.color.offwhite700};
	font-weight: 200;
	border-radius: 0.3em;
	font-size: 0.8rem;
	font-family: Source Code Pro;
`;

export const VideoDescription = styled.div`
	word-break: break-word;
	font-size: 0.85em;
	font-weight: 200;
`;
