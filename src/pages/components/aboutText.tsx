import React from "react";
import styled from "styled-components";
import {
	BoldText,
	// EnterAnimationMotto,
	MottoTextContainer,
	MottoWrapper,
} from "./styles/about.styled";
import { EnterAnimation } from "./enterAnimation";

export default function AboutText() {
	return (
		<MottoTextContainer>
			<EnterAnimation duration={1} offsetY={50} isDiv={true}>
				<MottoWrapper>
					i love solving <BoldText>problems</BoldText>.
					<br />
					different <BoldText>methods</BoldText> and{" "}
					<BoldText>strategies</BoldText> could surprise our lives various ways.
				</MottoWrapper>
			</EnterAnimation>
		</MottoTextContainer>
	);
}
