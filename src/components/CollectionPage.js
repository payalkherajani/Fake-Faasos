import React, { useState, useEffect } from "react";

import { Grid, Divider, Hidden } from "@material-ui/core";

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
  // const [obj, setObj] = useState([]);
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

  // if (details) {
  //   obj.push({ cards: details });
  //   console.log(obj);
  // }
  useEffect(() => {
    getData();
  }, []);

  useEffect(() => {
    getFoodData();
  }, [wrap]);

  return (
    <Grid container direction="column">
      <Grid item sm={11} md={11} lg={12}>
        <CollectionHeader city={city} />
      </Grid>
      <Grid item xs={12} sm={11} md={11} lg={12}>
        <Slider />
      </Grid>
      <Grid item sm={11} md={11} lg={12}>
        <CollectionBodyHeader address={data.address} />
      </Grid>
      <Hidden mdDown>
        <Divider variant="middle" style={{ marginBottom: "1rem" }} />
      </Hidden>
      <Grid container item spacing={2}>
        <Hidden mdDown>
          <Grid item md={1} lg={1}></Grid>
        </Hidden>
        <Grid item xs={2} md={3} lg={2} style={{ margin: "15px" }}>
          <CategoryComponent tags={data.tags} />
        </Grid>
        <Grid item xs={6} md={5} lg={6} display="flex">
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

        <Grid item xs={2} md={2} lg={2}>
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
