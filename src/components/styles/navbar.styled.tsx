import styled from "styled-components";
import { Link } from "gatsby";

export const StyledNavBar = styled.ul`
	display: flex;
	list-style: none;
    padding: 1em 1em ;
    justify-content: right;
    ${({ theme: { color } }) => `
        background: ${color.offwhite};
    `}
    font-weight: 400;
	margin: 0px;
    /* border: red solid 1px; */
`;
export const StyledNavItem = styled.li`
	padding: 0em 2em;
    background: inherit;
`;

export const StyledNavLink = styled(Link)`
    color: ${({ theme }) => theme.color.sand500};
    text-decoration: none;
    background: inherit;
	transition: color 0.3s ease-in-out;
    &:hover{
        color: ${({ theme }) => theme.color.grey500};
    }
`;
