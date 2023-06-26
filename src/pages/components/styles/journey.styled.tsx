import { GatsbyImage, StaticImage } from "gatsby-plugin-image";
import styled from "styled-components";
import React from "react";
import { motion } from "framer-motion";

export const StyledJourneyCardContainer = styled.div`
	display: flex;
    flex-direction: ${({rowLayout}) => rowLayout || "row"} ;
    /* border: red 1px solid; */
    justify-content: space-between;
    
    /* gap: 3em; */

	background-color: ${({ theme }) => theme.color.offwhite550};
	background-color: ${({ theme }) => theme.color.offwhite200};
	box-shadow: 0 5px 10px rgba(160,160,160,.05), 0 15px 40px rgba(175,175,175,.2);
    border-radius: 0.5em;
    /* padding: 1em; */

    width: 100%;
    overflow: hidden;
    transition: transform 0.5s ease-in-out, margin-top 0.5s ease-in-out, margin-bottom 0.5s ease-in-out;
    &:hover{
        transform: scale(1.09);
        margin-top: 2em;
        margin-bottom: 2em;
    }

`;

export const TextContainer = styled.div`
    /* border: red 1px solid; */
    text-align: left;
`

export const TextWrapper = styled.div`
    /* border: red 1px solid; */
    /* width: 100%; */
    width: 47%;
    text-align: center;
    padding: 1.5em 3em;
    /* padding-left: 3em; */
`

export const StyledJourneyContainer = styled.div`
    padding: 1em 0em;
    display: flex;
    flex-direction: column;
    gap: 1em;
    /* border: red 1px solid; */
`

export const ImageWrapper = styled.div`
    /* border: red 1px solid; */
    width: 53%;
`

export const StyledGatsbyImage = styled(GatsbyImage)`
    /* width: 40em; */
    width: 100%;
    /* border: red 1px solid; */

`

export const TitleWrapper = styled.div`
    font-size: 1.5em;
`

export const DateWrapper = styled.div`
	color: ${({ theme }) => theme.color.yellow900};
    font-weight: 200;
    font-style: italic;
    font-size: 0.8em;
    /* margin-top: -0.5em; */
    /* border: red 1px solid; */

`

export const PostWrapper = styled.div`
	color: ${({ theme }) => theme.color.grey600};
    padding-top: 0.5em;
    /* padding-bottom: 2em; */
    font-size: 0.9em;
    font-weight: 300;
`


export const EnterAnimationWrapper = ({ index, children }) => (
	<motion.div
		initial="hidden"
		whileInView="visible"
		viewport={{ once: true }}
		transition={{ ease: "easeInOut", duration: 1, delay: index * 0.05 }}
		variants={{
			visible: { opacity: 1, y: 0 },
			hidden: { opacity: 0, y: 100 },
		}}
	>
		{children}
	</motion.div>
);
