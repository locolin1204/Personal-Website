import React from "react";
import styled from "styled-components";
import { BoldText, MottoTextContainer,MottoWrapper } from "./styles/about.styled";
const CreativeSpan = styled.span`
	font-size: 3em;
`;

export default function AboutText() {
	return (
		<MottoTextContainer>
			<MottoWrapper>
				i love solving <BoldText>problems</BoldText>.
				<br />
				different <BoldText>methods</BoldText> and <BoldText>strategies</BoldText> could surprise our lives
				various ways.
			</MottoWrapper>
		</MottoTextContainer>
	);
}
