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
			{/* <TechFrame
				list={techStackJSON.design.sort(sortLength)}
				title={"design"}
				slug={"design"}
			/>
			<TechFrame
				list={techStackJSON.media.sort(sortLength)}
				title={"media editing"}
				slug={"media"}
			/> */}
			<div>
			<img src={require("../../images/techicons/design/adobe-illustrator.svg").default} />
			<div style={{"font-size" : "1rem", "color": "grey"}}>Illustrator</div>
			</div>
			<div>
			<img src={require("../../images/techicons/design/adobe-photoshop.svg").default} /><div style={{"font-size" : "1rem", "color": "grey"}}>Photoshop</div>
			</div>
			<div>
			<img src={require("../../images/techicons/design/adobe-indesign.svg").default} /><div style={{"font-size" : "1rem", "color": "grey"}}>Indesign
			</div>
			</div>
			<div>
			<img src={require("../../images/techicons/design/figma.svg").default} /><div style={{"font-size" : "1rem", "color": "grey"}}>Figma</div>
			</div>
			{/* <SiAdobeillustrator title="illustrator" />
				<SiAdobephotoshop />
				<SiAdobeindesign />
				<SiFigma /> */}
		</DesignContainer>

		<DesignContainer>
			<div>
			<img src={require("../../images/techicons/media/adobe-lightroom.svg").default} /><div style={{"font-size" : "1rem", "color": "grey"}}>Lightroom</div>
			</div>
			<div>
			<img src={require("../../images/techicons/media/final-cut-pro.svg").default} /><div style={{"font-size" : "1rem", "color": "grey"}}>Final Cut Pro
			</div>
			</div>
			<div>
			<img src={require("../../images/techicons/media/motion-5.svg").default} />
			<div style={{"font-size" : "1rem", "color": "grey"}}>Motion 5</div>
			</div>
		</DesignContainer>
		</div>

	);
}
