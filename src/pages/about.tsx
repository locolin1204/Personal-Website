import * as React from "react";
import Layout from "../components/layout/layout";
import { graphql } from "gatsby";
import TechStack from "../components/about/techStack";
import AboutText from "../components/about/aboutText";
import SoftwareStack from "../components/about/softwareStack";
import AboutSelfIntro from "../components/about/aboutSelfIntro";

const AboutPage = ({ data }: { data: object }) => {
	const heroImage = {
		gatsbyImage: data.imageData,
		position: "40%",
		height: "50vh",
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
		mdxData: file(name: { eq: "about-me-info" }) {
			childMdx {
				body
				excerpt
				id
			}
		}
		imageData: file(relativePath: { glob: "*/about.jpg" }) {
			childImageSharp {
				gatsbyImageData
			}
		}
	}
`;
// export const Head = () => <title>about me</title>;

export default AboutPage;
