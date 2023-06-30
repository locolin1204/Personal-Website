import { StaticImage } from "gatsby-plugin-image";
import React from "react";
import {
	AboutBodyText,
	ProfilePic,
	StyledAboutSelfIntroContainer,
} from "../../styles/about/aboutSelfIntro.styled";
import { EnterAnimation } from "../enterAnimation";

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
					placeholder="blurred"
					layout="constrained"
				/>
			</ProfilePic>
			</EnterAnimation>
			<AboutBodyText>
			<EnterAnimation>
				{/* {bodyText} */}I am currently a junior computer science major at the
				Chinese University of Hong Kong, I also studied aboard at the University
				of Notre Dame. <br />
				<br /> Integrating my daily life with programming is my motive. I
				believe the existence of programming is to increase the efficiency of
				our work. <br />
				<br />
				Creating different programs to make my life much easier is what I am
				striving for.
			</EnterAnimation>

			</AboutBodyText>
		</StyledAboutSelfIntroContainer>
	);
}
