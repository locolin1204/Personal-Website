import React from "react";
import { StyledTechFrame, StyledTechContainer, StyledList } from "./styles/about.styled";

export default function TechFrame({ list, title}: { list: Array<string>, title: string}) {
	return (
		<StyledTechFrame>
			<h5>{title}</h5>
			<StyledList>
				{list.map(item => (
					<div>{item}</div>
				))}
			</StyledList>
		</StyledTechFrame>
	);
}
