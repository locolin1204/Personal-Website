import * as React from "react";
import Layout from "../components/layout";
import IndexMain from "./components/indexMain";
import { TypeAnimation } from "react-type-animation";
import {
	StyledMain,
	StyledTextContainer,
	StyledMainText,
	StyledSubText,
	StyledSpanColin,
	StyledSpanCS,
	EnterAnimationText,
} from "./components/styles/index.styled";



const IndexPage = () => {

	const typingList = [
		// Same String at the start will only be typed once, initially
		"i code",
		1000,
		"i do photography",
		1000,
		"i hit the shuttlecock",
		1000,
		"i love cinematography",
		1000,
		"i play football",
		1000,
		"badminton is my thing",
		1000,
	]


	return (
		<Layout pageTitle="">
			<StyledMain>
				<StyledTextContainer>
					<StyledMainText>
						<EnterAnimationText delay="0">hello,</EnterAnimationText>
						<EnterAnimationText delay="0.5">
							<br />i am <StyledSpanColin>colin</StyledSpanColin>.
							<br />
						</EnterAnimationText>
					</StyledMainText>
					<EnterAnimationText delay="1">
						<StyledSubText>
							a <StyledSpanCS>computer science</StyledSpanCS> year 3 student.
						</StyledSubText>
					</EnterAnimationText>

					<EnterAnimationText delay="1.5">
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
					</EnterAnimationText>
				</StyledTextContainer>
			</StyledMain>
		</Layout>
	);
};

export default IndexPage;

// export const Head = () => <title>home</title>;
