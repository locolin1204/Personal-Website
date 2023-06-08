import React from "react";
import { StaticImage } from "gatsby-plugin-image";
import {
	StyledCardContainer,
	StyledTitle,
	StyledExcerpt,
	StyledTechList,
} from "./styles/projectcard.styled";

function ProjectCard({
	title,
	excerpt,
	tech,
}: {
	title: string;
	excerpt: string;
	tech: Array<String>;
}) {
	return (
		<StyledCardContainer>
			<StyledTitle>{title}</StyledTitle>
			<StyledTechList>{tech}</StyledTechList>
			<StaticImage
				alt="Colin Lo"
				src="../../images/todo-list-cropped.png"
				imgStyle={{
					width: "80%"
				}}
			/>
			<StyledExcerpt>{excerpt}</StyledExcerpt>
		</StyledCardContainer>
	);
}

export default ProjectCard;
