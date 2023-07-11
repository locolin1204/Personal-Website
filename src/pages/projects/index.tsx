import * as React from "react";
import Layout from "../../components/layout/layout";
import { graphql, Link } from "gatsby";
import ProjectCard from "../../components/projects/projectCard";
import { StyledProjectLayout } from "../../styles/projects/project.styled";
import { EnterAnimation } from "../../components/enterAnimation";

const Projects = ({ data }: { data: any }) => {
	return (
		<Layout pageTitle="projects">
			<StyledProjectLayout>
				{data.allFile.nodes.map((node, index) => {
					const item = node.childMdx;
					return (
						<EnterAnimation
							key={item.id}
							offsetY={100}
							delay={0.2}
							index={index}
						>
							<Link
								to={`/projects/${item.frontmatter.slug}`}
								style={{ textDecoration: "none" }}
							>
								<ProjectCard
									index={index}
									title={item.frontmatter.title}
									excerpt={item.excerpt}
									tech={item.frontmatter.tech}
									link={item.frontmatter.link}
									image={item.frontmatter.image}
								/>
							</Link>
						</EnterAnimation>
					);
				})}
			</StyledProjectLayout>
		</Layout>
	);
};

export const query = graphql`
	query {
		allFile(
			filter: { relativePath: { glob: "projects/*.mdx" } }
			sort: { childMdx: { frontmatter: { date: DESC } } }
		) {
			nodes {
				childMdx {
					excerpt
					id
					body
					frontmatter {
						title
						slug
						tech
						link
						image {
							childImageSharp {
								gatsbyImageData
							}
						}
					}
				}
				relativePath
			}
		}
	}
`;

// export const Head = () => <title>projects</title>;

export default Projects;
