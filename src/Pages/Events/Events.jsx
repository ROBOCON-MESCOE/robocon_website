import React from "react";
import OurEvents from '../../Components/OurEvents/OurEvents';
import OurEventsBg from "../../Components/OurEventsBg/OurEventsBg";
import Gallery from "../../Components/Gallery/Gallery"
const Events = () => {
    return (
        <div>
            <OurEventsBg />
            <OurEvents />
            <Gallery />
        </div>
    );
}

export default Events;