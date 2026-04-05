import React from "react";

interface PageHeadProps {
	title: string;
	description?: string;
	pathname?: string;
	image?: string;
	type?: "website" | "article";
}

/**
 * Reusable Head component for per-page SEO.
 * Accepts page-specific overrides while maintaining consistent site-wide signals.
 * Used as: export const Head = () => <PageHead title="..." description="..." />;
 */
export const PageHead = ({
	title,
	description = "i love solving problems. different methods and strategies could surprise our lives in various ways.",
	pathname = "/",
	image = "/images/site-image/site-image.jpg",
	type = "website",
}: PageHeadProps) => {
	const siteUrl = "https://locolin.com";
	const canonicalUrl = `${siteUrl}${pathname}`;
	const imageUrl = `${siteUrl}${image}`;

	return (
		<>
			{/* Page title */}
			<title>{title}</title>

			{/* Meta description */}
			<meta name="description" content={description} />

			{/* Canonical URL */}
			<link rel="canonical" href={canonicalUrl} />

			{/* Open Graph (Facebook) */}
			<meta property="og:type" content={type} />
			<meta property="og:title" content={title} />
			<meta property="og:description" content={description} />
			<meta property="og:url" content={canonicalUrl} />
			<meta property="og:image" content={imageUrl} />
			<meta property="og:site_name" content="Colin Lo" />

			{/* Twitter Card */}
			<meta name="twitter:card" content="summary_large_image" />
			<meta name="twitter:title" content={title} />
			<meta name="twitter:description" content={description} />
			<meta name="twitter:image" content={imageUrl} />

			{/* Standard meta */}
			<meta name="author" content="Colin Lo" />
		</>
	);
};

export default PageHead;

