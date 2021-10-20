import React from 'react'
import { Helmet } from 'react-helmet'
import { Link } from 'gatsby'
import Hero from '../components/hero'
import Layout from '../components/layout'

import DonateImg from "../assets/philanthropy.png"
import Favicon from "../assets/favicon.png"

import * as contactStyles from "../styles/contact.module.css"

<script src="https://www.google.com/recaptcha/api.js"></script>

export default function Contact() {
    return (
        <div>
            <Helmet>
                <meta charSet="utf-8" />
                <title>Contact Us | Shockmouse Media</title>
                <link rel="canonical" href="http://mysite.com/example" />
                <link rel="icon" href={Favicon} />
            </Helmet>
            <Layout>
                <Hero 
                    image={DonateImg}
                    headline="We thrive on helping you figure out what's next."
                    description="Lorem ipsum dolor sit amet, consectetur adipscing elit, sed do eiusmod tompor incididunt ut labore et dolore magna aliqua."
                />
                <div>
                    <div className="wrapper">
                        <div className="container">
                            <div className={contactStyles.main}>
                                <article>
                                    <header>
                                        <h1 className="title headline">Get in touch</h1>
                                        <div>
                                            <p className="lead">Thank you for your interest in Shockmouse Media. Please fill out the form below and we’ll be in touch shortly.</p>
                                            <div className={contactStyles.form_group}>
                                                <fieldset className={contactStyles.form_fieldset}>
                                                    <legend>I'm reaching out about: </legend>
                                                    <div className={contactStyles.fieldset_column_3}>
                                                        <div className={contactStyles.fieldset_option}>
                                                            <label>
                                                                <input type="radio" checked="checked" name="contactRadio"/>
                                                                <span>Project Inquiry</span>
                                                            </label>
                                                        </div>
                                                        <div className={contactStyles.fieldset_option}>
                                                            <label>
                                                                <input type="radio" name="contactRadio"/>
                                                                <span>General</span>
                                                            </label>
                                                        </div>
                                                        <div className={contactStyles.fieldset_option}>
                                                            <label>
                                                                <input type="radio" name="contactRadio"/>
                                                                <span>Career Opportunities</span>
                                                            </label>
                                                        </div>
                                                    </div>
                                                    <div className={contactStyles.fieldset_column_3}>
                                                        <div className={contactStyles.fieldset_option}>
                                                            <label>
                                                                <input type="radio" name="contactRadio"/>
                                                                <span>Speaking</span>
                                                            </label>
                                                        </div>
                                                        <div className={contactStyles.fieldset_option}>
                                                            <label>
                                                                <input type="radio" name="contactRadio"/>
                                                                <span>Customer Support</span>
                                                            </label>
                                                        </div>
                                                    </div>
                                                </fieldset>
                                            </div>
                                            <div className={contactStyles.form_group}>
                                                <label>Name</label>
                                                <input type="text" />
                                            </div>
                                            <div className={contactStyles.form_group}>
                                                <label>Phone</label>
                                                <input type="text" />
                                            </div>
                                            <div className={contactStyles.form_group}>
                                                <label>Company</label>
                                                <input type="text" />
                                            </div>
                                            <div className={contactStyles.form_group}>
                                                <label>Website/URL</label>
                                                <input type="text" />
                                            </div>
                                            <div className={contactStyles.form_group}>
                                                <label>Message</label>
                                                <textarea maxLength="512"/>
                                            </div>
                                            <div className={contactStyles.form_group}>
                                                <label>Security Validation</label>
                                                
                                            </div>
                                            <div className={contactStyles.privacy_disclosure}>
                                                <p className="collapsed">Shockmouse Media is committed to protecting your information in accordance with its privacy policy.</p>
                                                <p className="expanded"></p>
                                            </div>
                                            <div>
                                                <input type="submit" value="Let's Talk"/>
                                            </div>
                                        </div>
                                    </header>
                                </article>
                            </div>
                            <div className={contactStyles.rail}>
                                <section className="up">
                                    <h2 className="section-header">Media Inquiries</h2>
                                    <div>
                                        <div className="item">
                                            <div className="text-wrapper">
                                                <div className="description">
                                                    <p>Visit our <Link>media center</Link> to find contact details for our media relations team.</p>
                                                    <p>To request permission to republish an article, or if you have any questions about the usage of content published by Shockmouse Media, fill out our contact form.</p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </section>
                            </div>
                        </div>
                    </div>
                </div>
            </Layout>
            
        </div>
    )
}
