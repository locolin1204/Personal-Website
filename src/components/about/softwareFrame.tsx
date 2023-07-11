import React from "react";
import {
	SoftwareFrameContainer,
	SoftwareFrameWrapper,
	StyledIcon,
	SoftwareText,
	SoftwareIconTextWrapper,
	SoftwareTitle,
} from "../../styles/about/techSoftware.styled";
import { EnterAnimation } from "../enterAnimation";

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
				{list.map((item, index) => (
					<EnterAnimation index={index * 2} offsetY={20} delay={0.1}>
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
			</SoftwareFrameContainer>
		</SoftwareFrameWrapper>
	);
}
