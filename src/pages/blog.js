import React from 'react'
import { graphql } from 'gatsby'
import get from 'lodash/get'
import { Helmet } from 'react-helmet'
import Layout from '../components/layout'
import ArticlePreview from '../components/article-preview'
import Hero from '../components/hero'

import Favicon from "../assets/favicon.png"
import DonateImg from "../assets/philanthropy.png"
import SubCTA from '../components/subCTA'

class BlogIndex extends React.Component {
  render() {
    const siteTitle = get(this, 'props.data.site.siteMetadata.title')
    const posts = get(this, 'props.data.allContentfulBlogPost.edges')

    return (
      <Layout location={this.props.location}>
        <Helmet>
        title="Blog | ValuesU" 
        <link rel="icon" href={Favicon} />
        </Helmet>
        <Hero 
          image={DonateImg}
          headline="We thrive on helping you figure out what's next."
          description="Lorem ipsum dolor sit amet, consectetur adipscing elit, sed do eiusmod tompor incididunt ut labore et dolore magna aliqua."
        />
        <div className="container">
          {/*<h2 className="section-headline">Recent articles</h2>*/}
          <ul className="article-list">
            {posts.map(({ node }) => {
              return (
                <li key={node.slug} className="blog-item">
                  <ArticlePreview article={node} />
                </li>
              )
            })}
          </ul>
        </div>
        <SubCTA />
      </Layout>
    )
  }
}

export default BlogIndex

export const pageQuery = graphql`
  query BlogIndexQuery {
    allContentfulBlogPost(sort: { fields: [postDate], order: DESC }) {
      edges {
        node {
          title
          slug
          subtitle {
            subtitle
          }
          featuredImage {
            fluid(maxWidth: 3080, quality: 100) {
              ...GatsbyContentfulFluid
            }
          }
        }
      }
    }
  }
`