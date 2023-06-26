import React from "react";
import {
	RedLineDiv,
	SoftwareFrameContainer,
	SoftwareFrameWrapper,
	StyledIcon,
	SoftwareText,
	SoftwareIconTextWrapper,
	EnterAnimationTechItem,
	SoftwareTitle,
} from "./styles/about.styled";

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
			<EnterAnimationTechItem index={0}>
				<SoftwareTitle>{title}</SoftwareTitle>
			</EnterAnimationTechItem>
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
					<EnterAnimationTechItem index={index*2}>
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
					</EnterAnimationTechItem>
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
