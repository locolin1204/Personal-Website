import { StaticImage } from "gatsby-plugin-image";
import styled from "styled-components";

export const StyledJourneyCardContainer = styled.div`
	display: flex;
    flex-direction: row;
    /* border: red 1px solid; */
    justify-content: space-between;
`;

export const StyledImage = styled(StaticImage)`
	/* width: 500px; */
	width: 300px;
	height: 200px;
`;

export const TextContainer = styled.div`
    /* border: red 1px solid; */
`