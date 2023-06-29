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
	ImageWrapper,
} from "../../styles/journey/journeyCard.styled";

const HtmlToReactParser = require("html-to-react").Parser;

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
	const htmlToReactParser = new HtmlToReactParser();
	const reactElement = htmlToReactParser.parse(body);
	// const gatsbyImage = getImage(image);
	return (
		<StyledJourneyCardContainer rowLayout={index % 2 === 1 && "row-reverse"}>
			<TextWrapper>
				<TextContainer>
					<TitleWrapper>{title}</TitleWrapper>
					<DateWrapper>
						{startdate} – {enddate}
					</DateWrapper>
					<PostWrapper>{post}</PostWrapper>
					{body ? (
						<div>
							<hr />
							{reactElement}
						</div>
					) : null}
				</TextContainer>
			</TextWrapper>
			<ImageWrapper>
				{/* <img src={require(image)}/> */}
				<StyledGatsbyImage fluid={image} alt={title} />
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
