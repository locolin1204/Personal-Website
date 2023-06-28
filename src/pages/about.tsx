import * as React from "react";
import Layout from "../components/layout";
import { graphql } from "gatsby";
import TechStack from "../components/techStack";
import AboutText from "../components/aboutText";
import SoftwareStack from "../components/softwareStack";
import { StaticImage } from "gatsby-plugin-image";
import { ProfilePic } from "../styles/about.styled";
import AboutSelfIntro from "../components/aboutSelfIntro";

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

			{/* {data.mdxData.childMdx.body} */}
			{/* <ProfilePic>
				<StaticImage
					src="../images/about/formal-profilepic-transparent.png"
					alt="Colin Lo"
				/>
			</ProfilePic> */}
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
