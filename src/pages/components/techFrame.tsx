import React from "react";
import {
	StyledTechFrame,
	StyledTechContainer,
	StyledList,
	StyledIcon,
	IconNameWrapper,
	EnterAnimationTechItem,
	UnderlineText
} from "./styles/about.styled";

export default function TechFrame({
	list,
	title,
	slug,
}: {
	list: Array<string>;
	title: string;
	slug: string;
}) {
	return (
		<StyledTechFrame>
			<h5>{title}</h5>
			<StyledList>
				{list.map((item, index) => (
					<EnterAnimationTechItem index={index}>
					<IconNameWrapper key={index}>
						
						<StyledIcon src={require(`../../images/techicons/${slug}/${item.replace(/\s+/g,"-").toLowerCase()}.svg`).default} />
						<UnderlineText>
						{item}
						</UnderlineText>
					</IconNameWrapper>
					</EnterAnimationTechItem>
				))}
			</StyledList>
		</StyledTechFrame>
	);
}
