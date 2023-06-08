const path = require("path");
exports.createPages = async ({ graphql, actions }) => {
	const { data } = await graphql(`
		query Image {
			allFile(filter: {relativePath: {glob: "journey/*.jpg"}}) {
                nodes {
                  relativePath
                  childImageSharp {
                    gatsbyImageData(width: 500)
                  }
                }
              }
		}
	`);
    console.log("this is the createpage", data);
	data.allFile.nodes.forEach(node => {
		actions.createPage({
			path: "/journey",
			component: path.resolve("./src/pages/journeyCard.tsx"),
			context: { image: node.childMdx.frontmatter.image },
		});
	});
};
