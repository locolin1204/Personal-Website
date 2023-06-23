import * as React from "react";
import Layout from "../../components/layout";
import { StaticImage } from "gatsby-plugin-image";
import { graphql, Link } from "gatsby";
import styled from "styled-components";
import ProjectCard from "../components/projectCard";
import { StyledProjectLayout } from "../components/styles/project.styled";

const Projects = ({ data }) => {
	return (
		<Layout pageTitle="projects">
			<StyledProjectLayout>
				{data.allFile.nodes.map((node, index) => {
					const item = node.childMdx;
					return (
						<Link to={`/projects/${item.frontmatter.slug}`} style={{textDecoration: "none"}}>
							<ProjectCard
								index={index}
								title={item.frontmatter.title}
								excerpt={item.excerpt}
								tech={item.frontmatter.tech}
								link={item.frontmatter.link}
								key={item.id}
								image={item.frontmatter.image}
							/>
						</Link>
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
