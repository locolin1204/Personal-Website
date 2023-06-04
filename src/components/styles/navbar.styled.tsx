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
    color: ${({ theme }) => theme.color.sand};
    text-decoration: none;
    background: inherit;
    transition-duration: 2ms ease;
    &:hover{
        color: ${({ theme }) => theme.color.darkgrey};
        transform: scale(1.05);
        /* font-weight: 600; */
    }
`;
