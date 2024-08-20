import * as React from "react";
import { ReactNode } from "react";
import { graphql } from "gatsby";
import { getImage } from "gatsby-plugin-image";
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
	OverflowDiv, BodyWrapper,
} from "../../styles/projects/projectTemplate.styled";

import Layout from "../../components/layout/layout";
import { EnterAnimation } from "../../components/enterAnimation";
import { MDXProvider } from "@mdx-js/react";

const ProjectPosts = ({
	data,
	children,
}: {
	data: any;
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
					fluid={pageData.image.childImageSharp.fluid}
					alt={pageData.title}
				/> */}
				<StyledGatsbyImageBG
					fluid={pageData.image.childImageSharp.fluid}
					// fixed={pageData.image.childImageSharp.fixed}
					alt={pageData.title}
				/>
			</ImageWrapper>
			<OverflowDiv>
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
						<BodyWrapper>
							<div style={{
								'flex': 2
							}}>
								<MDXProvider
									components={{
										code: props => (
											<span
												{...props}
												style={{
													color: "#a7947f",
													fontFamily: "Source Code Pro",
													backgroundColor: "#ffffff",
													fontWeight: "400",
													paddingLeft: "0.3em",
													paddingRight: "0.3em",
													borderRadius: "0.3em"
												}}
											/>
										),
									}}
								>
									{children}
								</MDXProvider>
							</div>
							<StyledGatsbyImageFront
								fluid={pageData.image.childImageSharp.fluid}
								alt={pageData.title}
								style={{
									'flex': 1
								}}
							/>
						</BodyWrapper>
					</ContentWrapper>
				</EnterAnimation>
			</OverflowDiv>
		</Layout>
	);
};

export const query = graphql`
	query ($id: String) {
		mdx(id: { eq: $id }) {
			frontmatter {
				title
				tech
				date(formatString: "MMMM YYYY")
				link
				repolink
				image {
					childImageSharp {
						fluid(quality: 100, maxWidth: 1000, fit: COVER) {
							...GatsbyImageSharpFluid_withWebp
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
