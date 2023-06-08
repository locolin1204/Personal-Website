import { StaticImage, GatsbyImage, getImage } from "gatsby-plugin-image";
import React from "react";
import {
	StyledImage,
	StyledJourneyCardContainer,
	TextContainer,
} from "./styles/journey.styled";
import { graphql, useStaticQuery } from "gatsby";
import bigimage from "../../images/journey/lsc-edboard.jpg";

export default function JourneyCard({
	title,
	post,
	date,
	slug,
}: {
	title: string;
	post: string;
	date: string;
	slug: string;
}) {
	// const image = getImage(data.file);
	// const data = useStaticQuery(graphql`
	// 	query ($image: String) {
	// 		file(relativePath: { glob: $image }) {
	// 			childImageSharp {
	// 				gatsbyImageData(width: 500)
	// 			}
	// 		}
	// 	}
	// `);
	// const imagePath = `../../images/journey/${slug}.jpg`;
	const imagePath = "../../images/journey/cc-photog.jpg"
	console.log(imagePath);
	// const image = getImage(data.file);
	return (
		<StyledJourneyCardContainer>
			<TextContainer>
				<h4>{title}</h4>
				<div>{date}</div>
				<div>{post}</div>
			</TextContainer>
			<div>
				{/* <img src={require(image)}/> */}
				{/* <GatsbyImage image={image} alt="yo" /> */}
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
