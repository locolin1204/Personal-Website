import styled from "styled-components";

export const StyledCardContainer = styled.div`
    background-color: ${({ theme }) => theme.color.lightblue};
    border-radius: 0.2em;
    padding: 1em;
`;

export const StyledTitle = styled.div`
	font-size: 1.2em;
    font-weight: 500;
    /* border: red 1px solid; */
`;

export const StyledExcerpt = styled.div`
    
`
export const StyledTechList = styled.div`
    font-size: .9em;
    font-weight: 300;
    font-style: italic;
`