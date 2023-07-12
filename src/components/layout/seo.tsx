import React from "react";
import { Helmet } from "react-helmet";
import { useStaticQuery, graphql } from "gatsby";

const SEO = () => {
	const site = useStaticQuery(
		graphql`
			query {
				site {
					siteMetadata {
						description
						title
						siteUrl
						siteImage
						keywords
					}
				}
			}
		`
	);

	const siteDetails = site.site.siteMetadata;

	if (!siteDetails) {
		return null;
	}
	const metaImage = siteDetails.siteUrl + siteDetails.siteImage;

	return (
		<Helmet
			meta={[
				{
					name: `description`,
					content: siteDetails.description,
				},
				{
					name: `keywords`,
					content: siteDetails.keywords,
				},
				// facebook
				{
					property: `og:url`,
					content: siteDetails.siteUrl,
				},
				{
					property: `og:title`,
					content: siteDetails.title,
				},
				{
					property: `og:description`,
					content: siteDetails.description,
				},
				{
					property: `og:image`,
					content: metaImage,
				},
				// twitter
				{
					property: `twitter:card`,
					content: `summary_large_image`,
				},
				{
					property: `twitter:domain`,
					content: siteDetails.siteUrl.replace(/^https?:\/\//, ""),
				},
				{
					property: `twitter:url`,
					content: siteDetails.siteUrl,
				},
				{
					property: `twitter:title`,
					content: siteDetails.title,
				},
				{
					property: `twitter:description`,
					content: siteDetails.description,
				},
				{
					property: `twitter:image`,
					content: metaImage,
				},
			]}
		/>
	);
};

export default SEO;
