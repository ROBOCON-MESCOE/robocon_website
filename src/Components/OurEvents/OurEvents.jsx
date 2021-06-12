import React from "react";
import './OurEvents.css';

const OurEvents = () => {
    return (
        <div className="flex justify-around mb4">
            <div className="w-50 flex justify-center items-center">
                <img style={{height:"360px"}} src="https://images.unsplash.com/photo-1485827404703-89b55fcc595e?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=750&q=80" alt=" "></img>
            </div>
            <div className="w-50 flex flex-column justify-center items-center">
                <h1>Heading</h1>
                <p className="ph4">In publishing and graphic design, Lorem ipsum is a placeholder text commonly used to demonstrate the visual form of a document or a typeface without relying on meaningful content. Lorem ipsum may be used as a placeholder before final copy is available.</p>
                <a class="f6 link shadow-5 ph3 pv2 white bg-dark-blue grow" href="#0">Button Text</a>
            </div>
        </div>
    );
}

export default OurEvents;