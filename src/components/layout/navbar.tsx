import * as React from "react";
import { useState } from "react";
import {
	NavContainer,
	StyledNavBar,
	StyledNavItem,
	StyledNavLink,
} from "../../styles/layout/navbar.styled";
import { RxCross1 } from "react-icons/rx";
import { FaBars } from "react-icons/fa";
import {HiBars3} from "react-icons/hi2";

const NavBar = () => {
	const [isNavExpanded, setIsNavExpanded] = useState(false);
	React.useEffect(()=>{console.log(isNavExpanded ? "is-expanded" : "not-expanded");},[isNavExpanded]);
	return (
		<NavContainer>
			<button style={{fontSize: "1.2em"}}
				onClick={() => {
					setIsNavExpanded(true);
				}}
			>
				<HiBars3 />
			</button>

			<StyledNavBar className={isNavExpanded ? "is-expanded" : "not-expanded"}>
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
					<StyledNavLink to="/videography">videography</StyledNavLink>
				</StyledNavItem>
				<StyledNavItem>
					<StyledNavLink to="/journey">journey</StyledNavLink>
				</StyledNavItem>
				<StyledNavItem>
					<StyledNavLink to="/about">about me</StyledNavLink>
				</StyledNavItem>

				{isNavExpanded && (
					<button
						onClick={() => {
							setIsNavExpanded(false);
						}}
					>
						<RxCross1 />
					</button>
				)}
			</StyledNavBar>
		</NavContainer>
	);
};

export default NavBar;
