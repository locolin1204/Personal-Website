import * as React from "react";
import Layout from "../components/layout";
import { StaticImage } from "gatsby-plugin-image";
import JourneyCard from "./components/journeyCard";
import { StyledJourneyContainer, EnterAnimationWrapper } from "./components/styles/journey.styled";
import { graphql } from "gatsby";

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
						<EnterAnimationWrapper index={index}>
						<JourneyCard
							title={item.title}
							startdate={item.startdate}
							enddate={item.enddate}
							slug={item.slug}
							post={item.post}
							image={item.image}
							body={node.childMdx.body}
							key={node.childMdx.id}
							index={index}
						/>
						</EnterAnimationWrapper>
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
					body
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
