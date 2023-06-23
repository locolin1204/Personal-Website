import { StaticImage, GatsbyImage, getImage } from "gatsby-plugin-image";
import React from "react";
import {
	StyledJourneyCardContainer,
	TextContainer,
	StyledGatsbyImage,
	TextWrapper,
	DateWrapper,
	PostWrapper,
	TitleWrapper
} from "./styles/journey.styled";

export default function JourneyCard({
	title,
	post,
	startdate,
	enddate,
	slug,
	image,
	index,
}: {
	title: string;
	post: string;
	startdate: string;
	enddate: string;
	slug: string;
	index: number;
	image: string;
}) {
	const gatsbyImage = getImage(image);
	return (
		<StyledJourneyCardContainer rowLayout={index % 2 === 1 && "row-reverse"}>
			<TextWrapper>
			<TextContainer>
				<TitleWrapper>{title}</TitleWrapper>
				<DateWrapper>{startdate} – {enddate}</DateWrapper>
				<PostWrapper>{post}</PostWrapper>
			</TextContainer>
			</TextWrapper>
			<div>
				{/* <img src={require(image)}/> */}
				<StyledGatsbyImage image={gatsbyImage} alt={title} />
				{/* <StaticImage
					src={`../../images/journey/${slug}.jpg`}
					alt={`${slug}`}
					style={{
						width: "30em",
						// border: "red 1px solid"
					}}
				/> */}
			</div>
		</StyledJourneyCardContainer>
	);
}
