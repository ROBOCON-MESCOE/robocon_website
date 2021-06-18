import React from 'react';
import { SiInstagram } from 'react-icons/si';
import { FaFacebookSquare, FaTwitterSquare } from 'react-icons/fa';
import { ImLinkedin } from 'react-icons/im';


const Footer = () => {
    return (
        <div>
            <div className="footer-top flex justify-around items-start">
                <div className="footer-left w-25 flex flex-column justify-center items-center">
                    <div className="footer-logo"> <img src="https://png.pngtree.com/element_pic/00/16/07/115783931601b5c.jpg" alt="logo" style={{ height: "100px", width: "100px" }} />
                    </div>
                    <div className="footer-social-icons">
                        <SiInstagram size="1.7rem" color="#8a3ab9" />
                        <FaFacebookSquare size="1.7rem" color="#4267B2" />
                        <FaTwitterSquare size="1.7rem" color="#1DA1F2" />
                        <ImLinkedin size="1.7rem" color="#0077b5" />
                    </div>
                </div>

                <div className="footer-mid w-30 flex flex-column justify-center">
                    <h1 className="ma0 pa0">About Us</h1>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusamus sed, fuga alias cupiditate quam architecto animi consequatur quibusdam placeat ea nam adipisci deleniti quos, fugit rem nemo autem optio natus.</p>
                </div>

                <div className="footer-right w-40 flex justify-center items-center">
                    contact us
                </div>
            </div>
            {/* ------footer bottom------ */}
            <div className="bg-black white tc f4 pa3">
                Developed by <a className="b pointer white" href="https://debuggedexe.com/#/">debugged.exe</a>🐞
            </div>
        </div>

    );
}

export default Footer;