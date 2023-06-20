import styled from "styled-components";

export const StyledProjectLayout = styled.div`
	/* border: red 1px solid; */
	display: grid;
	grid-template-columns: repeat(auto-fit, minmax(400px, 1fr));
	grid-gap: 1rem;

	@media (max-width: 768px) {
		grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
	}

	@media (max-width: 480px) {
		grid-template-columns: repeat(auto-fit, minmax(100%, 1fr));
	}
`;