import React from "react";
import {
	PostTag,
	StyledIframe,
	StyledVideoCardContainer,
	StyledVideoDetail,
	TagContainer,
	Thumbnail,
	VideoDate,
	VideoDescription,
	VideoTitle,
} from "../../styles/videography/videoCard.styled";
import { VideoObj } from "../../pages/videography";

export default function VideoCard({ video }: { video: VideoObj }) {
	return (
		<StyledVideoCardContainer>
			{/* {video.embeddable ? (
				<StyledIframe
					src={`https://www.youtube.com/embed/${video.videoId}`}
					title="YouTube video player"
					frameBorder="0"
					allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
					allowFullScreen
				/>
			) : (
				<Thumbnail src={video.thumbnailUrl} />
			)} */}
			<Thumbnail src={video.thumbnailUrl} />
			<StyledVideoDetail>
				<VideoTitle target="_blank" href={video.videoLink}>
					{video.title}
				</VideoTitle>
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
					{video.position.map((item, index) => {
						return <PostTag key={index}>{item}</PostTag>;
					})}
				</TagContainer>
			</StyledVideoDetail>
		</StyledVideoCardContainer>
	);
}
