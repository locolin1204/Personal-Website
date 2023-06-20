import { StaticImage, GatsbyImage, getImage } from "gatsby-plugin-image";
import React from "react";
import {
	StyledImage,
	StyledJourneyCardContainer,
	TextContainer,
} from "./styles/journey.styled";

export default function JourneyCard({
	title,
	post,
	date,
	slug,
	image,
	index,
}: {
	title: string;
	post: string;
	date: string;
	slug: string;
	index: number;
	image: string;
}) {
	const gatsbyImage = getImage(image);
	return (
		<StyledJourneyCardContainer rowLayout={index % 2 === 1 && "row-reverse"}>
			<TextContainer>
				<h4>{title}</h4>
				<div>{date}</div>
				<div>{post}</div>
			</TextContainer>
			<div>
				{/* <img src={require(image)}/> */}
				<GatsbyImage image={gatsbyImage} alt="yo" />
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
