import React, { useState } from 'react';


export default function Card(){
    const [drawnCard, setDrawnCard] = useState<any>(null);

    const handleDrawCard = async () => {
        try {
        const response = await fetch('http://localhost:3000/blackjack/deal');
        if (!response.ok) {
            throw new Error('Failed to draw card');
        }
        const data = await response.json();
        console.log(data)
        setDrawnCard(data.card);
        } catch (error) {
        console.error('Error drawing card:', error);
        }
    };

    return (
        <div className="">
            <div className="">
            <button onClick={handleDrawCard}>Draw Card</button>
                {drawnCard && (
                    <div>
                    <p>Drawn Card: {drawnCard.value} of {drawnCard.suit}</p>
                    </div>
                )}
            </div>
        </div>
    )
}