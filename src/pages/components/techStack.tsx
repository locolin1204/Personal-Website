import React from "react";
import { StyledTechContainer } from "./styles/about.styled";
import TechFrame from "./techFrame";

export default function TechStack() {
	const listOfLang = [
		"C",
		"Java",
		"HTML",
		"CSS",
		"JavaScript",
		"Swift",
		"Kotlin",
		"Python",
		"GraphQL",
		"SQL",
	];

	const listOfLib = [
		"React.js",
		"Gatsby.js",
		"SwitftUI",
		"Kotlin Multiplatform Mobile",
		"Apollo GraphQL",
		"PyTorch",
	];

	const listOfDb=[
		"Oracle DB",
		"MySQL"
	];

	return (
		<StyledTechContainer>
			<TechFrame list={listOfLang} title={"languages"}/>
			<TechFrame list={listOfLib} title={"framework and libraries"}/>
			<TechFrame list={listOfDb} title={"databases"}/>
		</StyledTechContainer>
	);
}
