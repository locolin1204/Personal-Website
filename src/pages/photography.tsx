import * as React from "react";
import { useEffect, useMemo, useState } from "react";
import Layout from "../components/layout/layout";
import {
	StyledCategorySelectorAnimation,
	StyledCategorySelectorInner,
	StyledCategoryTitle,
	StyledCategoryWrapper,
	StyledDropDownIcon,
	StyledGatsbyImage,
	StyledMasonry,
} from "../styles/photography/photography.styled";
import { graphql, HeadFC } from "gatsby";
import { getImage } from "gatsby-plugin-image";
import InfiniteScroll from "react-infinite-scroll-component";
import PageHead from "../components/layout/pageHead";

function shuffleArray(arr: any[]) {
	let newArr = structuredClone(arr);
	for (let i = arr.length - 1; i > 0; i--) {
		let j = Math.floor(Math.random() * (i + 1));
		let temp = newArr[i];
		newArr[i] = newArr[j];
		newArr[j] = temp;
	}
	return newArr;
}

function extractSubDir(dir: string) {
	return dir.replace(/^photography\/?/, "").split("/")[0]
}

const PhotographyPage = ({ data }: { data: any }) => {
	const dataImageList = data.categoryImageList.group

	const [randomShuffleList, setRandomShuffleList] = useState([]);
	const initSelectedImagesDict = useMemo(() => {
		const randomShuffleList = []

		const categoryDict = Object.fromEntries(dataImageList.map(g => {
			const category = extractSubDir(g.fieldValue)
			const categoryNodeList = dataImageList.find(g => g.fieldValue.includes(category)).nodes
			randomShuffleList.push(...shuffleArray(categoryNodeList))
			return [
				category,
				shuffleArray(categoryNodeList.slice(0, 15)),
			]
		}))

		const shuffledRandom = shuffleArray(randomShuffleList)
		setRandomShuffleList(shuffledRandom)
		return {
			"random-shuffle": shuffledRandom.slice(0, 15),
			...categoryDict
		}
	}, [dataImageList]);

	const [hasMore, setHasMore] = useState(true);
	const [page, setPage] = useState(2);
	const [selectedCategory, setSelectedCategory] = useState<string>('random-shuffle');
	const [images, setImages] = useState(initSelectedImagesDict);

	const [isExpanded, setIsExpanded] = useState(false);

	useEffect(() => {
		setPage(2)
		setHasMore(true)
	}, [selectedCategory]);

	const heroImage = {
		position: "65%",
		height: "50vh",
		imgFluid: data.heroImage.childImageSharp.fluid
	};

	const breakpointColumnsObj = {
		default: 3,
		1500: 2,
		800: 1,
	};

	function fetchMore(){
		const nodeList = selectedCategory == "random-shuffle" ? randomShuffleList : dataImageList.find(g => extractSubDir(g.fieldValue) === selectedCategory).nodes;
		let newImages = nodeList.slice((page - 1) * 15, page * 15);
		if (newImages.length < 15) {
			setHasMore(false);
		} else {
			setHasMore(true);
			let curPage = page;
			setPage(++curPage);
		}
		newImages = shuffleArray(newImages);

		setImages((prev: Record<string, any[]>) => ({
			...prev,
			[selectedCategory]: [...(prev[selectedCategory] ?? []), ...newImages],
		}));
	}

	const filteredImages: Record<string, any> = useMemo(() => {
		return images[selectedCategory]
	}, [images, selectedCategory]);

	return (
		<Layout pageTitle="photography" heroImage={heroImage}>
			<StyledCategoryWrapper isExpanded={isExpanded}>
				<StyledCategoryTitle forMobileOnly={true} isListItem={false} selected={true}>
					{selectedCategory.replace(
						"-", " ")}
				</StyledCategoryTitle>
				<StyledCategorySelectorAnimation
					animate={{ height:  isExpanded ? "auto" : 0 }}
					transition={{ ease: "easeInOut", duration: 0.75 }}
					className={isExpanded ? "is-expanded" : ""}
				>
					<StyledCategorySelectorInner>
					{Object.keys(initSelectedImagesDict)
						.map((category: string) => (
						<StyledCategoryTitle key={category}
											 selected={selectedCategory == category}
											 isListItem={true}
											 forMobileOnly={false}
											 onClick={() => {
												 setIsExpanded(false);
												 setSelectedCategory(category)
											 }}>
							{category.replace("-", " ")}
						</StyledCategoryTitle>
					))}
					</StyledCategorySelectorInner>
				</StyledCategorySelectorAnimation>
				<StyledDropDownIcon
					isExpanded={isExpanded}
					onClick={() => setIsExpanded((v) => !v)}
				/>
			</StyledCategoryWrapper>
			{/*<StyledCategoryWrapper isExpanded={isExpanded}>*/}
			{/*	/!* Selected category at top *!/*/}
			{/*	<motion.div layoutId="selected-category">*/}
			{/*		<StyledCategoryTitle selected={true}>*/}
			{/*			{selectedCategory.replace("-", " ")}*/}
			{/*		</StyledCategoryTitle>*/}
			{/*	</motion.div>*/}

			{/*	/!* Dropdown categories *!/*/}
			{/*	<StyledCategorySelectorAnimation*/}
			{/*		style={{ overflow: "hidden" }}*/}
			{/*		initial={{ height: 0, opacity: 0 }}*/}
			{/*		animate={isExpanded ? { height: "auto", opacity: 1 } : { height: 0, opacity: 0 }}*/}
			{/*		exit={{ height: 0, opacity: 0 }}*/}
			{/*		transition={{ duration: 0.3, ease: "easeInOut" }}*/}
			{/*	>*/}
			{/*		<AnimatePresence mode="popLayout">*/}
			{/*			{Object.keys(initSelectedImagesDict).filter(*/}
			{/*				category => selectedCategory !== category*/}
			{/*			).map((category: string) => (*/}
			{/*				<motion.div*/}
			{/*					key={category}*/}
			{/*					layout*/}
			{/*					initial={{ opacity: 0, y: -10 }}*/}
			{/*					animate={{ opacity: 1, y: 0 }}*/}
			{/*					exit={{ opacity: 0, y: -10 }}*/}
			{/*					transition={{ duration: 0.2 }}*/}
			{/*					onClick={() => {*/}
			{/*						setIsExpanded(false);*/}
			{/*						setSelectedCategory(category);*/}
			{/*					}}*/}
			{/*					style={{width: "100%"}}*/}
			{/*				>*/}
			{/*					<StyledCategoryTitle>*/}
			{/*						{category.replace("-", " ")}*/}
			{/*					</StyledCategoryTitle>*/}
			{/*				</motion.div>*/}
			{/*			))}*/}
			{/*		</AnimatePresence>*/}
			{/*	</StyledCategorySelectorAnimation>*/}

			{/*	<StyledDropDownIcon*/}
			{/*		isExpanded={isExpanded}*/}
			{/*		onClick={() => setIsExpanded((v) => !v)}*/}
			{/*	/>*/}
			{/*</StyledCategoryWrapper>*/}



			<InfiniteScroll
				dataLength={filteredImages.length}
				hasMore={hasMore}
				next={fetchMore}
				loader={<div> </div>}
			>
				<StyledMasonry breakpointCols={breakpointColumnsObj}>
					{filteredImages.map(image => {
						return (
							<StyledGatsbyImage
								image={getImage(image.childImageSharp)}
								alt={"placeholder"}
								key={image.id}
							/>
						);
					})}
				</StyledMasonry>
			</InfiniteScroll>
		</Layout>
	);
};

export const query = graphql`
	query {
		heroImage: file(relativePath: { glob: "*/photography.jpg" }) {
			childImageSharp {
				fluid(quality: 80, maxWidth: 2500, fit: COVER, webpQuality: 80) {
					...GatsbyImageSharpFluid_withWebp
				}
			}
		}
		categoryImageList: allFile(
			filter: { relativePath: { glob: "photography/*/*.[jJ][pP][gG]" } }
		) {
			group(field:{ relativeDirectory: SELECT }) {
				fieldValue
				nodes {
					childImageSharp {
						gatsbyImageData
					}
					id
					relativePath
				}
			}
		}
	}
`;

export default PhotographyPage;

// export const Head = () => <title>photography</title>;

export const Head: HeadFC = () => (
	<PageHead
		title="photography"
		description="how i see the world through the lens."
		pathname="/photography"
	/>
);

