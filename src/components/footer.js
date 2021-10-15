import { Link } from 'gatsby'
import React, { Component } from 'react'
import { FaLinkedin, FaMediumM, FaInstagram, FaYoutube } from "react-icons/fa";

import * as footerStyles from "./footer.module.css"

export default class Footer extends Component {
    render() {
        return (
            <div className="container">
                <section>
                    <div className={footerStyles.logo_icon}>
                    </div>
                    <div className={footerStyles.sub_links_container}>
                        <div className={footerStyles.sub_detail}>
                            <div></div>
                            <form method="POST" className={footerStyles.form_content}>
                                <label for="signupemail">Subscribe</label>
                                <p>Get exclusive insights sent directly to your mailbox.</p>
                                <div className={footerStyles.field_group}>
                                    <div className={footerStyles.field}>
                                        <div className={footerStyles.control}>
                                            <input type="email" placeholder="Email address" name="signupemail"/>
                                        </div>
                                    </div>
                                    <div className={footerStyles.field}>
                                        <div className={footerStyles.control}>
                                            <input type="submit" value="subscribe" />
                                        </div>
                                    </div>
                                </div>
                            </form>
                        </div>
                        <div className={footerStyles.links_detail}>
                            <div className={footerStyles.links_detail}>
                                <ul className={footerStyles.utility_links}>
                                    <li><Link>About Us</Link></li>
                                    <li><Link>Partners</Link></li>
                                    <li><Link>Insights</Link></li>
                                    <li><Link>Careers</Link></li>
                                    <li><Link>Contact Us</Link></li>
                                    <li><Link>Terms</Link></li>
                                    <li><Link>Sitemap</Link></li>
                                    <li><Link>Privacy Policy</Link></li>
                                </ul>
                            </div>
                                <div className={footerStyles.social_links}>
                                    <a><FaLinkedin size={25}/></a>
                                    <a><FaMediumM size={25}/></a>
                                    <a><FaInstagram size={25}/></a>
                                    <a><FaYoutube size={25}/></a>
                                </div>
                        </div>
                    </div>
                </section>
                <section className={footerStyles.footer_bottom}>
                    <div className={footerStyles.copyright}>© 2021 Shockmouse Media LLC</div>
                </section>
            </div>
        )
    }
}
