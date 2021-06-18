import React from 'react';
import { SiInstagram } from 'react-icons/si';
import { FaFacebookSquare, FaTwitterSquare } from 'react-icons/fa';
import { ImLinkedin } from 'react-icons/im';
import './OurTeam.css';

const OurTeams = () => {
    return (
        <div className="flex flex-row ma4">
            <div className="mw5 center bg-white br3 pa3 pa4-ns mv3 ba b--black-10 box">
                <div className="tc">
                    <img src="http://tachyons.io/img/avatar_1.jpg" className="br-100 h3 w3 dib" title="Photo of a kitty staring at you" />
                    <h1 className="f4">Tanmay Jagtap</h1>
                    <h6> CEO, debugged.exe</h6>
                    <hr class="mw3 bb bw1 b--black-10" />
                </div>
                <p class="lh-copy measure center f6 black-70 ">
                    Quite affectionate and outgoing.
                    She loves to get chin scratches and will
                    roll around on the floor waiting for you give her more of them.
                </p>

                <div className="footer-social-icons flex items-center" >
                    <SiInstagram size="1.7rem" color="#000000" className="ma1" />
                    <FaFacebookSquare size="1.7rem" color="#000000" className="ma1" />
                    <FaTwitterSquare size="1.7rem" color="#000000" className="ma1" />
                    <ImLinkedin size="1.7rem" color="#000000" className="ma1" />
                </div>
            </div>

            <div className="mw5 center bg-white br3 pa3 pa4-ns mv3 ba b--black-10 box">
                <div className="tc">
                    <img src="http://tachyons.io/img/avatar_1.jpg" className="br-100 h3 w3 dib" title="Photo of a kitty staring at you" />
                    <h1 className="f4">Tanmay Jagtap</h1>
                    <h6> CEO, debugged.exe</h6>
                    <hr class="mw3 bb bw1 b--black-10" />
                </div>
                <p class="lh-copy measure center f6 black-70">
                    Quite affectionate and outgoing.
                    She loves to get chin scratches and will
                    roll around on the floor waiting for you give her more of them.
                </p>

                <div className="footer-social-icons flex items-center" >
                    <SiInstagram size="1.7rem" color="#000000" className="ma1" />
                    <FaFacebookSquare size="1.7rem" color="#000000" className="ma1" />
                    <FaTwitterSquare size="1.7rem" color="#000000" className="ma1" />
                    <ImLinkedin size="1.7rem" color="#000000" className="ma1" />
                </div>

            </div>

        </div>


    );
}

export default OurTeams;