import React from 'react'
import { graphql } from 'gatsby'
import BGSection from '../components/Globals/BGSection'
import Layout from '../components/layout'
import SEO from '../components/seo'
import Info from '../components/Home/Info'
import Menu from '../components/Home/Menu'

const IndexPage = ({ data }) => (
    <Layout>
        <SEO title="Home" />
        <BGSection
            img={data.img.childImageSharp.fluid}
            title="Joy's amazing coffee"
        />
        <Info />
        <Menu items={data.menu} />
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
        menu: allContentfulCoffeeItem {
            edges {
                node {
                    title
                    price
                    category
                    image {
                        fixed(width: 50, height: 50) {
                            ...GatsbyContentfulFixed
                        }
                    }
                    description {
                        description
                    }
                    id: contentful_id
                }
            }
        }
    }
`
export default IndexPage
