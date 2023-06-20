import * as React from "react";
import Layout from "../components/layout";
import { StaticImage } from "gatsby-plugin-image";
import JourneyCard from "./components/journeyCard";
import { StyledJourneyContainer } from "./components/styles/journey.styled";

import { graphql } from "gatsby";

const JourneyPage = ({ data }) => {
	return (
		<Layout pageTitle="journey">
			<StyledJourneyContainer>
				{data.allFile.nodes.map((node, index) => {
					const item = node.childMdx.frontmatter;
					return (
						<JourneyCard
							title={item.title}
							date={item.date}
							slug={item.slug}
							post={item.post}
							image={item.image}
							key={node.childMdx.id}
							index={index}
						/>
					);
				})}
			</StyledJourneyContainer>
		</Layout>
	);
};

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

// export const Head = () => <title>journey</title>;

export default JourneyPage;
