import {data} from "../data";
import Card from "./Card";
import '../style/GameBoard.css'
import {useEffect, useState} from "react";


function shuffle(array) {
    const length = array.length;
    for (let i = length; i > 0; i--) {
        const randomIndex = Math.floor(Math.random() * i);
        const currentIndex = i - 1;
        const temp = array[currentIndex];
        array[currentIndex] = array[randomIndex];
        array[randomIndex] = temp;
    }
    return array;
}

export default function GameBoard() {

    const [cards, setCards] = useState(shuffle.bind(null, data.concat(data)))
    const [openCards, setOpenCards] = useState([])
    const [matchedCards, setMatchedCards] = useState([])
    const handleCardClick = (index) => {
        if (openCards.length < 2) {
            setOpenCards((prev) => [...prev, index]);
        }
    }

    const checkCardMatch = () => {
        const [firstCard, secondCard] = openCards
        if (cards[firstCard].name === cards[secondCard].name) {
            setMatchedCards(prevState => [firstCard, secondCard, ...prevState])
        }
    }

    useEffect(() => {
        if (openCards.length === 2) {
            checkCardMatch()
            setTimeout(() => {
                setOpenCards([])
            },1000)

        }
    }, [openCards])


    const checkIsPicked = (index) => {
        return Boolean(openCards.includes(index))
    }
    const checkIsMatched = (index) => {

        return Boolean(matchedCards.includes(index))
    }


    return <div className='game-board'>
        {cards.map((item, index) => {
            return <Card
                key={index}
                index={index}
                cardLogo={item.img}
                onClick={handleCardClick}
                isPicked={checkIsPicked(index)}
                isMatched={checkIsMatched(index)}

            />
        })}
    </div>
}

// key={index}
// card={card}
// index={index}
// isDisabled={shouldDisableAllCards}
// isInactive={checkIsInactive(card)}
// isFlipped={checkIsFlipped(index)}
// onClick={handleCardClick}