import React from "react";

import { Grid, Paper, Divider } from "@material-ui/core";

import Slider from "./Carousal";
import CategoryComponent from "./Category";
import CollectionHeader from "./CollectionHeader";
import CollectionBodyHeader from "./CollectionBodyHeader";
import CardComponent from "./CardComponent";
import CollectionCheckout from "./CollectionCheckout";

const Collection = (info) => {
  console.log(info.location.state.info);
  return (
    <Grid container direction="column">
      <Grid item>
        <CollectionHeader />
      </Grid>
      <Grid item xs={12}>
        <Slider />
      </Grid>
      <Grid item>
        <CollectionBodyHeader />
      </Grid>
      <Divider variant="middle" style={{ marginBottom: "2rem" }} />
      <Grid container item spacing={3}>
        <Grid item xs={1}></Grid>
        <Grid item xs={2}>
          <CategoryComponent />
        </Grid>
        <Grid item xs={6}>
          <CardComponent />
        </Grid>
        <Grid item xs={2}>
          <CollectionCheckout />
        </Grid>
      </Grid>
    </Grid>
  );
};

export default Collection;
