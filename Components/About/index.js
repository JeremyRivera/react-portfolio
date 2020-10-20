import React from 'react';
import './styles.css';







const About = props => {
    return (
        <div className="main__section">
            <div className="main__container">
                <h1>Hello, I'm Jeremy!</h1>
                <div className="main__content">
                    <div className="main__text">
                        <h2>
                            A Software Developer currently living in Ocala
                            , FL.
                        </h2>
                        <p>
                            There are many variations of passages of Lorem Ipsum available,
                            but the majority have suffered alteration in some form, by
                            injected humour, or randomised words which don't look even
                            slightly believable.
                        </p>
                    </div>
                    <div className="main__image">
                        <img src={props.src} alt="face" className="main__img" />
                    </div>
                </div>
            </div>
        </div>
    );
}
export default About;