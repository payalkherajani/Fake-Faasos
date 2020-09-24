import React from "react";
import { Grid, Typography } from "@material-ui/core";
const Body = ({ tagline, minitagline, precautions }) => {
  return (
    <Grid item container xs={12}>
      <Grid item xs={2} />
      <Grid item xs={8} container direction="column">
        <Grid item container direction="column">
          <Grid item>
            <Typography color="primary" component="h1">
              {tagline}
            </Typography>
          </Grid>
          <Grid item>
            <Typography color="secondary" component="p">
              {minitagline}
            </Typography>
          </Grid>
        </Grid>
        <Grid item container direction="row">
          <Grid item xs={4} container direction="column">
            <Grid item>
              Real-time Temperature Tracking of the kitchen and delivery staff
            </Grid>
            <Grid item>Contactless Delivery</Grid>
            <Grid item>Regular health check-ups for all the staff members</Grid>
          </Grid>
          <Grid item xs={4}>
            Video
          </Grid>
        </Grid>
      </Grid>
      <Grid item xs={2} />
      <Grid
        item
        xs={12}
        style={{ backgroundColor: "rgb(86, 64, 153)", height: "200px" }}
      >
        Purple color
      </Grid>
    </Grid>
  );
};

export default Body;
