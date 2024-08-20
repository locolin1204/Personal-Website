import * as React from "react";
import { useState } from "react";
import Layout from "../components/layout/layout";
import {
	StyledGatsbyImage,
	StyledMasonry,
} from "../styles/photography/photography.styled";
import { graphql } from "gatsby";
import { getImage } from "gatsby-plugin-image";
import InfiniteScroll from "react-infinite-scroll-component";

function shuffleArray(arr: any[]) {
	let newArr = structuredClone(arr);
	for (let i = arr.length - 1; i > 0; i--) {
		let j = Math.floor(Math.random() * (i + 1));
		let temp = newArr[i];
		newArr[i] = newArr[j];
		newArr[j] = temp;
	}
	return newArr;
}

const PhotographyPage = ({ data }: { data: any }) => {
	const initialImages = shuffleArray(data.imageList.nodes.slice(0, 15));
	const [images, setImages] = useState(initialImages);
	const [hasMore, setHasMore] = useState(true);
	const [page, setPage] = useState(2);

	const heroImage = {
		gatsbyImage: data.heroImage,
		position: "65%",
		height: "50vh",
		imgFluid: data.heroImage.childImageSharp.fluid
	};

	const breakpointColumnsObj = {
		default: 3,
		1500: 2,
		800: 1,
	};

	function fetchMore() {
		let newImages = data.imageList.nodes.slice((page - 1) * 15, page * 15);
		if (newImages.length < 15) {
			setHasMore(false);
		} else {
			setHasMore(true);
			let curPage = page;
			setPage(++curPage);
			console.log("curPage", curPage);
		}
		newImages = shuffleArray(newImages);
		setImages([...images, ...newImages]);
	}

	const shuffledImageList = data.imageList.nodes;

	shuffleArray(shuffledImageList);

	return (
		<Layout pageTitle="photography" heroImage={heroImage}>
			<InfiniteScroll
				dataLength={images.length}
				hasMore={hasMore}
				next={fetchMore}
				loader={<div> </div>}
			>
				<StyledMasonry breakpointCols={breakpointColumnsObj}>
					{images.map(image => {
						return (
							<StyledGatsbyImage
								image={getImage(image.childImageSharp)}
								alt={"placeholder"}
								key={image.id}
							/>
						);
					})}
				</StyledMasonry>
			</InfiniteScroll>
		</Layout>
	);
};

export const query = graphql`
	query {
		heroImage: file(relativePath: { glob: "*/photography.jpg" }) {
			childImageSharp {
				fluid(quality: 100, maxWidth: 2500, fit: COVER, webpQuality: 80) {
					...GatsbyImageSharpFluid_withWebp
				}
			}
		}
		imageList: allFile(
			filter: { relativePath: { glob: "photography/*.jpg" } }
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

export default PhotographyPage;

// export const Head = () => <title>photography</title>;
