import React from "react";
import { StyledTechContainer } from "./styles/about.styled";
import TechFrame from "./techFrame";
import { graphql } from "gatsby";
import techStackJSON from "../../resources/tech-stack.json";

export default function TechStack() {
	function sortLength(a: string, b: string) {
		return b.length - a.length;
	}

	return (
		<StyledTechContainer>
			<TechFrame
				list={techStackJSON.lang.sort(sortLength)}
				title={"languages"}
				slug={"lang"}
			/>
			<TechFrame
				list={techStackJSON.lib.sort(sortLength)}
				title={"frameworks and libraries"}
				slug={"lib"}
			/>
			<TechFrame list={techStackJSON.db.sort(sortLength)} title={"databases"} slug={"db"}/>
		</StyledTechContainer>
	);
}
