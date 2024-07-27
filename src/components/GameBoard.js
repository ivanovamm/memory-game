import React, { useState, useEffect } from 'react';
import Card from './Card';
import paintings from '../data';

const GameBoard = () => {
    const [cards, setCards] = useState([]);
    const [flippedCards, setFlippedCards] = useState([]);
    const [matchedCards, setMatchedCards] = useState([]);

    useEffect(() => {
        const shuffledCards = [...paintings, ...paintings]
            .sort(() => Math.random() - 0.5)
            .map(painting => ({ ...painting, id: Math.random() }));

        setCards(shuffledCards);
    }, []);

    const handleClick = id => {
        if (flippedCards.length === 2 || flippedCards.includes(id) || matchedCards.includes(id)) return;

        setFlippedCards(prev => [...prev, id]);

        if (flippedCards.length === 1) {
            const [firstId] = flippedCards;
            const firstCard = cards.find(card => card.id === firstId);
            const secondCard = cards.find(card => card.id === id);

            if (firstCard.name === secondCard.name) {
                setMatchedCards(prev => [...prev, firstId, id]);
            }

            setTimeout(() => setFlippedCards([]), 1000);
        }
    };

    return (
        <div className="game-board">
            {cards.map(painting => (
                <Card
                    key={painting.id}
                    painting={painting}
                    handleClick={handleClick}
                    isFlipped={flippedCards.includes(painting.id)}
                    isMatched={matchedCards.includes(painting.id)}
                />
            ))}
        </div>
    );
};

export default GameBoard;
