import { StaticImage, GatsbyImage, getImage } from "gatsby-plugin-image";
import React from "react";
import {
	StyledJourneyCardContainer,
	TextContainer,
	StyledGatsbyImage,
	TextWrapper,
	DateWrapper,
	PostWrapper,
	TitleWrapper,
	ImageWrapper
} from "./styles/journey.styled";

export default function JourneyCard({
	title,
	post,
	startdate,
	enddate,
	slug,
	image,
	index,
	body,
}: {
	title: string;
	post: string;
	startdate: string;
	enddate: string;
	slug: string;
	index: number;
	image: string;
	body: string;
}) {
	const gatsbyImage = getImage(image);
	return (
		<StyledJourneyCardContainer rowLayout={index % 2 === 1 && "row-reverse"}>
			<TextWrapper>
			<TextContainer>
				<TitleWrapper>{title}</TitleWrapper>
				<DateWrapper>{startdate} – {enddate}</DateWrapper>
				<PostWrapper>{post}</PostWrapper>
				
				{body ? <div><hr />{body}</div> : null}
				{/* <hr />

				{body} */}
			</TextContainer>
			</TextWrapper>
			<ImageWrapper>
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
			</ImageWrapper>
		</StyledJourneyCardContainer>
	);
}
