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
	/* .is-expanded {
		display: flex;
	} */
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
		display: none;
	}

	@media only screen and (max-width: 768px) {
		button {
			display: block;
			padding: 1em 2em;
			text-decoration: none;
			color: ${({ theme }) => theme.color.sand500};
		}
		${StyledNavBar} {
			display: none;
			opacity: 0; /* add this line */
			transform: translateY(-100%); /* add this line */
			transition: opacity 0.2s, transform 0.2s; /* add this line */
		}
		.is-expanded {
			display: flex;
			position: absolute;
			flex-direction: column;
			justify-content: center;
			align-items: center;
			row-gap: 2em;
			width: 100%;
			height: 100%;
			top: 0;
			left: 0;
			bottom: 0;
			right: 0;
			z-index: 999;
			overflow: hidden;

			opacity: 1; /* add this line */
			transform: translateY(0); /* add this line */
		}
	}
`;

export const NavList = styled.div``;
