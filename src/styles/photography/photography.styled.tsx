import styled from "styled-components";
import Masonry from "react-masonry-css";
import { GatsbyImage } from "gatsby-plugin-image";
import { IoIosArrowDown } from "react-icons/io";
import { motion } from "framer-motion";

export const StyledImgGrid = styled.div`
	line-height: 0;
	-webkit-column-count: 4;
	-webkit-column-gap: 0px;
	-moz-column-count: 4;
	-moz-column-gap: 0px;
	column-count: 4;
	column-gap: 0px;
	@media (max-width: 1200px) {
		#photos {
			-moz-column-count: 4;
			-webkit-column-count: 4;
			column-count: 4;
		}
	}
	@media (max-width: 1000px) {
		#photos {
			-moz-column-count: 3;
			-webkit-column-count: 3;
			column-count: 3;
		}
	}
	@media (max-width: 800px) {
		#photos {
			-moz-column-count: 2;
			-webkit-column-count: 2;
			column-count: 2;
		}
	}
	@media (max-width: 400px) {
		#photos {
			-moz-column-count: 1;
			-webkit-column-count: 1;
			column-count: 1;
		}
	}
`;

export const StyledImg = styled.img`
	width: 100% !important;
	height: auto !important;
	padding: 3px;
`;

export const StyledGatsbyImage = styled(GatsbyImage)`
	margin: 0.25em;
`;

export const StyledMasonry = styled(Masonry)`
	display: -webkit-box; /* Not needed if autoprefixing */
	display: -ms-flexbox; /* Not needed if autoprefixing */
	display: flex;
	/* margin-left: -30px; gutter size offset */
	margin: 0em 0.25em;
	width: auto;
	padding: 0.25em 0em;
	min-height: 35vh;
`;

export const StyledCategoryWrapper = styled.div`
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: center; /* centers each wrapped row */
    gap: 2em;
    padding: 1em;
    font-weight: 400;
    margin: 0px;
    //border: 1px red solid;

    @media only screen and (max-width: 768px) {
        gap: 0em;
        padding: 1em 0 0.5em;
    }
`
//
// export const StyledCategorySelectorAnimation = styled(motion.div)`
//     display: flex;
//     flex-wrap: wrap;
//     justify-content: center; /* centers each wrapped row */
//     gap: 2em;
//     padding: 1em 1em;
//     font-weight: 400;
//
//     border: 1px solid red;
//
//     @media only screen and (max-width: 768px) {
//         display: flex;
//         flex-direction: row;
//         gap: 1em;
//     }
// `


// src/styles/photography/photography.styled.tsx
export const StyledCategorySelectorAnimation = styled(motion.div)`
    //overflow: hidden;
    //height: auto;
    //margin: 0 2em;
    //
    //@media only screen and (max-width: 768px) {
    //    height: 0;
    //    margin: 0.25em;
    //
    //    &.is-expanded {
    //        height: auto;
    //    }
    //}
    overflow: hidden;
    height: auto;
    margin: 0.25em 0;
    
    @media only screen and (min-width: 769px) {
        height: auto !important;
    }
`;

export const StyledCategorySelectorInner = styled.div`
    padding: 0em;
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    gap: 1em 2em;
    font-weight: 400;
    
    @media only screen and (max-width: 768px) {
        gap: 1em;
        padding: 0.75em 0em;
    }
`;


export const StyledCategoryTitle = styled.div`
    display: ${({ forMobileOnly }) => forMobileOnly ? "none" : "block"};
    display: ${({ isListItem, selected, forMobileOnly }) => (!isListItem && selected && forMobileOnly) ? "none" : "block"};
    
    color: ${({ theme }) => theme.color.sand300};
	text-decoration: none;
	background: inherit;
	transition: color 0.3s ease-in-out;
	&&[aria-current],
	&:hover {
		color: ${({ theme }) => theme.color.sand700};
	}
    color: ${({ theme, selected }) => selected ? theme.color.sand700 : ""};
    cursor: pointer;
    text-align: center;
    
    @media only screen and (max-width: 768px) {
        width: 100%;
        display: ${({ forMobileOnly }) => forMobileOnly ? "block" : "none"};
        display: ${({ isListItem }) =>  isListItem ? "block" : ""};
        display: ${({ isListItem, selected, forMobileOnly }) => (isListItem && selected && !forMobileOnly) ? "none" : "block"};
    }
`



export const StyledDropDownIcon = styled(IoIosArrowDown)<{ isExpanded: boolean }>`
    display: none;
    color: ${({ theme }) => theme.color.sand300};
    
    transition: transform 300ms ease, color 220ms ease;
    transform: rotateX(${({ isExpanded }) => (isExpanded ? "180deg" : "0deg")});
    transform-origin: center;
    &:hover {
        color: ${({ theme }) => theme.color.sand700};
    }
    
    cursor: pointer;
    @media only screen and (max-width: 768px) {
        display: block;
    }
`