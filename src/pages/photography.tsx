import * as React from "react";
import Layout from "../components/layout/layout";
import { useState, useEffect } from "react";
import "lazysizes";
import "lazysizes/plugins/parent-fit/ls.parent-fit";
import {
	StyledImgGrid,
	StyledImg,
	TestingDiv,
	TestingImg,
} from "../styles/photography/photography.styled";
import { graphql } from "gatsby";

interface ImgObject {
	width: number;
	img: string;
	id: string;
}

function shuffleArray(arr: ImgObject[]) {
	for (let i = arr.length - 1; i > 0; i--) {
		let j = Math.floor(Math.random() * (i + 1));
		let temp = arr[i];
		arr[i] = arr[j];
		arr[j] = temp;
	}
}

function getRandomSize(min: number, max: number) {
	return Math.round(Math.random() * (max - min) + min);
}

const PhotographyPage = ({ data }) => {
	const [images, setImages] = useState<ImgObject[]>([]);

	const heroImage = {
		gatsbyImage: data.imageData,
		position: "65%",
		height: "50vh",
	};

	const fetchData = async () => {
		const response = await fetch(
			"https://script.google.com/macros/s/AKfycbwDl2rm81an1X2PdaO0QRdrizW4JAT1XkwGJADhr-Olq80oDJbxvN1fHAzpBU5xm1dl/exec"
		);
		if (!response.ok) {
			throw new Error("Data coud not be fetched!");
		} else {
			return response.json();
		}
	};

	useEffect(() => {
		const newImages: ImgObject[] = [];
		fetchData()
			.then(res => {
				const imageJSON = res;
				// imageJSON.data.length
				for (let i = 0; i < 20; i++) {
					const width = getRandomSize(150, 400);
					const id = imageJSON.data[i].img_id;
					const img = `https://drive.google.com/uc?export=view&id=${id}`;
					newImages.push({
						width,
						img,
						id,
					});
				}
				console.log(newImages);
				shuffleArray(newImages);
				setImages(newImages);
			})
			.catch(e => {
				console.log(e.message);
			});
	}, []);
	// useEffect(() => {
	// 	const newImages: ImgObject[] = [];
	// 	for (let i = 1; i < 10; i++) {
	// 		const width = getRandomSize(150, 400);
	// 		const img = require(`../images/photography/img-${i}.jpg`).default;
	// 		console.log(typeof(img))
	// 		newImages.push({
	// 			width,
	// 			img,
	// 		});
	// 	}
	// 	// shuffleArray(newImages);
	// 	setImages(newImages);
	// }, []);
	// const text = `https://drive.google.com/uc?export=view&id=${}`;

	return (
		<Layout pageTitle="photography" heroImage={heroImage}>
			{/* <HeroImage src={heroImage} /> */}
			{/* <StyledImgGrid>
				{images.map(({ width, img, id }, index) => (
					<div> 
					<StyledImg className="lazyload" key={id} src={img} width={width} />
					<p>{index}</p>
					</div>
				))}
			</StyledImgGrid> */}
			<div>
				{images.map(({ width, img, id }, index) => (
					<TestingDiv>
						<TestingImg src={img} key={id} width={width} />
					</TestingDiv>
				))}
			</div>
			{/* {images.map(({ width, img, id }) => (
					<StyledImg className="lazyload" key={id} src={img} width={width} />
				))} */}
		</Layout>
	);
};

export const query = graphql`
	query {
		imageData: file(relativePath: { glob: "*/photography.jpg" }) {
			childImageSharp {
				gatsbyImageData
			}
		}
	}
`;

export default PhotographyPage;

// export const Head = () => <title>photography</title>;
