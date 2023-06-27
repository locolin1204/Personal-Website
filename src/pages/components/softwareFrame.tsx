import React from "react";
import {
	RedLineDiv,
	SoftwareFrameContainer,
	SoftwareFrameWrapper,
	StyledIcon,
	SoftwareText,
	SoftwareIconTextWrapper,
	// EnterAnimationTechItem,
	SoftwareTitle,
} from "./styles/about.styled";
import { EnterAnimation } from "./enterAnimation";

export default function SoftwareFrame({
	list,
	title,
	slug,
}: {
	list: Array<string>;
	title: string;
	slug: string;
}) {
	return (
		<SoftwareFrameWrapper>
			<EnterAnimation offsetY={20}>
				<SoftwareTitle>{title}</SoftwareTitle>
			</EnterAnimation>
			<SoftwareFrameContainer>
				{/* <div> */}
				{/* {list.map((item, index) => (
					<EnterAnimationTechItem index={index}>
					<IconNameWrapper key={index}>
						<StyledIcon src={require(`../../images/techicons/${slug}/${item.replace(/\s+/g,"-").toLowerCase()}.svg`).default} />
						<UnderlineText>
						{item}
						</UnderlineText>
					</IconNameWrapper>
					</EnterAnimationTechItem>
				))} */}
				{list.map((item, index) => (
					<EnterAnimation index={index*2} offsetY={20} delay={0.1}>
						<SoftwareIconTextWrapper>
							<StyledIcon
								src={
									require(`../../images/techicons/${slug}/${item
										.replace(/\s+/g, "-")
										.toLowerCase()}.svg`).default
								}
							/>
							<SoftwareText>{item}</SoftwareText>
						</SoftwareIconTextWrapper>
					</EnterAnimation>
				))}
				{/* </div> */}

				{/* 
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
			</div> */}
			</SoftwareFrameContainer>
		</SoftwareFrameWrapper>
	);
}
