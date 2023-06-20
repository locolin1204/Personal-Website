import React from "react";
import styled from "styled-components";
import { MottoTextContainer } from "./styles/about.styled";
const CreativeSpan = styled.span`
    font-size: 3em;
`

export default function AboutText() {
	return (
		<MottoTextContainer>
            <div>
			i love solving <b>problems</b>.
            <br />
            different <b>methods</b> and <b>strategies</b> could surprise our lives various ways.
            </div>
		</MottoTextContainer>
	);
}
