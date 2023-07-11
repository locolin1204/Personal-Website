import React from "react";
import { UnderlineText } from "../../styles/global";
import {
	MottoTextContainer,
	MottoWrapper,
} from "../../styles/about/aboutText.styled";
import { EnterAnimation } from "../enterAnimation";

const MottoUnderLine = ({ children } : {children: React.ReactNode}) => {
	return (
		<UnderlineText weight={400} height={1.5} duration={0.25}>
			{children}
		</UnderlineText>
	);
};

export default function AboutText() {
	return (
		<MottoTextContainer>
			<EnterAnimation duration={1} offsetY={50} isDiv={true}>
				<MottoWrapper>
					i love solving{" "}
					<MottoUnderLine>
						problems
					</MottoUnderLine>
					.
					<br />
					different <MottoUnderLine>methods</MottoUnderLine> and{" "}
					<MottoUnderLine>
						strategies
					</MottoUnderLine>{" "}
					could surprise our lives various ways.
				</MottoWrapper>
			</EnterAnimation>
		</MottoTextContainer>
	);
}
