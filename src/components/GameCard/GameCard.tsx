import React, { useEffect, useState, useCallback } from "react";

import cardDeck from "assets/images/card-deck.png";

export type CardTypes =
  | "Ace"
  | "Two"
  | "Three"
  | "Four"
  | "Five"
  | "Six"
  | "Seven"
  | "Eight"
  | "Nine"
  | "Ten"
  | "Jack"
  | "Queen"
  | "King"
  | "Back";
export type CardColors = "cross" | "diamond" | "heart" | "spades";

interface ICardProps {
  cardColor: CardColors;
  cardType: CardTypes;
}

export const cTypes = [
  "Ace",
  "Two",
  "Three",
  "Four",
  "Five",
  "Six",
  "Seven",
  "Eight",
  "Nine",
  "Ten",
  "Jack",
  "Queen",
  "King",
];

const GameCard = (props: ICardProps) => {
  const [cardPosition, setCardPosition] = useState({ x: 0, y: 0 });

  const changeCardHandler = useCallback(() => {
    const cardNumber = cTypes.indexOf(props.cardType);
    const posX = cardNumber * -147.7;
    let posY = 0;
    switch (props.cardColor) {
      case "cross":
        posY = 0;
        break;
      case "diamond":
        posY = -230;
        break;
      case "heart":
        posY = -460;
        break;
      case "spades":
        posY = -690;
        break;
      default:
        posY = 0;
    }
    setCardPosition({ x: posX, y: posY });
  }, [props]);

  useEffect(() => {
    if (props.cardType === "Back") {
      setCardPosition({ x: 2 * -147.7, y: -920 });
    } else {
      changeCardHandler();
    }
  }, [props, changeCardHandler]);

  return (
    <div
      style={{
        backgroundImage: `url(${cardDeck})`,
        width: "148px",
        height: "230px",
        margin: "20px",
        backgroundPositionX: cardPosition.x,
        backgroundPositionY: cardPosition.y,
      }}
    />
  );
};

export default GameCard;
