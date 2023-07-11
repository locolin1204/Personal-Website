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
		<Helmet>
			<meta name="description" content={siteDetails.description} />
			
			{/* facebook */}
			<meta property="og:url" content={siteDetails.siteUrl} />
			<meta property="og:title" content={siteDetails.title} />
			<meta property="og:description" content={siteDetails.description} />
			<meta property="og:image" content={metaImage} />

			{/* twitter */}
			<meta name="twitter:card" content="summary_large_image" />
			<meta
				property="twitter:domain"
				content={siteDetails.siteUrl.replace(/^https?:\/\//, "")}
			/>
			<meta property="twitter:url" content={siteDetails.siteUrl} />
			<meta name="twitter:title" content={siteDetails.title} />
			<meta name="twitter:description" content={siteDetails.description} />
			<meta name="twitter:image" content={siteDetails.description} />
		</Helmet>
	);
};

export default SEO;
