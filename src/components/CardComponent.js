import React, { useState } from "react";
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
import { Link } from "react-router-dom";

const styles = makeStyles({
  cards: {
    borderRadius: "10px",
    boxShadow: "0px 5px 20px rgb(71, 71, 71)",
    margin: "20px",
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-around",
    alignItems: "center",
    minWidth: "40%",
  },
  actualcard: {
    margin: "6px",
    padding: "2px",
  },
  firstBox: {
    flexBasis: "80%",
  },
  secondBox: {
    flexBasis: "20%",
  },
  a: {
    textDecoration: "none",
    color: "black",
  },
});

const CardComponent = ({ details, city }) => {
  const classess = styles();
  return (
    <Box className={classess.cards}>
      <Card className={classess.actualcard}>
        <Link
          to={{
            pathname: `/description/${details.title}`,
            state: {
              title: details.title,
              description: details.description,
              price: details.price,
              imageUrl: details.imageUrl,
              detailDesc: details.detailDesc,
              city: city,
            },
          }}
          className={classess.a}
        >
          <CardActionArea>
            <CardMedia
              component="img"
              alt="Contemplative Reptile"
              height="140"
              image={details.imageUrl}
              title="Contemplative Reptile"
            />
            <CardContent>
              <Box display="flex">
                <Typography
                  gutterBottom
                  variant="h6"
                  component="h4"
                  className={classess.firstBox}
                >
                  {details.title}
                </Typography>
                <Typography
                  gutterBottom
                  variant="h5"
                  component="h6"
                  className={classess.secondBox}
                >
                  ₹ {details.price}
                </Typography>
              </Box>
              <Typography variant="body2" color="textSecondary" component="p">
                {details.description}
              </Typography>
            </CardContent>
          </CardActionArea>
        </Link>
        <CardActions>
          <Button
            variant="contained"
            style={{
              backgroundColor: "rgb(255, 211, 68)",
              marginLeft: "auto",
              marginRight: "auto",
            }}
          >
            Add
          </Button>
        </CardActions>
      </Card>
    </Box>
  );
};

export default CardComponent;
