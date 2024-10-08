import styled from "styled-components";

export const TechContainerWrapper = styled.div`
	left: 50%;
	margin-left: -50vw;
	margin-right: -50vw;
	position: relative;
	right: 50%;
	object-fit: contain;
	max-width: 100vw;
	width: 100vw;
	background-color: ${({ theme }) => theme.color.offwhite300};
`;

export const StyledTechContainer = styled.div`
	display: grid;
	flex-direction: row;
	overflow: hidden;
	grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
	border-radius: 1em;
`;

export const StyledTechFrame = styled.div`
	display: flex;
	flex-direction: column;
	align-items: center;
	padding: 2rem;
	@media only screen and (max-width: 768px) {
		align-items: flex-start;
		margin-left: 2rem;
		margin-right: 2rem;
	}
`;

export const StyledList = styled.div`
	font-family: "Source Code Pro";
	font-weight: 300;
`;

export const IconNameWrapper = styled.div`
	display: flex;
	align-items: center;
	gap: 0.3em;
`;

export const StyledIcon = styled.img`
	height: 1em;
`;

export const SoftwareTitle = styled.h5`
	padding-bottom: 1em;
`;

export const SoftwareFrameContainer = styled.div`
	display: grid;
	font-size: 4em;
	justify-content: center;
	gap: 2em;
	grid-template-columns: repeat(auto-fit, minmax(1em, 1em));
	margin: 1rem;
`;

export const SoftwareIconTextWrapper = styled.div`
	display: flex;
	flex-direction: column;
	align-items: center;
	color: ${({ theme }) => theme.color.grey400};
`;

export const SoftwareText = styled.div`
	font-size: 1rem;
	white-space: nowrap;
	padding: 1em;
	font-weight: 300;
	font-family: Source Code Pro;
`;

export const SoftwareFrameWrapper = styled.div`
	text-align: center;
	padding: 2rem 0em;
`;
