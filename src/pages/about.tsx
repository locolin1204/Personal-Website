import * as React from "react";
import Layout from "../components/layout/layout";
import { graphql, HeadFC } from "gatsby";
import TechStack from "../components/about/techStack";
import AboutText from "../components/about/aboutText";
import SoftwareStack from "../components/about/softwareStack";
import AboutSelfIntro from "../components/about/aboutSelfIntro";
import PageHead from "../components/layout/pageHead";

const AboutPage = ({ data }: { data: any }) => {
	const heroImage = {
		position: "40%",
		height: "50vh",
		imgFluid: data.heroImage.childImageSharp.fluid
	};

	return (
		<Layout pageTitle="about me" heroImage={heroImage}>
			<AboutText />
			<AboutSelfIntro bodyText={data} />
			<TechStack />
			<SoftwareStack />
		</Layout>
	);
};

export const query = graphql`
	query {
		heroImage: file(relativePath: { glob: "*/about.jpg" }) {
			childImageSharp {
				fluid(quality: 80, maxWidth: 2500, fit: COVER, webpQuality: 80) {
					...GatsbyImageSharpFluid_withWebp
				}
			}
		}
		mdxData: file(name: { eq: "about-me-info" }) {
			childMdx {
				body
				excerpt
				id
			}
		}
	}
`;
// export const Head = () => <title>about me</title>;

export default AboutPage;

export const Head: HeadFC = () => (
	<PageHead
		title="about"
		description="a little bit about me."
		pathname="/about"
	/>
);

