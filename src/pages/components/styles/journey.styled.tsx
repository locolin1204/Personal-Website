import { StaticImage } from "gatsby-plugin-image";
import styled from "styled-components";

export const StyledJourneyCardContainer = styled.div`
	display: flex;
    flex-direction: ${({rowLayout}) => rowLayout || "row"} ;
    /* border: red 1px solid; */
    justify-content: center;
    gap: 3em;
`;

export const StyledImage = styled(StaticImage)`
	/* width: 500px; */
	width: 300px;
	height: 200px;
`;

export const TextContainer = styled.div`
    /* border: red 1px solid; */
`

export const StyledJourneyContainer = styled.div`
    display: flex;
    flex-direction: column;
    gap: 1em;
    /* border: red 1px solid; */
`
