import React from "react";

import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";

import dummy from "assets/images/cnc_640.png";

export type TMachineCard = {
  data: { image?: string; alt?: string; brand: string; model: string };
};

const MachineCard = (props: TMachineCard) => {
  const { data } = props;
  return (
    <Card sx={{ maxWidth: 345 }}>
      <CardMedia
        component="img"
        height="180"
        image={data.image || dummy}
        alt={data.alt || "machine image"}
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          {data.brand}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          {data.model}
        </Typography>
      </CardContent>
      <CardActions>
        <Button size="small">Share</Button>
        <Button size="small">Learn More</Button>
      </CardActions>
    </Card>
  );
};

export default MachineCard;
