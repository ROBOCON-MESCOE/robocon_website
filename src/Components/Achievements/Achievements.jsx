import React from 'react';
import './Achievements.css';
import Illust from "./Achieve_Illust.svg";

const Achievements = () => {
    return (
        <div className="flex flex-row items-center mb4 mt4 achieve">
            <div className="flex flex-column ml5">
                <h1 className="mb1 heading">Our Achievements</h1>
                <p> Lorem ipsum dolor sit amet consectetur adipisicing elit. Sequi error expedita aliquam natus doloribus aliquid</p>
                <div>
                    <a className="f5 link grow ph4 pv2 mb2 dib white button-color items-center" href="#0"> Read More </a>
                </div>
            </div>

            <div className="flex ml5">
                <img src={Illust} alt="Achievments" />
            </div>
        </div>
    )
}

export default Achievements;