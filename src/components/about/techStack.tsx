import React from "react";
import {
	StyledTechContainer,
	TechContainerWrapper,
} from "../../styles/about/about.styled";
import TechFrame from "./techFrame";
import { graphql } from "gatsby";
import techStackJSON from "../../resources/tech-stack.json";
import { Col } from "react-bootstrap";

export default function TechStack() {
	function sortLength(a: string, b: string) {
		return b.length - a.length;
	}

	return (
		<TechContainerWrapper>
			<Col className="mx-auto" md={8}>
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
					<TechFrame
						list={techStackJSON.db.sort(sortLength)}
						title={"databases"}
						slug={"db"}
					/>
				</StyledTechContainer>
			</Col>
		</TechContainerWrapper>
	);
}
