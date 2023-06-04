import * as React from "react";
import Layout from "../components/layout"
import { StaticImage } from "gatsby-plugin-image";


const PhotographyPage = () => {
	return (
		<Layout pageTitle="photography">
			<p>This is my photos</p>
		</Layout>
	);
};

export default PhotographyPage;

export const Head = () => <title>photography</title>;
