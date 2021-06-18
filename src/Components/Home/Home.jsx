import React from 'react';
import './Home.css';

const Home = () => {
    return (
        <div className="home-background">
            <aside className="left-side side-nav">
                <ul className="mr-auto ml-auto">
                    <li className="di pl3 grow">
                        <a
                            href="#0"
                            className="white f6 fw6 di black sidebar-links"
                            title="TELEGRAM"
                        >
                            TELEGRAM
                        </a>
                    </li>
                    <li className="di pl3">
                        <a
                            href={"#0"} target={'_blank'}
                            className="white f6 fw6 di black grow sidebar-links"
                            title="INSTAGRAM"
                        >
                            INSTAGRAM
                        </a>
                    </li>
                    <li className="di pl3 grow">
                        <a
                            href="#0" target={'_blank'}
                            className="white f6 fw6 di black sidebar-links"
                            title="TWITTER"
                        >
                            WHATSAPP
                        </a>
                    </li>
                </ul>
            </aside>
        </div>
    );
}

export default Home;