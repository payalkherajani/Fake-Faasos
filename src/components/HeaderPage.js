import React from "react";
import { Grid, Box } from "@material-ui/core";
import { makeStyles } from "@material-ui/styles";
//Images import
import food from "../Images/right.jpg";
import left from "../Images/left.jpg";

const useStyles = makeStyles({
  leftside: {
    backgroundImage: `url(${left})`,
    backgroundSize: "cover",
    margin: "0px",
  },
  rightside: {
    width: "500px",
    height: "560px",
  },
});
const Header = ({ title }) => {
  const classess = useStyles();
  return (
    <Grid item container xs={12}>
      <Grid item xs={8} className={classess.leftside}>
        <Box>
          <Box>svg and button</Box>
          <Box>{title}</Box>
          <Box>input field</Box>
        </Box>
      </Grid>
      <Grid item xs={4}>
        <img src={food} alt="foodimage" className={classess.rightside} />
      </Grid>
    </Grid>
  );
};

export default Header;
