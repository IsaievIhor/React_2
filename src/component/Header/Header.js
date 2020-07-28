import React from "react";
import "./Header.scss";
import Phone from "../Phone/Phone";


export default class Header extends React.Component {
    render() {
        return (
            <header role="banner" aria-label="шапка сайта" className="header">
                <div className="container">
                    <div className="logo" aria-label="логотип сайта">
                        <img src="#" alt="Единый центр записи" className="logo__img" />
                        <p className="logo__text">Единый <br />Центр Записи</p>
                    </div>
                    <a href="tel:80300 5000" className="header__number">
                        <img src="img/phone-square.png" alt="телефон" className="header__phone_img" />
                            <Phone  Phone ={380932664618} Plus={1}/>
                    </a>

                    <div className="header__phone" role="" aria-label="телефон компании 80300 5000">
                        <nav role="navigation" aria-label="главное меню" className="header__nav">
                            <ul className="header__topmenu">
                                <li><a className="header__topmenu_link header__topmenu_link-active" href="#">Главная</a>
                                </li>
                                <li><a className="header__topmenu_link">Услуги&darr;</a>
                                    <ul className="header__submenu">
                                        <li>КТ</li>
                                        <li>МРТ</li>
                                        <li>УЗИ</li>
                                        <li>Рентген</li>
                                    </ul>
                                </li>
                                <li><a className="header__topmenu_link" href="#">Клиники&nbsp;и&nbsp;кабинеты</a></li>
                                <li><a className="header__topmenu_link" href="#">О&nbsp;нас</a></li>
                                <li><a className="header__topmenu_link" href="#">Статьи</a></li>
                                <li><a className="header__topmenu_link" href="#">FAQ</a></li>
                                <li><a className="header__topmenu_link" href="#">Контакты</a></li>
                            </ul>
                        </nav>
                    </div>
                </div>
            </header>
        );
    }


}