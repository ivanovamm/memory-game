import React from 'react';

const Card = ({ painting, handleClick, isFlipped, isMatched }) => {
    return (
        <div className={`card ${isFlipped ? 'flipped' : ''}`} onClick={() => handleClick(painting.id)}>
            <div className="front">
                <img src={painting.url} alt={painting.name} />
            </div>
            <div className="back">
                <img src='src/pictures/back.png'/>
            </div>
        </div>
    );
};

export default Card;
