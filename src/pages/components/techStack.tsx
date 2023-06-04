import React from "react";
import { StyledTechFrame, StyledTechContainer } from "./styles/about.styled";

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
    "React.js", "Gatsby.js", "SwitftUI", "Kotlin Multiplatform Mobile", "Apollo GraphQL", "PyTorch"
  ]

	return (
		<StyledTechContainer>
			<StyledTechFrame>
				<h5>languages</h5>
				<ul>
					{listOfLang.map((item, index) => (
						<li>{item}</li>
					))}
				</ul>
			</StyledTechFrame>
			<StyledTechFrame>
      <h5>framework and libraries</h5>
				<ul>
					{listOfLib.map((item, index) => (
						<li>{item}</li>
					))}
				</ul></StyledTechFrame>
			<StyledTechFrame>databases</StyledTechFrame>
		</StyledTechContainer>
	);
}
