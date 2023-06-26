import { GatsbyImage } from "gatsby-plugin-image";
import { Container, Col } from "react-bootstrap";
import styled from "styled-components";

export const StyledContainer = styled(Container)`
	min-height: 100vh;
	/* border: red solid 1px; */
	/* padding-left: 0px;
    padding-right: 0px; */
	padding: 0px;
	display: flex;
	flex-direction: column;
	background-color: ${({ theme }) => theme.color.offwhite500};
`;

export const StyledPageHeader = styled.div`
	font-size: 2.5em;
	font-weight: 500;
	padding-top: 1.5rem;
	padding-bottom: 1.5rem;
`;

export const StyledCol = styled(Col)`
	/* border: red 1px solid; */
	/* text-align: center; */
	/* padding-bottom: 4rem; */
	flex: 1;
	/* padding-top: 3.5rem; */
`;

export const HeroImage = styled(GatsbyImage)`
	left: 50%;
	margin-left: -50vw;
	margin-right: -50vw;
	position: relative;
	right: 50%;
	object-fit: contain;
	max-width: 100vw;
	width: 100vw;
	height: ${({ height }) => height};
    img{
        object-fit: cover;
        object-position: 50% ${({ position }) => position};
    }

`;
