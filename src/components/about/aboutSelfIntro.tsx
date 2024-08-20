import { StaticImage } from "gatsby-plugin-image";
import React from "react";
import {
	AboutBodyText,
	ProfilePic,
	StyledAboutSelfIntroContainer,
} from "../../styles/about/aboutSelfIntro.styled";
import { EnterAnimation } from "../enterAnimation";
import { UnderlineText } from "../../styles/global";

export default function AboutSelfIntro({ bodyText }) {
	return (
		<StyledAboutSelfIntroContainer>
			<EnterAnimation>
				<ProfilePic>
					<StaticImage
						src={"../../images/about/formal-profilepic.jpg"}
						alt={"Colin Lo"}
						style={{ borderRadius: "1em", width: "12em", height: "12em" }}
						// imgStyle={{width: "100%", height: "100%"}}
						imgStyle={{ borderRadius: "1em"}}
						placeholder="blurred"
						layout="constrained"
					/>
				</ProfilePic>
			</EnterAnimation>
			<AboutBodyText>
				<EnterAnimation>
					I am currently a senior <UnderlineText weight={"500"} height={"1"} duration={"0.5"}>computer science</UnderlineText> major
					at the <UnderlineText weight={"500"} height={"1"} duration={"0.5"}> Chinese University of Hong Kong </UnderlineText>,
					I also studied aboard at the <UnderlineText weight={"500"} height={"1"} duration={"0.5"}> University of Notre Dame </UnderlineText>.
					<br />
					<br />
					<UnderlineText weight={"500"} height={"1"} duration={"0.5"}>Integrating</UnderlineText> my daily life with programming is my motive.
					I believe the existence of programming is to increase the <UnderlineText weight={"500"} height={"1"} duration={"0.5"}>efficiency</UnderlineText> of
					our work.
					<br />
					<br />
					Creating different programs to make my life much <UnderlineText weight={"500"} height={"1"} duration={"0.5"}>easier</UnderlineText> is what I am
					striving for.
				</EnterAnimation>
			</AboutBodyText>
		</StyledAboutSelfIntroContainer>
	);
}
