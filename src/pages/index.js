import React from 'react'
import { Link } from 'gatsby'
import { Helmet } from "react-helmet"

import DonateImg from "../assets/philanthropy.png"

import * as homepageStyles from "./homepage.module.css"
import Layout from '../components/layout'
import CTA from '../components/ctaComponent'

export default function Index() {
  return (
    <>
      <Helmet>
        <meta charSet="utf-8" />
        <title>Home | Shockmouse Media</title>
        <link rel="canonical" href="http://mysite.com/example" />
      </Helmet>

    <Layout>
      <div className={homepageStyles.hero}>
        <div className={homepageStyles.bg}></div>
        <div className={homepageStyles.section_content}>
          <div className="text-wrapper container">
            <div className="text-render">
              <h2 className="headline">We're a strategic agency leveraging technology to bridge the gap between you and your objectives.</h2>
              <p className="description">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco</p>
              <div className={homepageStyles.cta_container}>
                <Link className="cta arrow">Learn more about who we are</Link>
                <Link className="cta arrow">Start a conversation</Link>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="wrapper">
        <section>
          <div>
            <div className="item bg-white">
              <div className={homepageStyles.item_content_wrap}>
                <div className="text-wrapper container two-up-left">
                  <h3 className="headline">Unboxing hybrid: The future of working together</h3>
                  <div className="description">
                    Web3 is here, and it’s here to stay. Learn how to stay agile and build on a forward-looking framework.  
                  </div>
                  <div className={homepageStyles.cta_container}>
                    <Link className="cta arrow">Discover your web3 roadmap</Link>
                  </div>
                </div>
              </div>
            </div>
            <div className="item bg-white"></div>
          </div>
        </section>
        <section>
          <div>
            <div className="item bg-lightest-grey"></div>
            <div className="item bg-lightest-grey">
              <div className={homepageStyles.item_content_wrap}>
                <div className="text-wrapper container two-up-right">
                  <h3 className="headline">Acting on analytics: The agile approach</h3>
                  <div className="description">Web3 is here, and it's here to stay. Learn how to stay agile and build on a forward looking framework.</div>
                  <div className={homepageStyles.cta_container}>
                    <Link className="cta arrow">Discover your web3 roadmap</Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section>
          <div>
            <div className="item bg-lightest-grey">
              <div className={homepageStyles.item_content_wrap}>
                <div className="text-wrapper container two-up-left">
                  <h3 className="headline">Strategy for navigating web3</h3>
                  <div className="description">
                    Web3 is here, and it’s here to stay. Learn how to stay agile and build on a forward-looking framework.  
                  </div>
                  <div className={homepageStyles.cta_container}>
                    <Link className="cta arrow">Discover your web3 roadmap</Link>
                  </div>
                </div>
              </div>
            </div>
            <div className="item bg-white"></div>
          </div>
        </section>
      </div>
      <div className={homepageStyles.blog_feature}>
        <div className={homepageStyles.header_wrapper}>
          <h2 className="section-header section-header centered">From our blog</h2>
        </div>
        <div className={homepageStyles.blog_feature_wrapper}>
          <div className={homepageStyles.blog_feature_container}>
            <div className={homepageStyles.feature_row}>
              <div className={homepageStyles.feature_container}>
                <Link>
                  <div></div>
                  <div className={homepageStyles.feature_content}>
                    <time>October 12, 2021</time>
                    <h3>Moving forward: Our stance on advancing racial equity in America</h3>
                  </div>
                </Link>
              </div>
              <div className={homepageStyles.feature_container}>
                <div className={homepageStyles.feature_2_3_container}>
                  <Link>
                    <div></div>
                    <div className={homepageStyles.feature_content}>
                      <time>August 15th, 2021</time>
                      <h3>From designers for designers: Where to look for design inspiration</h3>
                    </div>
                  </Link>
                  <Link>
                    <div className={homepageStyles.feature_content}>
                      <time>October 5th, 2021</time>
                      <h3>Fiscal year in review: Analyzing the best and worst of 2021</h3>
                    </div>
                  </Link>
                </div>
              </div>
            </div>
            <div className={homepageStyles.feature_row}>
              <div className={homepageStyles.feature_container}>
                <Link>
                  <div></div>
                  <div className={homepageStyles.feature_content}>
                    <time>September 15th, 2021</time>
                    <h3>Product pricing: Our pricing strategy to maximize conversions</h3>
                  </div>
                </Link>
              </div>
              <div className={homepageStyles.feature_container}>
                <Link></Link>
                <div className={homepageStyles.read_more_container}>
                  <Link className="cta -arrow">Read more on our blog</Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <section className={homepageStyles.philanthropy_container}>
        <div className="container">
          <div className="item">
            <div className="image">
              <picture>
                <img src={DonateImg}/>
              </picture>
            </div>
            <div className="text-wrapper">
              <h3 className="headline">We're committed to making the World a better place</h3>
              <div className={homepageStyles.cta_container}>
                <Link className="arrow cta">Learn about our committment to Pledge 1%</Link>
                <Link className="arrow cta">Explore our non-profit program</Link>
              </div>
            </div>
          </div>
        </div>
      </section>
      <CTA/>
    </Layout>
    </>
  )
}

