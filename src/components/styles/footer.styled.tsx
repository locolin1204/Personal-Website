import styled from "styled-components";
import { Link } from "gatsby";
import { IconBase } from "react-icons";

export const StyledFooter = styled.div`
	${({ theme: { color } }) => `
        background: ${color.grey200};
        color: ${color.offwhite500};
    `}
	display:flex;
    flex-direction: column;
	padding: 2em;
	font-weight: 300;
    /* border: red 1px solid; */
`;

export const StyledIconContainer = styled.div`
	display: flex;
	justify-content: center;
	background: inherit;
	column-gap: 1em;
	font-size: 1.5em;
    /* border: red 1px solid; */
`;

export const StyledIconLink = styled.a`
    display: flex;
    align-items: center;
	color: ${({ theme }) => theme.color.offwhite500};
    /* border: red 1px solid; */
    &:hover{
        color :${({ theme }) => theme.color.yellow400}
    }
    cursor: pointer;
`;

export const StyledTextContainer = styled.span`
  padding-top: 1em;
  /* border: red 1px solid; */
  text-align: center;
  margin-bottom: 0px;
`