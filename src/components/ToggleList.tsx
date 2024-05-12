import React, { useState, useRef } from 'react';
// import emailjs from '@emailjs/browser';


const ToggleList = ({ action }: { action: any }) => {
    const [showMore, setShowMore] = useState(false);

    const showMoreAction = (action) = setShowMore(action)

    return (
        <>
            <div
                onClick={() => setShowMore(!showMore)}
                className="card--techstack show--more"
            >
                <span>Show Less...</span>
            </div >

            <div
                onClick={() => setShowMore(!showMore)}
                className="card--techstack show--more"
            >
                <span>Show More...</span>
            </div></>
    )
}

export default ToggleList