import React from 'react'
import { Helmet } from 'react-helmet'
import Layout from '../components/layout'
import Hero from '../components/hero'
import { Swiper, SwiperSlide } from 'swiper/react';

import SystemsImg from "../assets/systems-photo.jpeg"
import AWSLogo from "../assets/aws-logo.png"
import HubspotLogo from "../assets/hubspot-darkgray.png"
import ShopifyLogo from "../assets/shopify-darkgray.png"
import MicrosoftLogo from "../assets/microsoft-lofo.png"
import TableauLogo from "../assets/tableau-logo.png"
import SalesforceLogo from "../assets/salesforce.png"

import * as partnerStyles from "../styles/partners.module.css"
import 'swiper/css'

export default function Partners() {
    return (
        <div>
            <Helmet>
                <meta charSet="utf-8" />
                <title>Partners | Shockmouse Media</title>
                <link rel="canonical" href="http://mysite.com/example" />
            </Helmet>
            <Layout>
                <Hero 
                    image={SystemsImg}
                    headline="We thrive on helping you figure out what's next."
                    description="Lorem ipsum dolor sit amet, consectetur adipscing elit, sed do eiusmod tompor incididunt ut labore et dolore magna aliqua."
                />
                <div>
                    <section className={partnerStyles.core_partners_container}>
                        <header className="container">
                            <h2 className={"section-header" + " " + partnerStyles.section_header}>Core Technology Partners</h2>
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
                    </section>
                    <section className={partnerStyles.additional_partner_container}>
                        <div className="container">
                            <div className="row">
                                <header>
                                    <h2 className={"section-header" + " " + partnerStyles.subsection_header}>But wait, there's more</h2>
                                </header>
                                <div className={partnerStyles.additional_main_container}>
                                    <h3>We work with nearly every major CRM, analytics, development and digital experience partner.</h3>
                                    <div className="">
                                        <Swiper
                                        spaceBetween={30}
                                        slidesPerView={2}
                                        onSlideChange={() => console.log('slide change')}
                                        onSwiper={(swiper) => console.log(swiper)}
                                        >
                                            <SwiperSlide>
                                                <div className={partnerStyles.additional_text_wrapper}>
                                                    <p className={partnerStyles.item_title}>Google Cloud</p>
                                                    <p className={partnerStyles.item_description}>Content management and multilevel marketing automation</p>
                                                </div>
                                            </SwiperSlide>
                                            <SwiperSlide>
                                                <div className={partnerStyles.additional_text_wrapper}>
                                                    <p className={partnerStyles.item_title}>Adobe</p>
                                                    <p className={partnerStyles.item_description}>Content management and multilevel marketing automation</p>
                                                </div>
                                            </SwiperSlide>
                                            <SwiperSlide>
                                                <div className={partnerStyles.additional_text_wrapper}>
                                                    <p className={partnerStyles.item_title}>Wordpress</p>
                                                    <p className={partnerStyles.item_description}>Content management and multilevel marketing automation</p>
                                                </div>
                                            </SwiperSlide>
                                            <SwiperSlide>
                                                <div className={partnerStyles.additional_text_wrapper}>
                                                    <p className={partnerStyles.item_title}>Contentful</p>
                                                    <p className={partnerStyles.item_description}>Content management and multilevel marketing automation</p>
                                                </div>
                                            </SwiperSlide>
                                        </Swiper>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>
                </div>
            </Layout>
        </div>
    )
}