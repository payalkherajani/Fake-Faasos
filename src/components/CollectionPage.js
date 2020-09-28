import React, { useState, useEffect } from "react";

import { Grid, Divider } from "@material-ui/core";

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
  const [details, setDetails] = useState({});

  const getData = async () => {
    const res = await axios.get(
      `http://localhost:8000/Collection?name=${city}`
    );
    setData(res.data[0]);
    setWraps(res.data[0].Wraps);
  };

  useEffect(() => {
    getData();
  }, []);

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
        <Grid item xs={6}>
          {wrap.length !== 0
            ? wrap.forEach(async (element) => {
                const res = await axios.get(
                  `http://localhost:8000/food/${element}`
                );
                //const carddata = res.data;
                //console.log(carddata); //data is coming till here  now we need to pass that to cardComponent
                setDetails(res.data);
                return (
                  <div>
                    <CardComponent carddata={details} key={details.id} />;
                  </div>
                );
              })
            : console.log("Length is zero")}
        </Grid>

        <Grid item xs={2}>
          <CollectionCheckout />
        </Grid>
      </Grid>
    </Grid>
  );
};

export default Collection;
