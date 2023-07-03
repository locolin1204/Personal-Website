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
		<Helmet
			meta={[
				{
					property: `og:title`,
					content: siteDetails.title,
				},
				{
					property: `og:image`,
					content: metaImage,
				},
				{
					property: `og:url`,
					content: siteDetails.siteUrl,
				},
                {
                    property: `og:description`,
                    content: siteDetails.description,
                },
			]}
		/>
	);
};

export default SEO;
