import styled from "styled-components";
import { Link } from "gatsby";

export const StyledNavBar = styled.ul`
	display: flex;
	list-style: none;
    padding: 1em 1em ;
    justify-content: right;
    ${({ theme: { color } }) => `
        background: ${color.offwhite500};
    `}
    font-weight: 400;
	margin: 0px;
    /* border: red solid 1px; */


    /* height: 3.5rem;
    position: fixed;
    width: 100%;
    z-index: 999; */
	/* box-shadow: 0 5px 10px rgba(160,160,160,.05), 0 15px 40px rgba(175,175,175,.2); */

`;
export const StyledNavItem = styled.li`
	padding: 0em 2em;
    background: inherit;
`;

export const StyledNavLink = styled(Link).attrs({
    // activeStyle: ,
})`
    color: ${({ theme }) => theme.color.sand500};
    text-decoration: none;
    background: inherit;
	transition: color 0.3s ease-in-out;
    /* &:hover{
        color: ${({ theme }) => theme.color.grey500};
    } */
    &&[aria-current],  &:hover {
        color: ${({ theme }) => theme.color.sand700};
    }
`;
