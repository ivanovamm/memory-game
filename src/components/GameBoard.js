import React, { useState, useEffect } from 'react';
import Card from './Card';
import paintings from '../data';
import './GameBoard.css';

const shuffleArray = (array) => {
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }
    return array;
};

const GameBoard = () => {
    const [cards, setCards] = useState([]);
    const [flippedCards, setFlippedCards] = useState([]);
    const [matchedCards, setMatchedCards] = useState([]);

    useEffect(() => {
        const shuffledCards = shuffleArray([...paintings, ...paintings].map((painting, index) => ({ ...painting, uniqueId: index + '-' + painting.name })));
        setCards(shuffledCards);
    }, []);

    const handleClick = uniqueId => {
        if (flippedCards.length === 2 || flippedCards.includes(uniqueId) || matchedCards.includes(uniqueId)) return;

        setFlippedCards(prev => [...prev, uniqueId]);

        if (flippedCards.length === 1) {
            const [firstUniqueId] = flippedCards;
            const firstCard = cards.find(card => card.uniqueId === firstUniqueId);
            const secondCard = cards.find(card => card.uniqueId === uniqueId);

            if (firstCard.name === secondCard.name) {
                setMatchedCards(prev => [...prev, firstUniqueId, uniqueId]);
            }

            setTimeout(() => setFlippedCards([]), 1000);
        }
    };

    return (
        <div className="game-board">
            {cards.map(painting => (
                <Card
                    key={painting.uniqueId}
                    painting={painting}
                    handleClick={handleClick}
                    isFlipped={flippedCards.includes(painting.uniqueId) || matchedCards.includes(painting.uniqueId)}
                    isMatched={matchedCards.includes(painting.uniqueId)}
                />
            ))}
        </div>
    );
};

export default GameBoard;
