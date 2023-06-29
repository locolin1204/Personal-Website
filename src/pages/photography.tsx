import * as React from "react";
import Layout from "../components/layout/layout";
import {
	StyledGatsbyImage,
	StyledMasonry,
} from "../styles/photography/photography.styled";
import { graphql } from "gatsby";
import { getImage } from "gatsby-plugin-image";

function shuffleArray(arr) {
	for (let i = arr.length - 1; i > 0; i--) {
		let j = Math.floor(Math.random() * (i + 1));
		let temp = arr[i];
		arr[i] = arr[j];
		arr[j] = temp;
	}
}

const PhotographyPage = ({ data }) => {
	const heroImage = {
		gatsbyImage: data.heroImage,
		position: "65%",
		height: "50vh",
	};

	const breakpointColumnsObj = {
		default: 3,
		1500: 2,
		800: 1,
	};

	const shuffledImageList = data.imageList.nodes;

	shuffleArray(shuffledImageList);

	return (
		<Layout pageTitle="photography" heroImage={heroImage}>
			{/* <HeroImage src={heroImage} /> */}
			<StyledMasonry breakpointCols={breakpointColumnsObj}>
				{shuffledImageList.map(image => {
					return (
						<StyledGatsbyImage
							image={getImage(image.childImageSharp)}
							alt={"placeholder"}
						/>
					);
				})}
			</StyledMasonry>
		</Layout>
	);
};

export const query = graphql`
	query {
		heroImage: file(relativePath: { glob: "*/photography.jpg" }) {
			childImageSharp {
				gatsbyImageData
			}
		}
		imageList: allFile(
			filter: { relativePath: { glob: "photography/*.jpg" } }
		) {
			nodes {
				childImageSharp {
					gatsbyImageData
				}
				relativeDirectory
			}
			totalCount
		}
	}
`;

export default PhotographyPage;

// export const Head = () => <title>photography</title>;
