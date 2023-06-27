import * as React from "react";
import Layout from "../../components/layout";
import { StaticImage } from "gatsby-plugin-image";
import { graphql, Link } from "gatsby";
import styled from "styled-components";
import ProjectCard from "../components/projectCard";
import {
	// EnterAnimationWrapperCard,
	StyledProjectLayout,
} from "../components/styles/project.styled";
import { motion } from "framer-motion";
import { EnterAnimation } from "../components/enterAnimation";

const Projects = ({ data }) => {
	return (
		<Layout pageTitle="projects">
			<StyledProjectLayout>
				{data.allFile.nodes.map((node, index) => {
					const item = node.childMdx;
					return (
						// 	<motion.div
						// 	initial="hidden"
						// 	whileInView="visible"
						// 	viewport={{ once: true }}
						// 	transition={{ ease: "easeInOut", duration: 1, delay: index*0.2}}
						// 	variants={{
						// 	  visible: { opacity: 1, y: 0 },
						// 	  hidden: { opacity: 0, y: 100}
						// 	}}
						//   >
						<EnterAnimation offsetY={100} delay={0.2} index={index}>
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
									key={item.id}
									image={item.frontmatter.image}
								/>
							</Link>
						</EnterAnimation>
						// {/* </motion.div> */}
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
