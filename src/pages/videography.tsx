import * as React from "react";
import { useEffect, useState } from "react";
import Layout from "../components/layout/layout";
import { graphql } from "gatsby";
import videoListJSON from "../resources/video-list.json";
import { get } from "http";
import axios from "axios";
import VideoCard from "../components/videography/videoCard";

interface VideoObj {
	date: Date;
	description: string;
	videoId: string;
	videoLink: string;
	title: string;
	views: number;
	position: string[];
}

const VideographyPage = ({ data }) => {
	const [isLoading, setIsLoading] = useState(true);
	const [videos, setVideos] = useState<VideoObj[]>([]);
	const videosFromAPI: VideoObj[] = [];
	const videoList = videoListJSON.list;

	const heroImage = {
		gatsbyImage: data.heroImage,
		position: "40%",
		height: "50vh",
	};

	function cutDescription(description: string, maxLength: number) {
		if (description.length <= maxLength) {
			return description;
		}
	
		const cutDesc = description.substr(0, maxLength);
		return cutDesc.substr(0, cutDesc.lastIndexOf(" ")) + "...";
	}
	async function getVideosInfo(video: { title: string; link: string, position: string[] }) {
		// const apiKey = process.env.YOUTUBE_API_KEY;
		const curLink = video.link;
		const apiKey = "***REMOVED***";
		const videoId = curLink.slice(curLink.indexOf("=") + 1);
		const url = `https://www.googleapis.com/youtube/v3/videos?part=snippet&part=statistics&id=${videoId}&key=${apiKey}`;
		try {
			const res = await axios.get(url);
			console.log(res.data);
			
			videosFromAPI.push({
				description: cutDescription(res.data.items[0].snippet.description, 400),
				date: new Date(res.data.items[0].snippet.publishedAt),
				videoId: videoId,
				videoLink: curLink,
				title: video.title,
				views: res.data.items[0].statistics.viewCount,
				position: video.position,
			});
			console.log(videosFromAPI);
		} catch (error) {
			console.error("Failed to fetch video description: ", error);
		}
		if (videosFromAPI.length === videoList.length) {
			videosFromAPI.sort(compareDate);
			setVideos(videosFromAPI);
			setIsLoading(false);
		}
	}

	function compareDate(a: VideoObj, b: VideoObj) {
		if (a.date > b.date) {
			return -1;
		}
		if (a.date < b.date) {
			return 1;
		}
		return 0;
	}

	useEffect(() => {
		videoList.forEach((item: { title: string; link: string }) => {
			getVideosInfo(item);
		});
	}, []);
	
	return (
		<Layout pageTitle="videography" heroImage={heroImage}>
			{isLoading
				? <h1>Loading</h1>
				: videos.map((item, index) => {
						return (
						<VideoCard video={item} key={index} />
						)
				  })}
		</Layout>
	);
};

export const query = graphql`
	query {
		heroImage: file(relativePath: { glob: "*/videography.jpg" }) {
			childImageSharp {
				gatsbyImageData
			}
		}
	}
`;

export default VideographyPage;

// export const Head = () => <title>photography</title>;
