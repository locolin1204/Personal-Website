import * as React from "react";
import { Link } from "gatsby";
import {
	NavContainer,
	StyledNavBar,
	StyledNavItem,
	StyledNavLink,
} from "../../styles/layout/navbar.styled";
import { FaTimes } from "react-icons/fa";

const NavBar = () => {
	return (
		<NavContainer>
			<StyledNavBar>
				<StyledNavItem>
					<StyledNavLink to="/">home</StyledNavLink>
				</StyledNavItem>
				<StyledNavItem>
					<StyledNavLink to="/projects">projects</StyledNavLink>
				</StyledNavItem>
				<StyledNavItem>
					<StyledNavLink to="/photography">photography</StyledNavLink>
				</StyledNavItem>
				<StyledNavItem>
					<StyledNavLink to="/journey">journey</StyledNavLink>
				</StyledNavItem>
				<StyledNavItem>
					<StyledNavLink to="/about">about me</StyledNavLink>
				</StyledNavItem>
			</StyledNavBar>
			<button>
				<FaTimes />
			</button>
		</NavContainer>
	);
};

export default NavBar;
