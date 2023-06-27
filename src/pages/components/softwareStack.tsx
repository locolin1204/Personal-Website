import React from "react";
import {
	SiAdobephotoshop,
	SiAdobeillustrator,
	SiAdobeindesign,
	SiFigma,
} from "react-icons/si";
import {
	SoftwareFrameContainer,
	// EnterAnimationTechItem,
	TechContainerWrapper,
} from "./styles/about.styled";
import TechFrame from "./techFrame";
import techStackJSON from "../../resources/tech-stack.json";
import SoftwareFrame from "./softwareFrame";

export default function SoftwareStack() {
	function sortLength(a: string, b: string) {
		return b.length - a.length;
	}
	return (
		<div>
			<SoftwareFrame
				title={"design"}
				list={techStackJSON.design.sort(sortLength)}
				slug={"design"}
			/>
			<TechContainerWrapper>
				<SoftwareFrame
					title={"media editing"}
					list={techStackJSON.media.sort(sortLength)}
					slug={"media"}
				/>
			</TechContainerWrapper>
		</div>
	);
}
