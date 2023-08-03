import React from "react";

import '../assets/css/main.scss';

import classicCard from "../assets/imgs/carta.png";


class Main extends React.Component {
    render() {
        return (
            <React.Fragment>

                <div class="container">
                    <div class="cta-form">
                        <h2>Fill out the form!</h2>
                    </div>
                    <form action="" class="form">

                        <input type="text" placeholder="Name" class="form__input" id="name" />
                        <label for="name" class="form__label">Name</label>

                        <input type="email" placeholder="Email" class="form__input" id="email" />
                        <label for="email" class="form__label">Email</label>

                        <input type="text" placeholder="Subject" class="form__input" id="subject" />
                        <label for="subject" class="form__label">Subject</label>

                    </form>
                </div>

                <section id="results">
                    <div className="container cards">
                        <div className="row" id="cards">
                            {/* eslint-disable-next-line jsx-a11y/heading-has-content */}
                            <h1 id="msgUser"></h1>
                            <br />
                            <div className="flip-box col-lg-3 col-md-3 col-sm-12">
                                <div id="boxCard1" className="flip-box-inner">
                                    <div className="flip-box-front">
                                        <img className="back" src={classicCard} alt="reverso carta" />
                                    </div>
                                    <div className="flip-box-back">
                                        <img id="card1" className="back" src={classicCard} alt="carta con resultados" />
                                    </div>
                                </div>
                            </div>
                            <div id="boxCard2" className="flip-box col-lg-3 col-md-3 col-sm-12">
                                <div className="flip-box-inner">
                                    <div className="flip-box-front">
                                        <img className="back" src={classicCard} alt="reverso carta" />
                                    </div>
                                    <div className="flip-box-back">
                                        <img id="card2" className="back" src={classicCard} alt="carta con resultados" />
                                    </div>
                                </div>
                            </div>
                            <div id="boxCard3" className="flip-box col-lg-3 col-md-3 col-sm-12">
                                <div className="flip-box-inner">
                                    <div className="flip-box-front">
                                        <img className="back" src={classicCard} alt="reverso carta" />
                                    </div>
                                    <div className="flip-box-back">
                                        <img id="card3" className="front" src={classicCard} alt="carta con resultados" />
                                        <a href="http://" id="typeAyur" target="_blank" rel="noreferrer">aqui</a>
                                        <a href="http://" id="balanceAyur" target="_blank" rel="noreferrer">aqui</a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

            </React.Fragment >
        );
    }
}

export default Main;