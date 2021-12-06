import * as React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { CardActionArea } from "@mui/material";
import styles from "./card.module.css";

const ActionAreaCard = ({ imgSrc, title, text }) => {
  return (
    <div className={styles.card1}>
      <Card sx={{ maxWidth: 345 }} className={styles.slika}>
        <CardActionArea>
          <CardMedia component="img" src={imgSrc} height="140" />
          <CardContent>
            <Typography gutterBottom variant="h5" component="div">
              {title}
            </Typography>
            <Typography variant="body2" color="text.secondary">
              {text}
            </Typography>
          </CardContent>
        </CardActionArea>
      </Card>
    </div>
  );
};

export default ActionAreaCard;
