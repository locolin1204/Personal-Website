import styled from "styled-components";

export const StyledAboutSelfIntroContainer = styled.div`
	display: flex;
	/* flex-wrap: wrap; */
	/* display: grid; */
	/* border: red 1px solid; */

	/* grid-template-columns: repeat(auto-fit, minmax(5em, 10em)); */
	padding: 2em 0em;
	@media (max-width: 768px) {
		flex-direction: column;
		align-items: center;
	}
`;

export const ProfilePic = styled.span`
	/* width: 500px; */
	border-radius: 1em;
	display: block;
	/* border: red solid 1px; */
	/* right: -100px; */
	/* width: 70rem; */
	/* margin-bottom: 10%; */
	/* margin-right: -3%; */
	z-index: 999;
	/* @media (max-width: 768px) {
		width: 100%;
	} */
`;

export const AboutBodyText = styled.div`
	display: flex;
	align-items: center;
	background-color: ${({ theme }) => theme.color.offwhite300};
	border-radius: 1em;
	padding: 2em 4em;
	/* border: red 1px solid; */
	/* width: 200%; */
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
