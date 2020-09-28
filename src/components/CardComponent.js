import React, { useState, useEffect } from "react";
import {
  Typography,
  Box,
  Card,
  CardActionArea,
  CardMedia,
  CardContent,
  CardActions,
  Button,
} from "@material-ui/core";
import { makeStyles } from "@material-ui/core";
import axios from "axios";

const styles = makeStyles({
  cards: {
    display: "flex",
    flexWrap: "wrap",
    margin: "5px",
  },
  actualcard: {
    width: "48%",
    margin: "6px",
    padding: "2px",
  },
});

const CardComponent = ({ carddata }) => {
  console.log(carddata);

  const classess = styles();
  return (
    <Box>
      <Typography variant="h6" style={{ marginBottom: "1rem" }}>
        Wrap-tastic Match Combos
      </Typography>
      <Box className={classess.cards}>
        <Card className={classess.actualcard}>
          <CardActionArea>
            <CardMedia
              component="img"
              alt="Contemplative Reptile"
              height="140"
              image="https://product-assets.faasos.io/production/product/image_1597419412172_Artboard%201%20copy%2017.jpg"
              title="Contemplative Reptile"
            />
            <CardContent>
              <Typography gutterBottom variant="h5" component="h2">
                Wraps
              </Typography>
              <Typography variant="body2" color="textSecondary" component="p">
                A wrap is a food dish made with a soft flatbread rolled around a
                filling. The usual flatbreads are wheat tortillas, lavash, or
                pita; the filling usually consists of cold sliced meat, poultry,
                or fish accompanied by shredded lettuce, diced tomato or pico de
                gallo, guacamole, sauteed mushrooms, bacon, grilled onions,
                cheese, and a sauce, such as ranch or honey mustard.
              </Typography>
            </CardContent>
          </CardActionArea>
          <CardActions>
            <Button size="small" color="primary">
              Share
            </Button>
            <Button size="small" color="primary">
              Learn More
            </Button>
          </CardActions>
        </Card>
      </Box>
    </Box>
  );
};

export default CardComponent;
