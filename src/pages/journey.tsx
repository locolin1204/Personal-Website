import * as React from "react";
import Layout from "../components/layout";
import { StaticImage } from "gatsby-plugin-image";
import JourneyCard from "../components/journeyCard";
import { StyledJourneyContainer } from "../styles/journey.styled";
import { graphql } from "gatsby";
import { EnterAnimation } from "../components/enterAnimation";

const JourneyPage = ({ data }) => {
	const heroImage = {
		gatsbyImage: data.heroImage,
		position: "45%",
		height: "45vh",
	};

	return (
		<Layout pageTitle="journey" heroImage={heroImage}>
			<StyledJourneyContainer>
				{data.postData.nodes.map((node, index) => {
					// const item = node.childMdx.frontmatter;
					const item = node.childMarkdownRemark.frontmatter;
					return (
						<EnterAnimation
							index={index}
							delay={0.05}
							duration={1}
							offsetY={100}
						>
							<JourneyCard
								title={item.title}
								startdate={item.startdate}
								enddate={item.enddate}
								slug={item.slug}
								post={item.post}
								image={item.image}
								body={node.childMarkdownRemark.html}
								key={node.childMarkdownRemark.id}
								index={index}
							/>
						</EnterAnimation>
					);
				})}
			</StyledJourneyContainer>
		</Layout>
	);
};

export const query = graphql`
	# query {
	# 	postData: allFile(
	# 		filter: { relativePath: { glob: "journey/*.mdx" } }
	# 		sort: { childrenMdx: { frontmatter: { startdate: DESC } } }
	# 	) {
	# 		nodes {
	# 			childMdx {
	# 				body
	# 				frontmatter {
	# 					post
	# 					startdate(formatString: "MMMM, YYYY")
	# 					enddate(formatString: "MMMM, YYYY")
	# 					slug
	# 					title
	# 					image {
	# 						childImageSharp {
	# 							gatsbyImageData(aspectRatio: 1.5, quality: 100, width: 500)
	# 						}
	# 					}
	# 				}
	# 			}
	# 		}
	# 	}
	# 	heroImage: file(relativePath: { glob: "*/journey.jpg" }) {
	# 		childImageSharp {
	# 			gatsbyImageData
	# 		}
	# 	}
	# }
	query {
		postData: allFile(
			filter: { relativePath: { glob: "journey/*.md" } }
			sort: { childrenMarkdownRemark: { frontmatter: { startdate: DESC } } }
		) {
			nodes {
				childMarkdownRemark {
					html
					id
					frontmatter {
						post
						startdate(formatString: "MMMM, YYYY")
						enddate(formatString: "MMMM, YYYY")
						slug
						title
						image {
							childImageSharp {
								gatsbyImageData(aspectRatio: 1.5, quality: 100, width: 500)
							}
						}
					}
				}
			}
		}
		heroImage: file(relativePath: { glob: "*/journey.jpg" }) {
			childImageSharp {
				gatsbyImageData
			}
		}
	}
`;

// export const Head = () => <title>journey</title>;

export default JourneyPage;
