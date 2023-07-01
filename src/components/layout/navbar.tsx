import * as React from "react";
import { useState } from "react";
import { Link } from "gatsby";
import {
	NavContainer,
	StyledNavBar,
	StyledNavItem,
	StyledNavLink,
} from "../../styles/layout/navbar.styled";
import { RxCross1 } from "react-icons/rx";
import { IoReorderThreeOutline } from "react-icons/io5";
import { FaBars } from "react-icons/fa";
import { EnterAnimation } from "../enterAnimation";

import { motion, useAnimation } from "framer-motion";
import { useRef } from "react";

const NavBar = () => {
	const [isNavExpanded, setIsNavExpanded] = useState(false);

	const controls = useAnimation();
	const buttonRef = useRef();

	const triggerAnimationAppear = () => {
		controls.start({
			opacity: 1,
			transition: { duration: 0.2 },
		});
	};

	const triggerAnimationDisappear = () => {
		controls.start({
			opacity: 0,
			transition: { duration: 0.2 },
		});
	};

	return (
		<NavContainer>
			<button
				onClick={() => {
					setIsNavExpanded(true);
					triggerAnimationAppear();
				}}
			>
				<FaBars />
			</button>
			{/* <motion.div
				animate={controls}
				initial={{ opacity: !isNavExpanded ? "1" : "0", }}
				style={{ zIndex: "9999" }}
				// className={isNavExpanded ? "is-expanded" : "not-expanded"}

			> */}
				<StyledNavBar
					className={isNavExpanded ? "is-expanded" : "not-expanded"}
				>
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

					{isNavExpanded && (
						<button
							onClick={() => {
								setIsNavExpanded(false);
								triggerAnimationDisappear();
							}}
						>
							<RxCross1 />
						</button>
					)}
				</StyledNavBar>
			{/* </motion.div> */}
		</NavContainer>
	);
};

export default NavBar;
