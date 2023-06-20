import React from "react";
import {
	SiAdobephotoshop,
	SiAdobeillustrator,
	SiAdobeindesign,
	SiFigma,
} from "react-icons/si";
import { DesignContainer } from "./styles/about.styled";

export default function SoftwareStack() {
	return (
		<div>
			<DesignContainer>
				{/* <SiAdobeillustrator title="illustrator" />
				<SiAdobephotoshop />
				<SiAdobeindesign />
				<SiFigma /> */}

				<img
					width="100"
					height="100"
					src="https://img.icons8.com/fluency/100/adobe-photoshop.png"
					alt="adobe-photoshop"
				/>
				<img
					width="100"
					height="100"
					src="https://img.icons8.com/fluency/100/adobe-illustrator.png"
					alt="adobe-illustrator"
				/>

				<img
					width="100"
					height="100"
					src="https://img.icons8.com/fluency/100/adobe-indesign.png"
					alt="adobe-indesign"
				/>
				<img
					width="100"
					height="100"
					src="https://img.icons8.com/fluency/100/figma.png"
					alt="figma"
				/>
			</DesignContainer>
			<DesignContainer>
				<img
					width="100"
					height="100"
					src="https://img.icons8.com/plasticine/100/final-cut-pro-x.png"
					alt="final-cut-pro-x"
				/>
				<img
					width="100"
					height="100"
					src="https://img.icons8.com/fluency/100/adobe-lightroom.png"
					alt="adobe-lightroom"
				/>

				<img
					width="100"
					height="100"
					src="https://img.icons8.com/plasticine/100/motion.png"
					alt="motion"
				/>
			</DesignContainer>
		</div>
	);
}
