import GatsbyImage from "gatsby-image";
import { Container, Col } from "react-bootstrap";
import styled from "styled-components";

export const StyledContainer = styled(Container)`
	min-height: 100vh;
	padding: 0px;
	display: flex;
	flex-direction: column;
	background-color: ${({ theme }) => theme.color.offwhite500};
    overflow: hidden;
`;

export const StyledPageHeader = styled.div`
	font-size: 2.5em;
	font-weight: 500;
	padding-top: 1.5rem;
	padding-bottom: 1.5rem;
	padding-left: 1rem;
`;

export const StyledCol = styled(Col)`
	flex: 1;
`;

export const HeroImage = styled(GatsbyImage)`
    left: 50%;
    margin-left: -50vw;
    margin-right: -50vw;
    right: 50%;
    max-width: 100vw;
    height: ${({ height }) => height};
`

export const StyledChildren = styled.div`
`