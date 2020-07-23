import React from "react";
import "./Advantages.scss";


export default class Advantages extends React.Component {
    render() {
        return (

            <section className="advantages">
                <div className="advantages-card">
                    <div className="advantages-card__list advantages-card__list-first"><img
                        className="advantages-card_img"
                        src="img/advantages1.png" />
                        <h2>Best Treatment</h2>
                        <p>Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque
                            laudantium.</p>
                    </div>
                    <div className="advantages-card__list advantages-card__list-second"><img
                        className="advantages-card_img"
                        src="img/advantages2.png" />
                        <h2>Emergency Help</h2>
                        <p>Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque
                            laudantium.</p>
                    </div>
                    <div className="advantages-card__list advantages-card__list-third"><img
                        className="advantages-card_img"
                        src="img/advantages4.png" />
                        <h2>Medical Staff</h2>
                        <p>Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque
                            laudantium.</p>
                    </div>
                    <div className="advantages-card__list advantages-card__list-fourth"><img
                        className="advantages-card_img"
                        src="img/advantages3.png" />
                        <h2>Qualified Doctors</h2>
                        <p>Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque
                            laudantium.</p>
                    </div>

                </div>
            </section>

        );
    }


}