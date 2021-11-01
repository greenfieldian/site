import React from 'react'
import { Link } from 'gatsby'
import { Helmet } from "react-helmet"
import Footer from "../components/footer"

import DonateImg from "../assets/philanthropy.png"
import Favicon from "../assets/favicon.png"

import * as homepageStyles from "./homepage.module.css"
import Header from '../components/header'
import CTA from '../components/ctaComponent'


export default function Index() {
  return (
    <>
      <Helmet>
        <meta charSet="utf-8" />
        <title>Home | Shockmouse Media</title>
        <link rel="canonical" href="http://mysite.com/example" />
        <link rel="icon" href={Favicon} />
      </Helmet>

    <Header />
      <div className={homepageStyles.hero}>
        <div className={homepageStyles.bg}></div>
        <div className={homepageStyles.section_content}>
          <Link className={homepageStyles.hero_photo_render}></Link>
          <div className="text-wrapper container">
            <div className="text-render">
              <h2 className={homepageStyles.hero_headline + " " + "headline"}>Bridging the gap between you and your objectives</h2>
              <p className="description">We're a strategic agency leveraging technology to bridge the gap between you and your objectives.</p>
              <div className={homepageStyles.cta_container}>
                <Link to="/about-us" className="cta arrow">Learn more about who we are</Link>
                <Link to="/contact-us" className="cta arrow">Start a conversation</Link>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="wrapper">
        <section>
          <div className="reverse-mobile">
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
            <div className={"item bg-white two-up-right" + " " + homepageStyles.hybrid_post_image + " " + homepageStyles.post_image}>
              <div></div>
            </div>
          </div>
        </section>
        <section>
          <div>
            <div className={"item bg-lightest-grey" + " " + homepageStyles.analytics_post_image + " " + homepageStyles.post_image}></div>
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
          <div className="reverse-mobile">
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
            <div className={"item bg-white two-up-right" + " " + homepageStyles.web3_post_image + " " + homepageStyles.post_image}></div>
          </div>
        </section>
      </div>
      <div className={homepageStyles.blog_feature}>
        <div className={homepageStyles.header_wrapper}>
          <h2 className={"section-header section-header centered" + " " + homepageStyles.blog_header}>From our blog</h2>
        </div>
        <div className={homepageStyles.blog_feature_wrapper}>
          <div className={homepageStyles.blog_feature_container}>
            <div className={homepageStyles.feature_row}>
              <div className={homepageStyles.feature_container}>
                <Link className={homepageStyles.feature_inner}>
                  <div className={homepageStyles.feature_background_1 + " " + homepageStyles.feature_background}></div>
                  <div className={homepageStyles.feature_content}>
                    <time>October 12, 2021</time>
                    <h3>Moving forward: Our stance on advancing racial equity in America</h3>
                  </div>
                </Link>
              </div>
              <div className={homepageStyles.feature_container}>
                <div className={homepageStyles.feature_2_3_container}>
                  <Link className={homepageStyles.feature_inner + " " + homepageStyles.feature_2}>
                    <div className={homepageStyles.feature_background_2 + " " + homepageStyles.feature_background}></div>
                    <div className={homepageStyles.feature_content}>
                      <time>August 15th, 2021</time>
                      <h3>From designers for designers: Where to look for design inspiration</h3>
                    </div>
                  </Link>
                  <Link className={homepageStyles.feature_inner + " " + homepageStyles.feature_3}>
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
                <Link className={homepageStyles.feature_inner}>
                  <div className={homepageStyles.feature_background_3 + " " + homepageStyles.feature_background}></div>
                  <div className={homepageStyles.feature_content}>
                    <time>September 15th, 2021</time>
                    <h3>Product pricing: Our pricing strategy to maximize conversions</h3>
                  </div>
                </Link>
              </div>
              <div className={homepageStyles.feature_container}>
                <Link className={homepageStyles.feature_inner}>
                  <div className={homepageStyles.feature_background_4 + " " + homepageStyles.feature_background}></div>
                  <div className={homepageStyles.feature_content}>
                    <time>September 15th, 2021</time>
                    <h3>How Digital Nomads can Avoid the Dreaded Freelancer Curse</h3>
                  </div>
                </Link>
                <div className={homepageStyles.read_more_container}>
                  <Link className="cta arrow-white" to="/blog">Read more on our blog</Link>
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
      <Footer />
    </>
  )
}

