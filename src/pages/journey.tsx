import * as React from "react";
import Layout from "../components/layout";
import { StaticImage } from "gatsby-plugin-image";
import JourneyCard from "./components/journeyCard";
import { StyledJourneyContainer } from "./components/styles/journey.styled";

import { graphql } from "gatsby";

import heroImage from "../images/hero-images/JOR06589.jpg";

const JourneyPage = ({ data }) => {

	const heroImage = {
		gatsbyImage: data.imageData,
		position: "45%",
		height: "45vh"
	}

	return (
		<Layout pageTitle="journey" heroImage={heroImage}>
			<StyledJourneyContainer>
				{data.postData.nodes.map((node, index) => {
					const item = node.childMdx.frontmatter;
					return (
						<JourneyCard
							title={item.title}
							startdate={item.startdate}
							enddate={item.enddate}
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
		postData: allFile(
			filter: { relativePath: { glob: "journey/*.mdx" } }
			sort: { childrenMdx: { frontmatter: { startdate: DESC } } }
		) {
			nodes {
				childMdx {
					frontmatter {
						post
						startdate(formatString: "MMMM, YYYY")
						enddate(formatString: "MMMM, YYYY")
						slug
						title
						image {
							childImageSharp {
								gatsbyImageData( aspectRatio: 1.5, quality: 100, width: 500)
							}
						}
					}
				}
			}
		}
		imageData: file(relativePath: { glob: "*/journey.jpg" }) {
			childImageSharp {
				gatsbyImageData
			}
		}
	}
`;

// export const Head = () => <title>journey</title>;

export default JourneyPage;
