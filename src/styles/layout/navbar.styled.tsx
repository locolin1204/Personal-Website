import styled from "styled-components";
import { Link } from "gatsby";

export const StyledNavBar = styled.ul`
	display: flex;
	list-style: none;
	padding: 1em 1em;
	justify-content: right;
	${({ theme: { color } }) => `
        background: ${color.offwhite500};
    `}
	font-weight: 400;
	margin: 0px;
	/* border: red solid 1px; */
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
	&&[aria-current],
	&:hover {
		color: ${({ theme }) => theme.color.sand700};
	}
`;

export const NavContainer = styled.div`
	display: flex;
	justify-content: right;
	button {
		outline: none;
		cursor: pointer;
		border: none;
		background: transparent;
		visibility: hidden;
		opacity: 0;
	}

	@media only screen and (max-width: 768px) {
		button {
			visibility: visible;
			opacity: 1;
		}
	}
`;
