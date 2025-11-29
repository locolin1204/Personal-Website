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
					I am currently a <UnderlineText weight={"500"} height={"1"} duration={"0.5"}>software engineer</UnderlineText> in <UnderlineText weight={"500"} height={"1"} duration={"0.5"}>Global Markets Technology</UnderlineText> at <UnderlineText weight={"500"} height={"1"} duration={"0.5"}>Nomura</UnderlineText>.
					<br />
					<br />
					I graduated as a <UnderlineText weight={"500"} height={"1"} duration={"0.5"}>computer science</UnderlineText> major
					at <UnderlineText weight={"500"} height={"1"} duration={"0.5"}>the Chinese University of Hong Kong </UnderlineText>,
					I also studied aboard at <UnderlineText weight={"500"} height={"1"} duration={"0.5"}>the University of Notre Dame </UnderlineText>.
					<br />
					<br />
					<UnderlineText weight={"500"} height={"1"} duration={"0.5"}>Integrating</UnderlineText> my daily life with programming is my motive.
					I believe the existence of programming is to increase the <UnderlineText weight={"500"} height={"1"} duration={"0.5"}>efficiency</UnderlineText> of
					our work.
					Creating different programs to make my life much <UnderlineText weight={"500"} height={"1"} duration={"0.5"}>easier</UnderlineText> is what I am
					striving for.
				</EnterAnimation>
			</AboutBodyText>
		</StyledAboutSelfIntroContainer>
	);
}
