import React, { useState } from "react";

import Grid from "@mui/material/Grid";
import Button from "@mui/material/Button";

import GameCard, {
  CardColors,
  CardTypes,
  cTypes,
} from "components/GameCard/GameCard";

import classes from "./Cards.module.css";

const Cards = () => {
  const [cardType, setCardType] = useState<CardTypes>("Ace");
  const [cardColor, setCardColor] = useState<CardColors>("cross");

  const toggleCardHandler = () => {
    let newType: CardTypes = "Back";
    const typeIndex = cTypes.indexOf(cardType);
    if (typeIndex < cTypes.length - 1) {
      newType = cTypes[typeIndex + 1] as CardTypes;
    } else {
      newType = cTypes[0] as CardTypes;
    }
    setCardType(newType);

    if (typeIndex === 0) {
      let newColor: CardColors = "cross";
      switch (cardColor) {
        case "cross":
          newColor = "heart";
          break;
        case "heart":
          newColor = "spades";
          break;
        case "spades":
          newColor = "diamond";
          break;
        default:
          newColor = "cross";
      }
      setCardColor(newColor);
    }
  };

  return (
    <div className={classes.Container}>
      <Grid container>
        <Grid item xs={12}>
          <GameCard cardColor={cardColor} cardType={cardType} />
        </Grid>
        <Grid item xs={12}>
          <Button variant="contained" onClick={() => toggleCardHandler()}>
            Change Card
          </Button>
        </Grid>
      </Grid>
    </div>
  );
};

export default Cards;
