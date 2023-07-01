import { createGlobalStyle } from "styled-components";
import styled from "styled-components";

export const GlobalStyles = createGlobalStyle`
    main{
        /* background-color: #fffae6; */
        font-family: inter;
    }
    .custom-toast {
        font-size: 1em;
    }
	html.touch *:hover {
    all:unset!important;
}
`;

// export default GlobalStyles;

export const UnderlineText = styled.span`
	font-weight: ${({ weight }) => (weight ? weight : "inherit")};
	display: inline-block;
	position: relative;
	cursor: pointer;

	&:after {
		content: "";
		position: absolute;
		width: 100%;
		transform: scaleX(0);
		height: ${({ height }) => (height ? height : "1")}px;
		bottom: 0;
		left: 0;
		background-color: #000000;
		transform-origin: bottom right;
		transition: transform ${({ duration }) => (duration ? duration : "0.25")}s
			ease-out;
	}
	&:hover:after {
		transform: scaleX(1);
		transform-origin: bottom left;
	}
`;

export const RedLineDiv = styled.div`
	border: red 1px solid;
`;
