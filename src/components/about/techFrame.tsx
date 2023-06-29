import React from "react";
import {
	StyledTechFrame,
	StyledList,
	StyledIcon,
	IconNameWrapper,
} from "../../styles/about/techSoftware.styled";
import { EnterAnimation } from "../enterAnimation";
import { UnderlineText } from "../../styles/global";

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
										require(`../../images/techicons/${slug}/${item
											.replace(/\s+/g, "-")
											.toLowerCase()}.svg`).default
									}
								/>
								<UnderlineText weight={"100"} height={"1"} duration={"0.5"}>
									{item}
								</UnderlineText>
							</IconNameWrapper>
						</EnterAnimation>
					))}
				</StyledList>
			</div>
		</StyledTechFrame>
	);
}
