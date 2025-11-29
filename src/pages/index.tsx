import * as React from "react";
import Layout from "../components/layout/layout";
import { TypeAnimation } from "react-type-animation";
import {
	StyledMain,
	StyledTextContainer,
	StyledMainText,
	StyledSubText,
	StyledSpanColin,
	StyledSpanCS, StrikeThroughline,
} from "../styles/home/index.styled";
import { EnterAnimation } from "../components/enterAnimation";

const IndexPage = () => {
	const typingList = [
		"i code",
		1000,
		"i do photography",
		1000,
		"i love trying new stuff",
		1000,
		"i love cinematography",
		1000,
		"i play football",
		1000,
		"badminton is my thing",
		1000,
	];

	return (
		<Layout pageTitle="">
			<StyledMain>
				<StyledTextContainer>
					<StyledMainText>
						<EnterAnimation isDiv={false}>hello,</EnterAnimation>
						<EnterAnimation delay={0.5} isDiv={false}>
							<br />i am <StyledSpanColin>colin</StyledSpanColin>.
							<br />
						</EnterAnimation>
					</StyledMainText>
					<EnterAnimation isDiv={false} delay={1} offsetY={0}>
						<StrikeThroughline delay={1.5}>
							<StyledSubText>
								a <StyledSpanCS>computer science</StyledSpanCS> year 5 student.
							</StyledSubText>
						</StrikeThroughline>
					</EnterAnimation>
					<EnterAnimation isDiv={false} delay={1.5} offsetY={0}>
						<StyledSubText>
							a <StyledSpanCS>software engineer</StyledSpanCS>.
						</StyledSubText>
					</EnterAnimation>

					<EnterAnimation isDiv={false} delay={2} offsetY={0}>
						<TypeAnimation
							sequence={typingList}
							speed={30}
							style={{
								fontSize: "1.3em",
								paddingTop: "2em",
								textAlign: "left",
								fontFamily: "Source Code Pro",
								fontWeight: "300",
							}}
							repeat={Infinity}
						/>
					</EnterAnimation>
				</StyledTextContainer>
			</StyledMain>
		</Layout>
	);
};

export default IndexPage;

// export const Head = () => <title>home</title>;
