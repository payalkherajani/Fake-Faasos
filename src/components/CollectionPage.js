import React, { useState, useEffect } from "react";

import { Grid, Divider, Typography } from "@material-ui/core";

import Slider from "./Carousal";
import CategoryComponent from "./Category";
import CollectionHeader from "./CollectionHeader";
import CollectionBodyHeader from "./CollectionBodyHeader";
import CardComponent from "./CardComponent";
import CollectionCheckout from "./CollectionCheckout";
import axios from "axios";

const Collection = (info) => {
  const city = info.location.state.info;

  const [data, setData] = useState([]);
  const [wrap, setWraps] = useState([]);
  const [details, setDetails] = useState([]);

  const getData = async () => {
    const res = await axios.get(
      `http://localhost:8000/Collection?name=${city}`
    );
    setData(res.data[0]);
    setWraps(res.data[0].Wraps);
  };

  const getFoodData = () => {
    if (wrap) {
      wrap.map(async (w) => {
        const res = await axios.get(`http://localhost:8000/food`);
        setDetails(res.data);
      });
    }
  };
  useEffect(() => {
    getData();
  }, []);

  useEffect(() => {
    getFoodData();
  }, [wrap]);

  return (
    <Grid container direction="column">
      <Grid item>
        <CollectionHeader city={city} />
      </Grid>
      <Grid item xs={12}>
        <Slider />
      </Grid>
      <Grid item>
        <CollectionBodyHeader address={data.address} />
      </Grid>
      <Divider variant="middle" style={{ marginBottom: "2rem" }} />
      <Grid container item spacing={3}>
        <Grid item xs={1}></Grid>
        <Grid item xs={2}>
          <CategoryComponent tags={data.tags} />
        </Grid>
        <Grid item xs={6} display="flex">
          {details.length !== 0
            ? details.map((de) => (
                <CardComponent details={de} key={de.id} city={city} />
              ))
            : console.log("Zero Length")}
        </Grid>

        <Grid item xs={2}>
          <CollectionCheckout />
        </Grid>
      </Grid>
    </Grid>
  );
};

export default Collection;
