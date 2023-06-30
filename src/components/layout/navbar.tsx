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
	const [button, setButton] = useState(true);
	const [isNavExpanded, setIsNavExpanded] = useState(false);

	const showButton = () => {
		if (window.innerWidth <= 768) {
			setButton(true);
		} else {
			setButton(false);
		}
	};
	window.addEventListener("resize", showButton);

	const controls = useAnimation();
    const buttonRef = useRef();

	const triggerAnimation = () => {
        controls.start({
			opacity: 1,
            transition: { duration: 0.5 },
        });
    };

	return (
		<NavContainer>
			<button
				onClick={() => {
					setIsNavExpanded(true);
					triggerAnimation()
				}}
			>
				<FaBars />
			</button>
			{/* <motion.div animate={controls} initial={{opacity: isNavExpanded ? "0": "100" }} style={{zIndex: "9999"}}> */}
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
			{/* </motion.div> */}
		</NavContainer>
	);
};

export default NavBar;
