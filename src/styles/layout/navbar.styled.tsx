import styled, { keyframes } from "styled-components";
import { Link } from "gatsby";

const fadeIn = keyframes`
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
`;

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
	@media only screen and (max-width: 768px) {
		&.is-expanded {
			display: flex;
			animation: ${fadeIn} 0.25s ease-out forwards;
		}
	}
`;
export const StyledNavItem = styled.li`
	padding: 0em 2em;
	background: inherit;
`;

export const StyledNavLink = styled(Link).attrs({
})`
	color: ${({ theme }) => theme.color.sand300};
	text-decoration: none;
	background: inherit;
	transition: color 0.3s ease-in-out;
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
		transition: color 0.3s ease-in-out;
		&:hover {
			color: ${({ theme }) => theme.color.sand700};
		}
	}

	@media only screen and (max-width: 768px) {
		button {
			display: block;
			padding: 1em 2em;
			text-decoration: none;
			color: ${({ theme }) => theme.color.sand300};
		}
		${StyledNavBar} {
			display: none;
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
		}
	}
`;

export const NavList = styled.div``;
