import * as React from "react";
import Layout from "../components/layout";
import { StaticImage } from "gatsby-plugin-image";
import { graphql } from "gatsby";
import TechStack from "./components/techStack";

const AboutPage = ({ data } : {data : object}) => {
	return (
		<Layout pageTitle="about me">
			{data.file.childMdx.body}
			<TechStack />
			<StaticImage
				alt="Colin Lo"
				src="../images/headshot_edit.jpg"
			/>
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
export const Head = () => <title>about me</title>;

export default AboutPage;
