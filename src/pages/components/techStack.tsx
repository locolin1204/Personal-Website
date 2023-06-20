import React from "react";
import { StyledTechContainer } from "./styles/about.styled";
import TechFrame from "./techFrame";
import { graphql } from "gatsby";

export default function TechStack() {
	const listOfLang = [
		"C",
		"Java",
		"HTML",
		"CSS",
		"JavaScript",
		"Swift",
		"Kotlin",
		"Python",
		"GraphQL",
		"SQL",
	];

	const listOfLib = [
		"React.js",
		"Gatsby.js",
		"SwitftUI",
		"Kotlin Multiplatform Mobile",
		"Apollo GraphQL",
		"PyTorch",
	];

	const listOfDb=[
		"Oracle DB",
		"MySQL"
	];

	return (
		<StyledTechContainer>
			<TechFrame list={listOfLang} title={"languages"}/>
			<TechFrame list={listOfLib} title={"framework and libraries"}/>
			<TechFrame list={listOfDb} title={"databases"}/>
		</StyledTechContainer>
	);
}

export const query = graphql`
	query {
		allFile(
			filter: { relativePath: { glob: "journey/*.mdx" } }
			sort: { childrenMdx: { frontmatter: { date: DESC } } }
		) {
			nodes {
				childMdx {
					frontmatter {
						post
						date(formatString: "MMMM, YYYY")
						slug
						title
						image {
							childImageSharp {
								gatsbyImageData(width: 500, aspectRatio: 1.5)
							}
						}
					}
				}
			}
		}
	}
`;