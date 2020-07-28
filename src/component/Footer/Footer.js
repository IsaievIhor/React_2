import React from "react";
import "./Footer.scss";
import Phone from "../Phone/Phone";
export default class Footer extends React.Component {
    render() {
        return (

            <footer>
                <div className="footer-top">
                    <div className="container">
                        <div className="logo">
                            <img className="logo__img" src="img/logo.png" alt="logo" />
                                <p className="logo__text">Единый центр <br />записи</p>
                        </div>
                        <div className="footer__form">
                            <Phone Phone={380932664618} Plus={1} />
                        </div>
                    </div>
                </div>
                <div className="footer__container">
                    <div className="contacts">
                        <p>Get in touch</p>
                        <ul className="footer__adress-link">
                            <li className="link">
                                <img src="img/Icon1.png" />
                                    <p>free@psdfreebies.com <br /> free@psdfreebies.com</p>
                            </li>
                            <li className="link">
                                <img src="img/Icon2.png" />
                                    <p>+123 456 7890 <br /> +123 456 7890</p>
                            </li>
                            <li className="link">
                                <img src="img/Icon3.png" />
                                    <p>123, Main Road, New City,<br /> My Country 123456</p>
                            </li>
                            <li className="link">
                                <img src="img/social.png" />
                            </li>
                        </ul>


                    </div>

                    <div className="footer__link">
                        <p>Quick links</p>
                        <ul className="item">
                            <li>&#9658;<a href="#">About us </a></li>
                            <li>&#9658;<a href="#">Blog</a></li>
                            <li>&#9658;<a href="#">Contact us</a></li>
                            <li>&#9658;<a href="#">Faq</a></li>
                            <li>&#9658;<a href="#">Insurance</a></li>
                            <li>&#9658;<a href="#">Contact us</a></li>

                        </ul>
                    </div>

                    <div className="footer__link">
                        <p>Our services</p>
                        <ul className="footer__service-link">
                            <li>&#9658;<a href="#">Work Injuries </a></li>
                            <li>&#9658;<a href="#">Sport Injuries</a></li>
                            <li>&#9658;<a href="#">Cold Laser Therapy</a></li>
                            <li>&#9658;<a href="#">Massage Therapy</a></li>
                            <li>&#9658;<a href="#">Physiotherapy</a></li>
                            <li>&#9658;<a href="#">Chiropratic Therapy</a></li>

                        </ul>
                    </div>

                    <div className="footer__contact">
                        <p>Enquire form</p>
                        <form>
                            <div><input type="text" placeholder="name" /></div>
                            <div><input type="tel" placeholder="phone" /></div>
                            <div><textarea placeholder="messages"></textarea></div>
                            <div>
                                <button>Submit</button>
                            </div>
                        </form>
                    </div>
                </div>
                <div className="footer__copiryte">
                    <p>Copiright &#169; 2017</p>
                </div>
                <div>

                </div>
            </footer>

        );
    }


}

