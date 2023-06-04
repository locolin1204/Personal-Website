import * as React from "react";
import Layout from "../components/layout";
import { StaticImage } from "gatsby-plugin-image";

const JourneyPage = () => {
	return (
		<Layout pageTitle="my journey">
			<p>my journey</p>
		</Layout>
	);
};

export const Head = () => <title>my journey</title>;

export default JourneyPage;
// import * as React from "react";
// import Layout from "../components/layout"
// import { StaticImage } from "gatsby-plugin-image";


// const PhotographyPage = () => {
// 	return (
// 		<Layout pageTitle="photography">
// 			<p>This is my photos</p>
// 		</Layout>
// 	);
// };

// export default PhotographyPage;

// export const Head = () => <title>photography</title>;
