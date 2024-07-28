import React from 'react';
import './Card.css';
import backImage from '../pictures/back.png';

const Card = ({ painting, handleClick, isFlipped}) => {
    return (
        <div className={`card ${isFlipped ? 'flipped' : ''}`} onClick={() => handleClick(painting.uniqueId)}>
            <div className="front">
                <img src={painting.url} alt={painting.name} />
            </div>
            <div className="back" style={{ backgroundImage: `url(${backImage})` }}>
            </div>
        </div>
    );
};

export default Card;
