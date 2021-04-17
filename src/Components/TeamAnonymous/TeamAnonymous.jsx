import React from 'react';
import './TeamAnonymous.css';

const TeamAnonymous = () => {
    return (
        <div className='pa2 ph4 mv4 flex justify-center items-center'>
            <div className="w-50 flex justify-center items-center">
                <img className="team-anonymous-logo" src="https://techcrunch.com/wp-content/uploads/2020/01/IMG_3280.jpg?w=600" alt="Logo"/>
            </div>
            <div className="w-50">
                <h1>Team Anonymous</h1> 
                <h2>Tagline</h2>
                <p>In publishing and graphic design, Lorem ipsum is a placeholder text commonly used to demonstrate the visual form of a document or a typeface without relying on meaningful content. Lorem ipsum may be used as a placeholder before final copy is available.</p> 
                <h2>What?</h2>
                <p>In publishing and graphic design, Lorem ipsum is a placeholder text commonly used to demonstrate the visual form of a document or a typeface without relying on meaningful content. Lorem ipsum may be used as a placeholder before final copy is available.</p> 
                <h2>How?</h2>
                <p>In publishing and graphic design, Lorem ipsum is a placeholder text commonly used to demonstrate the visual form of a document or a typeface without relying on meaningful content. Lorem ipsum may be used as a placeholder before final copy is available.</p> 
            </div>
        </div>
    );
}

export default TeamAnonymous;