import styled from "styled-components";


export const StyledProjectLayout = styled.div`
	/* border: red 1px solid; */
	display: grid;
	grid-template-columns: repeat(auto-fit, minmax(350px, 1fr));
	grid-gap: 3rem;



	@media (max-width: 480px) {
		grid-template-columns: repeat(auto-fit, minmax(100%, 1fr));
	}
	padding-bottom: 4rem;
    margin: 0em 1em;

`;