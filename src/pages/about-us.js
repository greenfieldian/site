import React from 'react'
import { Helmet } from 'react-helmet'
import Layout from '../components/layout'
import Hero from '../components/hero'
import Button from '../components/elements/button'
import { Link } from 'gatsby'

import DonateImg from "../assets/philanthropy.png"
import Favicon from "../assets/favicon.png"
import CTA from '../components/ctaComponent'

import * as aboutStyles from "../styles/about.module.css"
import * as partnerStyles from "../styles/partners.module.css"

import HomeImage from "../assets/Group 12.png"
import AWSLogo from "../assets/aws-logo.png"
import HubspotLogo from "../assets/hubspot-darkgray.png"
import ShopifyLogo from "../assets/shopify-darkgray.png"
import MicrosoftLogo from "../assets/microsoft-lofo.png"
import TableauLogo from "../assets/tableau-logo.png"
import SalesforceLogo from "../assets/salesforce.png"
import NonProfit from "../assets/non-profit-img.png"
import Pledge1 from "../assets/pledge-1-img.png"

export default function About() {
    return (
        <div>
            <Helmet>
                <meta charSet="utf-8" />
                <title>About Us | Shockmouse Media</title>
                <link rel="canonical" href="http://mysite.com/example" />
                <link rel="icon" href={Favicon} />
            </Helmet>
            <Layout>
                <Hero 
                    image={DonateImg}
                    headline="We thrive on helping you figure out what's next."
                    description="Lorem ipsum dolor sit amet, consectetur adipscing elit, sed do eiusmod tompor incididunt ut labore et dolore magna aliqua."
                />
                <section className="up section">
                    <header className="text-center">
                        <h3 className={"headline" + " " + aboutStyles.section_header}>Our Trusted Process</h3>
                    </header>
                    <div className={aboutStyles.grid_holder + " " + "container"}>
                        <div className={aboutStyles.animation_card}>
                            <div className={aboutStyles.animation_card_bg}>
                                <div className={aboutStyles.canvas_holder}>
                                    <div className={"text-render" + " " + aboutStyles.text_render}>
                                        <div className="text-wrapper">
                                            <h3 className="headline">
                                                Harness the power of data and analytics
                                                <div className="arrow"></div>
                                            </h3>
                                        </div>
                                        <div className={aboutStyles.cta_container}></div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className={aboutStyles.animation_card}>
                            <div className={aboutStyles.animation_card_bg}>
                                <div className={aboutStyles.canvas_holder}>
                                    <div className={"text-render" + " " + aboutStyles.text_render}>
                                        <div className="text-wrapper">
                                            <h3 className="headline">
                                                Build a digital culture
                                                <div className="arrow"></div>
                                            </h3>
                                        </div>
                                        <div className={aboutStyles.cta_container}></div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className={aboutStyles.animation_card}>
                            <div className={aboutStyles.animation_card_bg}>
                                <div className={aboutStyles.canvas_holder}>
                                    <div className={"text-render" + " " + aboutStyles.text_render}>
                                        <div className="text-wrapper">
                                            <h3 className="headline">
                                                Modernize core technology
                                                <div className="arrow"></div>
                                            </h3>
                                        </div>
                                        <div className={aboutStyles.cta_container}></div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
                <section className={partnerStyles.core_partners_container}>
                        <header className="container">
                            <div>
                                <h2 className={"section-header" + " " + partnerStyles.section_header}>Core Technology Partners</h2>
                            </div>
                            <div>
                                <div>We have strong partnerships with the world's top tech companies.</div>
                            </div>
                        </header>
                        <div className="container">
                            <div className="row">
                                <div className="col-12 col-lg-10 text-center pt-5">
                                    <div className={partnerStyles.core_partners_item}>
                                        <img src={AWSLogo}/>
                                    </div>
                                    <div className={partnerStyles.core_partners_item}>
                                        <img src={HubspotLogo}/>
                                    </div>
                                    <div className={partnerStyles.core_partners_item}>
                                        <img src={ShopifyLogo}/>
                                    </div>
                                    <div className={partnerStyles.core_partners_item}>
                                        <img src={MicrosoftLogo}/>
                                    </div>
                                    <div className={partnerStyles.core_partners_item}>
                                        <img src={TableauLogo}/>
                                    </div>
                                    <div className={partnerStyles.core_partners_item}>
                                        <img src={SalesforceLogo}/>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="container">
                            <div className={aboutStyles.button_link_container}>
                                <Link to="/partners">
                                    <Button label="View All"/>
                                </Link>
                            </div>
                        </div>
                    </section>
                    {/*<section className="up section">
                        <div className="container">
                            <h2 className={"headline text-center" + " " + aboutStyles.section_header}>Where we're from.</h2>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
                            <p>Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
                        </div>
                        <div className="container">
                            <img src={HomeImage}/>
                        </div>
                    </section>*/}
                    <section className={"up section" + " " + aboutStyles.values_container}>
                        <div className="container">
                            <header className="headline">
                                <h3 className={"section-header text-white text-center" + " " + partnerStyles.section_header}>Our Values</h3>
                            </header>
                            <ul>
                                <li>
                                    <div>
                                        <h4>Lorem Ipsum</h4>
                                        <p>Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantuium doloremque laudantium</p>
                                    </div>
                                </li>
                                <li>
                                    <div>
                                        <h4>Lorem Ipsum</h4>
                                        <p>Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantuium doloremque laudantium</p>
                                    </div>
                                </li>
                                <li>
                                    <div>
                                        <h4>Lorem Ipsum</h4>
                                        <p>Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantuium doloremque laudantium</p>
                                    </div>
                                </li>
                            </ul>
                        </div>
                    </section>
                    <section className="section up">
                        <div className="container">
                            <div className="row">
                                <header>
                                    <h2 className={"section-header" + " " + partnerStyles.section_header}>How We Give Back</h2>
                                    <p>At vero eos milique sunt in culpa qui officia deserunt mollitia animi</p>
                                </header>
                                <div>
                                    <div className={aboutStyles.hero_container}>
                                        <picture>
                                            <img src={Pledge1}/>
                                        </picture>
                                        <div className={aboutStyles.hero_overlay}>
                                            <div className={aboutStyles.text_wrapper + " " + "container"}>
                                                <h2 className="headline"></h2>
                                                <p className="description"></p>
                                            </div>
                                        </div>
                                    </div>
                                    <div className={aboutStyles.hero_container}>
                                        <picture>
                                            <img  src={NonProfit}/>
                                        </picture>
                                        <div className={aboutStyles.hero_overlay}>
                                            <div className={aboutStyles.text_wrapper + " " + "container"}>
                                                <h2 className="headline"></h2>
                                                <p className="description"></p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>
                <CTA />
            </Layout>
        </div>
    )
}
