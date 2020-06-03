import React from 'react'
import { graphql } from 'gatsby'
import BGSection from '../components/Globals/BGSection'
import Layout from '../components/layout'
import SEO from '../components/seo'
import Info from '../components/Home/Info'

const IndexPage = ({ data }) => (
    <Layout>
        <SEO title="Home" />
        <BGSection
            img={data.img.childImageSharp.fluid}
            title="Joy's amazing coffee"
        />
        <Info />
    </Layout>
)

export const query = graphql`
    {
        img: file(relativePath: { eq: "default-background.jpeg" }) {
            childImageSharp {
                fluid {
                    ...GatsbyImageSharpFluid
                }
            }
        }
    }
`
export default IndexPage
