
   
import React from 'react'
import { Link } from 'gatsby'


export default ({ article }) => (

  <article >
      <div>
          <h3 className="article-header">
            <Link to={`/blog/${article.slug}`}>{article.title}</Link>
          </h3>
      </div>
  </article>

)