import styled from "styled-components";

export const StyledVideoCardContainer = styled.div`
	display: flex;
	margin: 1em 0em;
	justify-content: space-between;
	background-color: ${({ theme }) => theme.color.offwhite300};
    transition: box-shadow 0.3s ease-in-out;
    border-radius: 0.5em;
    box-shadow: 0 5px 10px rgba(160, 160, 160, 0.05), 0 15px 40px rgba(175, 175, 175, 0.2);
    &:hover {
        box-shadow: 0 5px 10px rgba(160,160,160,.05), 0 15px 40px rgba(175,175,175,.4);
    }
	@media only screen and (max-width: 1400px) {
		flex-direction: column;
		margin: 0.5em 0.5em;
        border-radius: 0;
	}
`;

export const StyledIframe = styled.iframe`
	display: inline-block;
	height: 18em;
	width: 32em;
`;

export const ThumbnailContainer = styled.div`
    display: flex;
    width: 70%;
    height: 50%;
    overflow: hidden;
    @media only screen and (max-width: 1400px) {
        height: 100%;
        width: 100%;
    }
`
export const ThumbnailImage = styled.img`
    display: inline-block;
	width: 100%;
    height: 100%;
    object-fit: contain;
    transition: transform 0.4s ease-in-out;
    &:hover {
        transform: scale(1.03);
    }
    @media only screen and (max-width: 1400px) {
        height: 100%;
        width: 100%;
    }
    @media only screen and (max-width: 768px) {
        pointer-events: none;
    }
`;

export const StyledVideoDetail = styled.div`
	padding: 2em;
	display: flex;
	flex-direction: column;
	row-gap: 0.5em;
	width: 70%;
	@media only screen and (max-width: 1400px) {
		width: 100%;
        padding: 1em;
        padding-left: 1.3em;
	}
`;

export const TagContainer = styled.div``;

export const VideoTitle = styled.a`
	font-size: 1.3em;
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
