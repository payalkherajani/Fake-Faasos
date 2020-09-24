import React from "react";
import { Grid } from "@material-ui/core";

const Footer = ({ cities }) => {
  console.log(cities);
  return (
    <Grid
      item
      container
      xs={12}
      style={{ backgroundColor: " rgb(25, 11, 69)", height: "500px" }}
    >
      <Grid item xs={2}></Grid>
      <Grid item xs={8} container>
        <Grid item xs={4}></Grid>
        <Grid item xs={4}>
          <ul>
            <li>Pune</li>
            <li>Banglore</li>
            <li>Mumbai</li>
          </ul>
        </Grid>
      </Grid>
      <Grid item xs={2} />
    </Grid>
  );
};

export default Footer;
