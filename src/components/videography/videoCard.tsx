import React from "react";
import {
	PostTag,
	StyledIframe,
	StyledVideoCardContainer,
	StyledVideoDetail,
	TagContainer,
	VideoDate,
	VideoDescription,
	VideoTitle,
} from "../../styles/videography/videoCard.styled";

export default function VideoCard({ video }) {
	return (
		<StyledVideoCardContainer>
			<StyledIframe
				// width="560"
				// height="315"
				src={`https://www.youtube.com/embed/${video.videoId}`}
				title="YouTube video player"
				frameBorder="0"
				allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
				allowFullScreen
			/>
			<StyledVideoDetail>
				<VideoTitle>{video.title}</VideoTitle>
				<VideoDate>
					{video.date.toLocaleDateString("en-us", {
						year: "numeric",
						month: "short",
						day: "numeric",
					})}
				</VideoDate>
				{video.description ? (
					<VideoDescription>{video.description}</VideoDescription>
				) : (
					""
				)}
				<TagContainer>
					{video.position.map(item => {
						return <PostTag>{item}</PostTag>;
					})}
				</TagContainer>
			</StyledVideoDetail>
		</StyledVideoCardContainer>
	);
}
