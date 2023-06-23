import { GatsbyImage, StaticImage } from "gatsby-plugin-image";
import styled from "styled-components";

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
`;

export const TextContainer = styled.div`
    /* border: red 1px solid; */
    text-align: left;
`

export const TextWrapper = styled.div`
    /* border: red 1px solid; */
    width: 100%;
    text-align: center;
    padding: 1.5em 3em;
    /* padding-left: 3em; */
`

export const StyledJourneyContainer = styled.div`
    padding-top: 1em;
    display: flex;
    flex-direction: column;
    gap: 1em;
    /* border: red 1px solid; */
`

export const StyledGatsbyImage = styled(GatsbyImage)`
    width: 40em;
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
    padding-top: 0.8em;
    font-size: 0.9em;
    font-weight: 300;
`

