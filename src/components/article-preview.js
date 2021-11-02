import React from 'react'
import { Link } from 'gatsby'
import Img from 'gatsby-image'

import * as articleStyles from "./article.module.css"


export default ({ article }) => (
  <article className={articleStyles.article}>
      <div>
        <Link to={`/blog/${article.slug}`}>
          <Img
              className={articleStyles.article_img}
              alt={article.title}
              fluid={article.featuredImage.fluid}
            />
        </Link>
      </div>
      <div className={"text-wrapper" + " " + articleStyles.text_contain}>
          <h3 className={articleStyles.header}>
            <Link to={`/blog/${article.slug}`}>{article.title}</Link>
          </h3>
          <div className={articleStyles.article_subtitle}>{article.subtitle.subtitle}</div>
      </div>
  </article>
)