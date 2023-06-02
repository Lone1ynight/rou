import React from "react";
import rou from '../../img/footer/logo.png'
import {Link} from "react-scroll";
export const Footer = () => {
    return (
        <footer className="footer">

            <div className="footer_upper">

                <div className="footer__content">
                    <img className="footer__content_photo" src={rou} alt=""/>
                        <div className="footer__content_text">Fectetur adipisicing elit, sed do eius mod tempor Lorem
                            ipsum dolor sit amet, con sectetur adipisicing elitt ut labore
                        </div>
                        <input className="footer__content_input" type="email" name="" id="" placeholder="Submit email"/>
                </div>

                <div className="footer__column_block">

                    <div className="footer__column">

                        <div className="footer__column_title">About</div>
                        <Link to='about' className="footer__column_item" activeClass="active" spy={true} smooth={true} offset={50} duration={200}>About us</Link>
                        <Link to="service"  className="footer__column_item" activeClass="active" spy={true} smooth={true} offset={50} duration={200}>Service</Link>
                        <Link to="work"  className="footer__column_item" activeClass="active" spy={true} smooth={true} offset={50} duration={200}>Our Story</Link>
                        <Link to="team"  className="footer__column_item" activeClass="active" spy={true} smooth={true} offset={50} duration={200}>Success</Link>
                        <Link to="contact" className="footer__column_item" activeClass="active" spy={true} smooth={true} offset={50} duration={200}>Support</Link>

                    </div>

                    <div className="footer__column">

                        <div className="footer__column_title">Service</div>
                        <a href="" className="footer__column_item">Development</a>
                        <a href="" className="footer__column_item">Maintanance</a>
                        <a href="" className="footer__column_item">Consultancy</a>
                        <a href="" className="footer__column_item">Design</a>

                    </div>

                    <div className="footer__column">
                        <div className="footer__column_title">Get in Touch</div>
                        <a href="" className="footer__column_item">
                            <i className="fa fa-map-marker" aria-hidden="true"></i>
                            <div className="footer__column_item_text">22/1 Bardeshi, Amin Bazar<br/>Dhaka 1348</div>
                        </a>
                        <a href="mailto:vladislav.salii@gmail.com" className="footer__column_item">
                            <i className="fa fa-envelope-o" aria-hidden="true"></i>
                            <div className="footer__column_item_text">vladislav.salii@gmail.com</div>
                        </a>
                        <a href="tel:0986314926" className="footer__column_item">
                            <i className="fa fa-phone" aria-hidden="true"></i>
                            <div className="footer__column_item_text">+38 098 63 14 926</div>
                        </a>
                    </div>


                </div>


            </div>

            <div className="copyright">

                <div className="copyright__left">

                    <div className="copyright__left_text">Follow Us</div>
                    <div className="copyright__left_social">
                        <i className="fa fa-facebook" aria-hidden="true"></i>
                    </div>
                    <div className="copyright__left_social">
                        <i className="fa fa-twitter" aria-hidden="true"></i>
                    </div>
                    <div className="copyright__left_social">
                        <i className="fa fa-youtube-play" aria-hidden="true"></i>
                    </div>
                    <div className="copyright__left_social">
                        <i className="fa fa-instagram" aria-hidden="true"></i>
                    </div>

                </div>

                <div className="copyright__right">All rights reserved &copy;<span> Salii Vladislav </span> 2020</div>
            </div>

        </footer>
    )
}