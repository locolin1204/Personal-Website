import * as React from "react";
import Layout from "../components/layout";
import { StaticImage } from "gatsby-plugin-image";
import styled from "styled-components";
import IndexMain from "./components/indexMain";
import { TypeAnimation } from "react-type-animation";

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
	padding-top: 10em;
	min-height: 90vh;
	/* border: red 1px solid; */

`;

const StyledMainText = styled.div`
	font-size: 6em;
	font-weight: 700;
	/* border: red solid 1px; */
`;

const StyledSubText = styled.div`
	font-size: 1.5em;
	/* border: red solid 1px; */
	color: ${({ theme }) => theme.color.grey500};
`;

const StyledSpanColin = styled.span`
	color: ${({ theme }) => theme.color.orange500};
`;

const StyledSpanCS = styled.span`
	color: ${({ theme }) => theme.color.yellow400};
	
	font-family: Source Code Pro;
	font-weight: 200;
	font-size: 0.9em;
	background-color:  ${({ theme }) => theme.color.yellow400};
	padding: 0.1em 0.5em;
	color: ${({ theme }) => theme.color.grey500};
	border-radius: 0.3em;
`;

const IndexPage = () => {
	return (
		<Layout pageTitle="">
			<StyledMain>
				<StyledTextContainer>
					<StyledMainText>
						hello,
						<br />i am <StyledSpanColin>colin</StyledSpanColin>.
						<br />
					</StyledMainText>
					<StyledSubText>
						a <StyledSpanCS>computer science</StyledSpanCS> year 3 student.
					</StyledSubText>
					<TypeAnimation
					sequence={[
						// Same String at the start will only be typed once, initially
						"i code",
						1000,
						"i do photography",
						1000,
						"i love cinematography",
						1000,
						"i play football",
						1000,
					]}
					speed={30}
					style={{ fontSize: "1.3em", paddingTop: "2em", textAlign: "left", fontFamily: "Source Code Pro", fontWeight: "300" }}
					repeat={Infinity}
				/>
				</StyledTextContainer>
				
			</StyledMain>
			
		</Layout>
	);
};

export default IndexPage;

// export const Head = () => <title>home</title>;
