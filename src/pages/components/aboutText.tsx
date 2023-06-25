import React from "react";
import styled from "styled-components";
import { BoldText, EnterAnimationMotto, MottoTextContainer,MottoWrapper } from "./styles/about.styled";

export default function AboutText() {
	return (
		<MottoTextContainer>
			<EnterAnimationMotto>
			<MottoWrapper>
				i love solving <BoldText>problems</BoldText>.
				<br />
				different <BoldText>methods</BoldText> and <BoldText>strategies</BoldText> could surprise our lives
				various ways.
			</MottoWrapper>
			</EnterAnimationMotto>
		</MottoTextContainer>
	);
}
