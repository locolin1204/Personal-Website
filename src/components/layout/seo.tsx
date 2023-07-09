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

	// const metaUrl = url ? `${site.siteMetadata.siteUrl}${url}` : site.siteMetadata.siteUrl;

	const siteDetails = site.siteMetadata;
	if (!siteDetails) {
		return null;
	}

	const metaImage = siteDetails.siteUrl + siteDetails.siteImage;

	return (
		<Helmet>
			<meta name="description" content={siteDetails.description} />

			<meta property="og:url" content={siteDetails.siteUrl} />
			<meta property="og:title" content={siteDetails.title} />
			<meta property="og:description" content={siteDetails.description} />
			<meta property="og:image" content={metaImage} />
		</Helmet>
	);
};

export default SEO;
