import { Container } from "react-bootstrap";
import styled from "styled-components";

export const StyledContainer = styled(Container)`
    min-height: 100vh;
    border: red solid 1px;
    padding-left: 0px;
    padding-right: 0px;
    
    display: flex;
    flex-direction: column;
    background-color: ${({ theme }) => theme.color.offwhite};
`;


export const StyledPageHeader = styled.div`
    font-size: 2.5em;
    font-weight: 500;
    padding-top: 0.5em;
    padding-bottom: 0.5em;
`