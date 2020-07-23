import React from "react";
import "./Banner.scss";





export default class Header extends React.Component {
    render() {
        return (
            <section role="complementary" className="baner">
                <div className="baner-container">
                    <p className="baner__text">Всю необходимую информацию о том, как и в каком центре<br />
                        сделать МРТ, КТ и рентген исследованиях, cравнить интересующие<br />
                        Вас клиники, цены на диагностику и порядок прохождения<br />
                        процедур, а также записаться на исследование можно по<br />
                        телефону 8 (812) 385-77-56</p>
                    <h2 className="baner__heading">Оставьте свой номер, а мы <br />Вам перезвоним</h2>
                    <form className="baner-form">
                        <input type="tel" placeholder="+380" name="phone" role="form" />
                            <button name="phone" role="button">Отправить</button>
                    </form>
                </div>
            </section>


    );
    }


}