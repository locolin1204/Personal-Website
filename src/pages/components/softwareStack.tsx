import React from "react";
import {
	SiAdobephotoshop,
	SiAdobeillustrator,
	SiAdobeindesign,
	SiFigma,
} from "react-icons/si";
import { DesignContainer, EnterAnimationTechItem } from "./styles/about.styled";
import TechFrame from "./techFrame";
import techStackJSON from "../../resources/tech-stack.json";

export default function SoftwareStack() {
	function sortLength(a: string, b: string) {
		return b.length - a.length;
	}
	return (
		<div>
			<DesignContainer>

			<TechFrame
				list={techStackJSON.design.sort(sortLength)}
				title={"design"}
				slug={"design"}
			/>
			<TechFrame
				list={techStackJSON.media.sort(sortLength)}
				title={"media editing"}
				slug={"media"}
			/>

				{/* <SiAdobeillustrator title="illustrator" />
				<SiAdobephotoshop />
				<SiAdobeindesign />
				<SiFigma /> */}

			
			</DesignContainer>
		</div>
	);
}
