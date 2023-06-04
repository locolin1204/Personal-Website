import styled from "styled-components";

export const StyledTechContainer = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    background-color: ${({ theme }) => theme.color.yellow};
`

export const StyledTechFrame = styled.div`
  
    border-radius: 0.2em;
    padding: 1em;
`;

