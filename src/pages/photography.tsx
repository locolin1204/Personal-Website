import * as React from "react";
import Layout from "../components/layout";
import { useState, useEffect } from "react";
import "lazysizes";
import "lazysizes/plugins/parent-fit/ls.parent-fit";
import { StyledImgGrid, StyledImg } from "./components/styles/photography.styled";

interface ImgObject {
	width: number, img: string
  }

function shuffleArray(arr: ImgObject[]) {
	for (let i = arr.length - 1; i > 0; i--) {
		let j = Math.floor(Math.random() * (i + 1));
		let temp = arr[i];
		arr[i] = arr[j];
		arr[j] = temp;
	}
}

function getRandomSize(min: number, max: number,) {
	return Math.round(Math.random() * (max - min) + min);
}

const PhotographyPage = () => {
	const [images, setImages] = useState<ImgObject[]>([]);;

	useEffect(() => {
		const newImages: ImgObject[] = [];
		for (let i = 1; i < 10; i++) {
			const width = getRandomSize(150, 400);
			const img = require(`../images/photography/img-${i}.jpg`).default;
			console.log(typeof(img))
			newImages.push({
				width,
				img,
			});
		}
		// shuffleArray(newImages);
		setImages(newImages);
	}, []);

	return (
		<Layout pageTitle="photography">
			<StyledImgGrid>
				{images.map(({ width, img }, index) => (
					<StyledImg
						className="lazyload"
						key={index}
						src={img}
						width={width}
					/>
				))}
			</StyledImgGrid>
		</Layout>
	);
};

export default PhotographyPage;

// export const Head = () => <title>photography</title>;
