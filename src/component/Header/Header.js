import React from "react";
import "./Header.scss";


export default class Header extends React.Component {
    render() {
        return (
            <header role="banner" aria-label="шапка сайта" className="header">
                <div className="container">
                    <div className="logo" aria-label="логотип сайта">
                        <img src="#" alt="Единый центр записи" className="logo__img" />
                        <p className="logo__text">Единый <br />Центр Записи</p>
                    </div>
                    <div className="header__phone" role="" aria-label="телефон компании 80300 5000">
                        <a href="tel:80300 5000" className="header__number">
                            <img src="#" alt="телефон" className="header__phone_img" />
                            <span className="header__phone_text">80300 5000</span>
                        </a>
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