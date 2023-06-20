import * as React from "react";
import Layout from "../components/layout";
import { StaticImage } from "gatsby-plugin-image";
import { graphql } from "gatsby";
import TechStack from "./components/techStack";
import AboutText from "./components/aboutText";
import SoftwareStack from "./components/softwareStack";

const AboutPage = ({ data } : {data : object}) => {
	return (
		<Layout pageTitle="about me">
			{/* <StaticImage
				alt="Colin Lo"
				src="../images/about/headshot_edit.png"
				height={300}
			/>
			<StaticImage
				alt="Colin Lo"
				src="../images/about/cucs_headshot.png"
				height={300}
			/>
			<StaticImage
				alt="Colin Lo"
				src="../images/about/lsc-edboard-headshot.png"
				height={300}

			/> */}
			<AboutText />
			{/* {data.file.childMdx.body} */}
			<TechStack />
			<SoftwareStack />
		</Layout>
	);
};

export const query = graphql`
	query {
		file(name: { eq: "about-me-info" }) {
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
