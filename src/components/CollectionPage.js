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
  const [price, setPrice] = useState(0);
  const [checkoutTitle, setCheckoutTitle] = useState("");
  const [counter, setCounter] = useState(0);
  const [total, setTotal] = useState(0);

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
                <CardComponent
                  details={de}
                  key={de.id}
                  city={city}
                  setPrice={setPrice}
                  setCheckoutTitle={setCheckoutTitle}
                  setCounter={setCounter}
                  counter={counter}
                  setTotal={setTotal}
                  total={total}
                />
              ))
            : console.log("Zero Length")}
        </Grid>

        <Grid item xs={2}>
          <CollectionCheckout
            price={price}
            checkoutTitle={checkoutTitle}
            counter={counter}
            total={total}
          />
        </Grid>
      </Grid>
    </Grid>
  );
};

export default Collection;
