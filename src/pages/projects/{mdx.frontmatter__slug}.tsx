import * as React from "react";
import { ReactNode } from "react";
import { graphql } from "gatsby";
import Layout from "../../components/layout";

const ProjectPosts = ({
	data,
	children,
}: {
	data: object;
	children: ReactNode;
}) => {
	return (
		<Layout pageTitle={data.mdx.frontmatter.title}>
			<p>{data.mdx.body}</p>
			{children}
		</Layout>
	);
};

export const query = graphql`
	query ($id: String) {
		mdx(id: { eq: $id }) {
			frontmatter {
				title
				date(formatString: "MMMM D, YYYY")
			}
			body
		}
	}
`;

export const Head = () => <title>Random</title>;

export default ProjectPosts;
