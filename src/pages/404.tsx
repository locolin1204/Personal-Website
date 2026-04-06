import * as React from "react"
import { Link, HeadFC, PageProps } from "gatsby"
import Layout from "../components/layout/layout";
import PageHead from "../components/layout/pageHead";
import { FourOFourContainer, StyledCode } from "../styles/404/404.styled";



const NotFoundPage: React.FC<PageProps> = () => {
    return (
        <Layout pageTitle="Page not found">
            <FourOFourContainer>
                <main>
                    <p>
                        Sorry, I couldn’t find what you were looking for.
                        <br/>
                        {process.env.NODE_ENV === "development" ? (
                            <>
                                <br/>
                                Try creating a page in <StyledCode>src/pages/</StyledCode>.
                                <br/>
                            </>
                        ) : null}
                        <br/>
                        <Link to="/">Go home</Link>.
                    </p>
                </main>
            </FourOFourContainer>
        </Layout>
    )
}

export default NotFoundPage

export const Head: HeadFC = () => (
  <PageHead title="not found" pathname="/404" noindex />
)
