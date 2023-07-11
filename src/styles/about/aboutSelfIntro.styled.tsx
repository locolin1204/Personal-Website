import styled from "styled-components";

export const StyledAboutSelfIntroContainer = styled.div`
	display: flex;
	padding: 2em 0em;
	@media (max-width: 768px) {
		flex-direction: column;
		align-items: center;
	}
`;

export const ProfilePic = styled.div`
	border-radius: 1em;
	display: block;
	z-index: 999;
`;

export const AboutBodyText = styled.div`
	display: flex;
	align-items: center;
	background-color: ${({ theme }) => theme.color.offwhite300};
	border-radius: 1em;
	padding: 2em 4em;
	margin-top: 5rem;
	margin-left: -2em;
	font-weight: 350;
	overflow: hidden;
	@media (max-width: 768px) {
		margin-left: 1em;
		margin-right: 1em;
		margin-top: -1rem;
		padding: 2em 2em;
	}
`;
