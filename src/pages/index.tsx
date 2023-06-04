import * as React from "react";
import Layout from "../components/layout";
import { StaticImage } from "gatsby-plugin-image";
import styled from "styled-components";
import IndexMain from "./components/indexMain";

const StyledMain = styled.div`
	min-height: 50vh;
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
	/* border: red solid 1px; */
`;

const StyledTextContainer = styled.div`
	display: flex;
	flex-direction: column;
	justify-content: start;
`

const StyledMainText = styled.div`
	font-size: 6em;
	font-weight: 700;
	/* border: red solid 1px; */
`;

const StyledSubText = styled.div`
	font-size: 1.5em;
	/* border: red solid 1px; */
	color: ${({ theme }) => theme.color.darkgrey};
`;

const StyledSpanColin = styled.span`
	color: ${({ theme }) => theme.color.orange};
`

const StyledSpanCS = styled.span`
	color: ${({ theme }) => theme.color.yellow};
`

const IndexPage = () => {
	return (
		<Layout pageTitle="">
			<StyledMain>
				<StyledTextContainer>
				<StyledMainText>
					hello,
					<br />
					i am <StyledSpanColin>colin</StyledSpanColin>.
					<br />
				</StyledMainText>
				<StyledSubText>a <StyledSpanCS>computer science</StyledSpanCS> year 3 student.</StyledSubText>
				</StyledTextContainer>
			</StyledMain>
		</Layout>
	);
};

export default IndexPage;

export const Head = () => <title>home</title>;
