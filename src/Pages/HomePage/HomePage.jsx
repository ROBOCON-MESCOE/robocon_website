import React, { createFactory } from 'react';
import EventsHome from '../../Components/EventsHome/EventsHome';
import Home from '../../Components/Home/Home';
import OurSponsors from '../../Components/OurSponsors/OurSponsors';
import TeamAnonymous from '../../Components/TeamAnonymous/TeamAnonymous';

const HomePage = () => {
    return (
        <div>
            <Home />
            <TeamAnonymous />
            <OurSponsors />
            <EventsHome />
        </div>
    );
}

export default HomePage;