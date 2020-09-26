import React, { useState, useEffect } from "react";
import { Grid } from "@material-ui/core";
import axios from "axios";
import { makeStyles } from "@material-ui/core/styles";

const useStyle = makeStyles({
  list: {
    display: "flex",
    flexDirection: "column",
    flexWrap: "wrap",
    gap: "20px",
    listStyleType: "none",
    color: "white",
  },
});
const Footer = () => {
  const [city, setCity] = useState([]);

  const getData = async () => {
    const response = await axios.get("http://localhost:8000/cities");
    setCity(response.data);
  };

  useEffect(() => {
    getData();
  }, []);

  const classess = useStyle();
  return (
    <Grid
      item
      container
      xs={12}
      style={{ backgroundColor: " rgb(25, 11, 69)", height: "500px" }}
    >
      <Grid item xs={1}></Grid>
      <Grid item xs={8} container>
        <Grid item xs={4}>
          <ul className={classess.list}>
            {city.map((c) => (
              <li>{c.location}</li>
            ))}
          </ul>
        </Grid>
      </Grid>
      <Grid item xs={2} />
    </Grid>
  );
};

export default Footer;
