import React from "react";

interface BreadcrumbItem {
	name: string;
	pathname: string;
}

interface PageHeadProps {
	title: string;
	description?: string;
	pathname?: string;
	image?: string;
	type?: "website" | "article";
	breadcrumbs?: BreadcrumbItem[];
	noindex?: boolean;
}

function normalizePathname(rawPathname?: string) {
	if (!rawPathname || rawPathname.trim() === "" || rawPathname === "/") {
		return "/";
	}

	const pathWithLeadingSlash = rawPathname.startsWith("/")
		? rawPathname
		: `/${rawPathname}`;
	const collapsedSlashes = pathWithLeadingSlash.replace(/\/+/g, "/");

	return collapsedSlashes.endsWith("/")
		? collapsedSlashes
		: `${collapsedSlashes}/`;
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
	breadcrumbs,
	noindex = false,
}: PageHeadProps) => {
	const siteUrl = "https://locolin.com";
	const normalizedPathname = normalizePathname(pathname);
	const canonicalUrl = `${siteUrl}${normalizedPathname}`;
	const imageUrl = `${siteUrl}${image}`;
	const breadcrumbList = breadcrumbs?.length
		? [
			{
				"@type": "ListItem",
				position: 1,
				name: "Home",
				item: `${siteUrl}/`,
			},
			...breadcrumbs.map((breadcrumb, index) => ({
				"@type": "ListItem",
				position: index + 2,
				name: breadcrumb.name,
				item: `${siteUrl}${normalizePathname(breadcrumb.pathname)}`,
			})),
		]
		: null;

	return (
		<>
			{/* Page title */}
			<title>{title}</title>
			{noindex ? <meta name="robots" content="noindex,follow" /> : null}

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

			{breadcrumbList ? (
				<script type="application/ld+json">
					{JSON.stringify({
						"@context": "https://schema.org",
						"@type": "BreadcrumbList",
						itemListElement: breadcrumbList,
					})}
				</script>
			) : null}
		</>
	);
};

export default PageHead;

