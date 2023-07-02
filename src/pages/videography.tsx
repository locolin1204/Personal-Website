import * as React from "react";
import Layout from "../components/layout/layout";
import { graphql } from "gatsby";

const VideographyPage = ({ data }) => {
	
	const heroImage = {
		gatsbyImage: data.heroImage,
		position: "40%",
		height: "50vh",
	};

	return (
		<Layout pageTitle="videography" heroImage={heroImage}>
			
		</Layout>
	);
};

export const query = graphql`
	query {
		heroImage: file(relativePath: { glob: "*/videography.jpg" }) {
			childImageSharp {
				gatsbyImageData
			}
		}
		imageList: allFile(
			filter: { relativePath: { glob: "videography/*.jpg" } }
		) {
			nodes {
				childImageSharp {
					gatsbyImageData
				}
				id
			}
		}
	}
`;

export default VideographyPage;

// export const Head = () => <title>photography</title>;
