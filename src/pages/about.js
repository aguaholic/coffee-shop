import React from 'react'
import { graphql } from 'gatsby'
import BGSection from '../components/Globals/BGSection'
import Layout from '../components/layout'
import SEO from '../components/seo'
import Info from '../components/Home/Info'

const About = ({ data }) => (
    <Layout>
        <SEO title="Home" />
        <BGSection
            img={data.img.childImageSharp.fluid}
            styleClass="about-background"
            title="About us"
        />
        <Info />
    </Layout>
)

export const query = graphql`
    {
        img: file(relativePath: { eq: "about-background.jpeg" }) {
            childImageSharp {
                fluid {
                    ...GatsbyImageSharpFluid
                }
            }
        }
    }
`
export default About
