import * as React from "react";
import Layout from "../../components/layout";
import { StaticImage } from "gatsby-plugin-image";
import { graphql, Link } from "gatsby";
import styled from "styled-components";
import ProjectCard from "../components/projectCard";

const StyledLayout = styled.div`
	/* border: red 1px solid; */
	display: flex;
	flex-direction: column;
	row-gap: 1em;
`;

const Projects = ({ data }) => {
	return (
		<Layout pageTitle="projects">
			<StyledLayout>
				{data.allFile.nodes.map(node => {
					const item = node.childMdx;
					return (
						<ProjectCard
							title={item.frontmatter.title}
							excerpt={item.excerpt}
							tech={item.frontmatter.tech}
							key={item.id}
						/>
					);
				})}
			</StyledLayout>
		</Layout>
	);
};

export const query = graphql`
	query {
		allFile(
			filter: { relativePath: { glob: "projects/*" } }
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
					}
				}
				relativePath
			}
		}
	}
`;

export const Head = () => <title>projects</title>;

export default Projects;

{
	/* <Link to={`/projects/${node.childMdx.frontmatter.slug}`}>
						{node.childMdx.frontmatter.title}
					</Link> */
}
