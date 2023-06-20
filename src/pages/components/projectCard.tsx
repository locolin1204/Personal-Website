import React from "react";
import { GatsbyImage, StaticImage, getImage } from "gatsby-plugin-image";
import {
	StyledCardContainer,
	StyledTitle,
	StyledExcerpt,
	StyledTechList,
	ImageWrapper,
	StyledGatsbyImage,
	StyledTechItem
} from "./styles/projectcard.styled";
import { AiOutlineLink } from "react-icons/ai";

function ProjectCard({
	title,
	excerpt,
	tech,
	link,
	image,
	index,
}: {
	title: string;
	excerpt: string;
	tech: Array<String>;
	link: string;
	image: string;
	index: number;
}) {
	const gatsbyImage = getImage(image);

	return (
		<StyledCardContainer cardColor={index % 2 === 1 && "change"}>
			<StyledTitle>
				{title + " "}
				<a href={link} target="_blank">
					<AiOutlineLink />
				</a>
			</StyledTitle>
			{/* <StyledTechList>{tech.map(item => item).join(", ")}</StyledTechList> */}
			<StyledTechList>
				{tech.map((item, index) => <StyledTechItem key={index}>{item}</StyledTechItem>)}
			</StyledTechList>
			<ImageWrapper>
				<StyledGatsbyImage image={gatsbyImage} alt={title}/>
			</ImageWrapper>
			{/* <StyledExcerpt>{excerpt}</StyledExcerpt> */}
		</StyledCardContainer>
	);
}

export default ProjectCard;
