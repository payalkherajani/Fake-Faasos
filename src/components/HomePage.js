import React, { useState, useEffect } from "react";
import axios from "axios";
import { Grid } from "@material-ui/core";

//Components
import Header from "./HeaderPage";
import Body from "./BodyPage";
import Footer from "./FooterPage";

const HomePage = () => {
  const [homePagedata, setHomePageData] = useState({});

  const getData = async () => {
    const response = await axios.get("http://localhost:8000/HomePage");
    setHomePageData(response.data);
  };
  useEffect(() => {
    getData();
  }, []);
  return (
    <Grid container direction="column">
      <Header title={homePagedata.title} />
      <Body
        tagline={homePagedata.tagline}
        minitagline={homePagedata.minitagline}
        precautions={homePagedata.precautions}
      />
      <Footer />
    </Grid>
  );
};

export default HomePage;
