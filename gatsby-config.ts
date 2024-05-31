import type { GatsbyConfig } from "gatsby";

require("dotenv").config({
	path: `.env.${process.env.NODE_ENV}`,
});

const {
	NODE_ENV,
	URL: NETLIFY_SITE_URL = 'https://locolin.netlify.app',
	DEPLOY_PRIME_URL: NETLIFY_DEPLOY_URL = NETLIFY_SITE_URL,
	CONTEXT: NETLIFY_ENV = NODE_ENV
} = process.env;
const isNetlifyProduction = NETLIFY_ENV === 'production';
const siteUrl = isNetlifyProduction ? NETLIFY_SITE_URL : NETLIFY_DEPLOY_URL;

const config: GatsbyConfig = {
	siteMetadata: {
		title: `Colin Lo`,
		siteUrl: `https://locolin.com`,
		description: `i love solving problems. different methods and strategies could surprise our lives various ways.`,
		siteImage: "/images/site-image/site-image.jpg",
		keywords: "lo hoa tsun, locolin, lo colin, colin, colin lo, cuhk, chinese university of hong kong, computer science, la salle college, lsc, hong kong, hk, university of notre dame,personal website, website, personal site, programming, csci, cs, comp sci, software engineer, developer, greentomato, gt, greentomato limited",
	},
	// More easily incorporate content into your pages through automatic TypeScript type generation and better GraphQL IntelliSense.
	// If you use VSCode you can also use the GraphQL plugin
	// Learn more at: https://gatsby.dev/graphql-typegen
	graphqlTypegen: true,
	plugins: [
		"gatsby-plugin-styled-components",
		"gatsby-plugin-image",
		"gatsby-plugin-sharp",
		`gatsby-transformer-sharp`,
		`gatsby-plugin-sharp`,
		"gatsby-plugin-react-helmet",
		"react-bootstrap",
		"gatsby-plugin-sitemap",
		{
			resolve: "gatsby-source-filesystem",
			options: {
				name: `content`,
				path: `${__dirname}/src/content`,
			},
		},
		{
			resolve: "gatsby-source-filesystem",
			options: {
				name: `src/images`,
				path: `${__dirname}/src/images`,
			},
		},
		{
			resolve: `gatsby-omni-font-loader`,
			options: {
				enableListener: true,
				preconnect: [
					`https://fonts.googleapis.com`,
					`https://fonts.gstatic.com`,
				],
				web: [
					{
						name: `Source Code Pro`,
						file: `https://fonts.googleapis.com/css2?family=Inter:wght@100;200;300;400;500;600;700;800;900&family=Source+Code+Pro:ital,wght@0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap`,
					},
				],
			},
		},
		{
			resolve: `gatsby-transformer-remark`,
			options: {
				plugins: [
					{
						resolve: `gatsby-remark-images`,
						options: {
							maxWidth: 800,
						},
					},
				],
			},
		},
		{
			resolve: `gatsby-plugin-mdx`,
			options: {
				gatsbyRemarkPlugins: [
					{
						resolve: `gatsby-remark-images`,
						options: {},
					},
				],
			},
		},
		{
			resolve: "gatsby-plugin-manifest",
			options: {
				icon: `${__dirname}/src/images/icon.svg`,
			},
		},
		{
			resolve: 'gatsby-plugin-robots-txt',
			options: {
				resolveEnv: () => NETLIFY_ENV,
				env: {
					production: {
						policy: [{userAgent: '*'}],
						host: 'https://locolin.com',
						sitemap: 'https://locolin.com/sitemap-index.xml'
					},
					'branch-deploy': {
						policy: [{userAgent: '*', disallow: ['/']}],
						sitemap: null,
						host: null
					},
					'deploy-preview': {
						policy: [{userAgent: '*', disallow: ['/']}],
						sitemap: null,
						host: null
					}
				}
			},
		},
	],
};

export default config;
