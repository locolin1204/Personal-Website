import * as React from "react";
import { Link } from "gatsby";
import {
	StyledNavBar,
	StyledNavItem,
	StyledNavLink,
} from "../styles/navbar.styled";

const NavBar = () => {
	return (
		<div>
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
		</div>
	);
};

export default NavBar;
