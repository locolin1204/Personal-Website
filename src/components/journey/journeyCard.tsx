import React from "react";
import {
	StyledJourneyCardContainer,
	TextContainer,
	StyledGatsbyImage,
	TextWrapper,
	DateWrapper,
	PostWrapper,
	TitleWrapper,
	ImageWrapper, TitleLogoWrapper, StyledLogo,
} from "../../styles/journey/journeyCard.styled";

import { FluidObject } from "gatsby-image";

const HtmlToReactParser = require("html-to-react").Parser;

export default function JourneyCard({
	title,
	post,
	startdate,
	enddate,
	slug,
	image,
	logo,
	index,
	body,
}: {
	title: string;
	post: string;
	startdate: string;
	enddate: string;
	slug: string;
	index: number;
	image: FluidObject;
	logo: FluidObject;
	body: string;
}) {
	const htmlToReactParser = new HtmlToReactParser();
	const reactElement = htmlToReactParser.parse(body);
	return (
        <StyledJourneyCardContainer rowLayout={index % 2 === 1 && "row-reverse"}>
            <TextWrapper>
                <TextContainer>
                    <TitleLogoWrapper>
                        <div>
                            <TitleWrapper>{title}</TitleWrapper>
                            <PostWrapper>{post}</PostWrapper>
                            <DateWrapper>{startdate} – {enddate}</DateWrapper>
                        </div>
                        <StyledLogo fluid={logo} alt={title}/>
                    </TitleLogoWrapper>
                    {body ? (
                        <div>
                            <hr/>
                            {reactElement}
                        </div>
                    ) : null}
                </TextContainer>
            </TextWrapper>
            <ImageWrapper>
                <StyledGatsbyImage fluid={image} alt={title}/>
            </ImageWrapper>
        </StyledJourneyCardContainer>
	);
}
