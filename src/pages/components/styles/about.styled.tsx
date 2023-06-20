import styled from "styled-components";

export const StyledTechContainer = styled.div`
	display: flex;
	flex-direction: row;
	background-color: ${({ theme }) => theme.color.yellow400};
`;

export const StyledTechFrame = styled.div`
	border-radius: 0.2em;
	padding: 2rem;
	padding-right: 10em;
`;

export const StyledList = styled.div`
	font-family: "Source Code Pro";
	font-weight: 300;
`;

export const DesignContainer = styled.div`
	margin-top: 1rem;
	padding: 2rem;
	display: flex;
	font-size: 4em;
	gap: 1em;
	background-color: ${({ theme }) => theme.color.yellow400};
`;

export const MottoTextContainer = styled.div`
	display: flex;
	justify-content: center;
	font-size: 1.3rem;
	text-align: center;
	padding: 10em;
	font-weight: 200;
	height: 100vh;
	/* border: red solid 1px; */
	/* justify-content: center; */
	/* top: 50%; */
`;
