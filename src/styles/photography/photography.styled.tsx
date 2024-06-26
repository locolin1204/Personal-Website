import styled from "styled-components";
import Masonry from "react-masonry-css";
import { GatsbyImage } from "gatsby-plugin-image";

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
