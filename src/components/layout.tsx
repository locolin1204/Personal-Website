import * as React from "react";
import { ReactNode } from "react";
import { useStaticQuery, graphql } from "gatsby";
import "bootstrap/dist/css/bootstrap.min.css";
import NavBar from "./navbar";
import Footer from "./footer";
import GlobalStyles from "./styles/global";
import { ThemeProvider } from "styled-components";
import { StyledContainer, StyledPageHeader, StyledCol, HeroImage } from "./styles/layout.styled";
import themeColor from "../resources/color.json";
import { ImageDataLike, getImage } from "gatsby-plugin-image";


const theme = {
	color: {
		darkblue: "#2C385A",
		blue: "#4C5DA0",
		lightblue: "#C6E1F0",
		orange: "#FF8965",
		yellow: "#F6E297",
		darkgrey: "#5B5B5B",
		lightgrey: "#bababa",
		offwhite: "#FAF3EA",
		sand: "#a3917c",
		white: "#ffffff"
	},
};

const Layout = ({
	heroImage,
	pageTitle,
	children,
}: {
	heroImage?: {
		gatsbyImage: ImageDataLike;
		position: string;
		height: string
	}
	pageTitle: string;
	children: ReactNode;
}) => {
	const data = useStaticQuery(graphql`
		query {
			site {
				siteMetadata {
					title
				}
			}
		}
	`);

	return (
		<ThemeProvider theme={themeColor.light}>
			<title>colin lo</title>
			<GlobalStyles />
			<StyledContainer fluid >
				<NavBar />
					<StyledCol className="mx-auto" md={8}>
						{/* <header>{data.site.siteMetadata.title}</header> */}
						<main
						//  style={{"min-height": "100vh"}}
						 >
							<StyledPageHeader>{pageTitle}</StyledPageHeader>
							{heroImage ? <HeroImage image={getImage(heroImage.gatsbyImage)} alt="Hero Image" position={heroImage.position} height={heroImage.height}/> : null }
							{children}
						</main>
					</StyledCol>
				<Footer />
			</StyledContainer>
		</ThemeProvider>
	);
};


export default Layout;
