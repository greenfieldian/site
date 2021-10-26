import React from 'react'
import { Link } from 'gatsby'
import Img from 'gatsby-image'

import * as articleStyles from "./article.module.css"


export default ({ article }) => (

  <article >
      <div>
        <Link to={`/blog/${article.slug}`}>
          <Img
              className=""
              alt={article.title}
              fluid={article.featuredImage.fluid}
            />
        </Link>
      </div>
      <div>
          <h3 className="article-header">
            <Link to={`/blog/${article.slug}`}>{article.title}</Link>
          </h3>
          <div>{article.subtitle.subtitle}</div>
      </div>
  </article>

)