import type { GatsbyConfig } from "gatsby";

// require("dotenv").config({
// 	path: `.env.${process.env.NODE_ENV}`,
//   })

const config: GatsbyConfig = {
	siteMetadata: {
		title: `Colin Lo`,
		siteUrl: `https://locolin.com`,
		description: `i love solving problems. different methods and strategies could surprise our lives various ways.`,
		siteImage: "/images/site-image/site-image.jpg"
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
		'gatsby-plugin-react-helmet',
		"react-bootstrap",
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
			resolve: 'gatsby-plugin-manifest',
			options: {
			  icon: `${__dirname}/src/images/icon.svg`,
			},
		  },
	],
	
};

export default config;
