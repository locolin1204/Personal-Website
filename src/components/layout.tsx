import * as React from "react";
import { ReactNode } from "react";
import { useStaticQuery, graphql } from "gatsby";
import "bootstrap/dist/css/bootstrap.min.css";
import { Container, Row, Col } from "react-bootstrap";
import NavBar from "./navbar";
import Footer from "./footer";
import GlobalStyles from "./styles/global";
import styled from "styled-components";
import { ThemeProvider } from "styled-components";
import { StyledContainer, StyledPageHeader, StyledCol } from "./styles/layout.styled";

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
	pageTitle,
	children,
}: {
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
		<ThemeProvider theme={theme}>
			<GlobalStyles />
			<StyledContainer fluid >
				<NavBar />
					<StyledCol className="mx-auto" md={8}>
						{/* <header>{data.site.siteMetadata.title}</header> */}
						<main>
							<StyledPageHeader>{pageTitle}</StyledPageHeader>
							{children}
						</main>
					</StyledCol>
				<Footer />
			</StyledContainer>
		</ThemeProvider>
	);
};

export default Layout;
