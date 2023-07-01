import * as React from "react";
import { ReactNode } from "react";
import { graphql } from "gatsby";
import { GatsbyImage, StaticImage, getImage } from "gatsby-plugin-image";
import {
	StyledGatsbyImageBG,
	StyledGatsbyImageFront,
	ImageWrapper,
	StyledTechItem,
	StyledTechList,
	DateWrapper,
	RepoDemoLink,
	LinkWrapper,
	Arrow,
	ContentWrapper,
} from "../../styles/projects/projectTemplate.styled";

import Layout from "../../components/layout/layout";
import { EnterAnimation } from "../../components/enterAnimation";

const ProjectPosts = ({
	data,
	children,
}: {
	data: object;
	children: ReactNode;
}) => {
	const pageData = data.mdx.frontmatter;
	const gatsbyImage = getImage(pageData.image);
	console.log(gatsbyImage);

	return (
		<Layout pageTitle={pageData.title}>
			<StyledTechList>
				{pageData.tech.map((item, index) => (
					<StyledTechItem key={index}>{item}</StyledTechItem>
				))}
			</StyledTechList>

			<ImageWrapper>
				{/* <StyledGatsbyImageFront
					image={gatsbyImage}
					alt={data.mdx.frontmatter.title}
				/> */}
				<StyledGatsbyImageBG
					fluid={pageData.image.childImageSharp.fluid}
					// fixed={pageData.image.childImageSharp.fixed}
					alt={pageData.title}
				/>
			</ImageWrapper>
			<EnterAnimation offsetY={100}>
				<ContentWrapper>
				<DateWrapper>{pageData.date}</DateWrapper>
				<LinkWrapper>
					{pageData.link ? (
						<RepoDemoLink href={pageData.link} target="_blank">
							Link to Demo<Arrow>→</Arrow>
							<br />
						</RepoDemoLink>
					) : null}

					{pageData.repolink ? (
						<RepoDemoLink href={pageData.repolink} target="_blank">
							Link to Repo<Arrow>→</Arrow>
						</RepoDemoLink>
					) : null}
				</LinkWrapper>
				{children}
				</ContentWrapper>
			</EnterAnimation>
		</Layout>
	);
};

export const query = graphql`
	query ($id: String) {
		mdx(id: { eq: $id }) {
			frontmatter {
				title
				tech
				date(formatString: "MMMM, YYYY")
				link
				repolink
				image {
					childImageSharp {
						# gatsbyImageData(aspectRatio: 1.5, quality: 100, width: 500)
						fluid(quality: 100, maxWidth: 400, fit: COVER) {
							...GatsbyImageSharpFluid
						}
					}
				}
			}
			body
		}
	}
`;

// export const Head = () => <title>Random</title>;

export default ProjectPosts;
