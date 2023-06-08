import * as React from "react";
import Layout from "../components/layout";
import { StaticImage } from "gatsby-plugin-image";
import JourneyCard from "./components/journeyCard";
import { graphql } from "gatsby";

const JourneyPage = ({ data }) => {
	return (
		<Layout pageTitle="my journey">
			{data.allFile.nodes.map(node => {
				const item = node.childMdx;
				return (
					<JourneyCard
						title={item.frontmatter.title}
						date={item.frontmatter.date}
						slug={item.frontmatter.slug}
						post={item.frontmatter.post}

						key={item.id}
					/>
				);
			})}
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
					id
					frontmatter {
						post
						date
						slug
						title
						image
					}
				}
			}
		}
	}
`;

export const Head = () => <title>my journey</title>;

export default JourneyPage;
