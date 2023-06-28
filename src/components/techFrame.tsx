import React from "react";
import {
	StyledTechFrame,
	StyledTechContainer,
	StyledList,
	StyledIcon,
	IconNameWrapper,
	// EnterAnimationTechItem,
	UnderlineText,
} from "../styles/about.styled";
import { EnterAnimation } from "./enterAnimation";

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
			<div style={{ "text-align": "left" }}>
				<EnterAnimation offsetY={20}>
					<h5>{title}</h5>
				</EnterAnimation>
				<StyledList>
					{list.map((item, index) => (
						<EnterAnimation index={index} delay={0.1} offsetY={20}>
							<IconNameWrapper key={index}>
								<StyledIcon
									src={
										require(`../images/techicons/${slug}/${item
											.replace(/\s+/g, "-")
											.toLowerCase()}.svg`).default
									}
								/>
								<UnderlineText>{item}</UnderlineText>
							</IconNameWrapper>
						</EnterAnimation>
					))}
				</StyledList>
			</div>
		</StyledTechFrame>
	);
}
