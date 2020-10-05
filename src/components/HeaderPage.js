import React, { useState, useEffect } from "react";
import {
  Grid,
  Box,
  Button,
  TextField,
  Typography,
  Hidden,
} from "@material-ui/core";

//Icons

import MyLocationIcon from "@material-ui/icons/MyLocation";
import { makeStyles } from "@material-ui/styles";
import axios from "axios";
import faasos from "../Images/faasos.svg";
import { useHistory, Link } from "react-router-dom";

//Images import
import food from "../Images/right.jpg";
import left from "../Images/left.jpg";

const useStyles = makeStyles({
  leftside: {
    backgroundImage: `url(${left})`,
    backgroundSize: "cover",
    margin: "0px",
    height: "520px",
  },
  rightside: {
    width: "450px",
    height: "560px",
    borderBottomLeftRadius: "3rem",
  },
  box: {
    margin: "2rem",
    marginLeft: "4rem",
    padding: "1rem",
    display: "flex",
    flexDirection: "column",
    gap: "3rem",
  },
  button: {
    backgroundColor: "rgb(255, 211, 68)",
    padding: "0.5rem",
    flexBasis: "25%",
    color: "black",
  },
  location: {
    backgroundColor: "white",
    flexBasis: "70%",
  },
  fieldbox: {
    display: "flex",
  },
  login: {
    padding: "0.5rem 2rem 0.5rem 2rem",
    color: "rgb(255, 211, 68)",
    marginLeft: "10px",
  },
  signup: {
    padding: "0.5rem 2rem 0.5rem 2rem",
    backgroundColor: "transparent",
    color: "rgb(255, 211, 68)",
    borderColor: "rgb(255, 211, 68)",
  },
  firstbox: {
    display: "flex",
    flexBasis: "60%",
  },
  pageTitle: {
    fontSize: "calc(40px + 11 * ((100vw - 300px) / 1100))",
    color: "white",
    fontWeight: "600",
  },
  a: {
    textDecoration: "none",
  },
  lfbox: {
    display: "flex",
    width: "120%",
  },
});

const Header = ({ title }) => {
  let history = useHistory();
  const [name, setName] = useState({});
  const [search, setSearch] = useState("");
  const [match, setMatch] = useState(false);
  const [info, setInfo] = useState("");

  const getData = async () => {
    const res = await axios.get("http://localhost:8000/Collection");
    setName(res.data);
  };

  const updateSearch = (e) => {
    setSearch(e.target.value);
  };

  const matching = () => {
    name.forEach((element) => {
      if (element.name === search) {
        setMatch(true);
        setInfo(element.name);
      }
    });

    if (match === true) {
      history.push({
        pathname: "/collection",
        state: { info: info },
      });
    }
  };

  useEffect(() => {
    getData();
  }, []);

  const classess = useStyles();
  return (
    <Grid item container xs={12}>
      <Grid item md={8} xs={12} className={classess.leftside}>
        <Box className={classess.box}>
          <Box className={classess.fieldbox}>
            <Box className={classess.firstbox}>
              {" "}
              <img src={faasos} alt="svg" />
            </Box>
            <Box>
              <Link to="/login" className={classess.a}>
                <Button color="secondary" className={classess.login}>
                  Login
                </Button>
              </Link>

              <Link to="/register" className={classess.a}>
                <Button
                  variant="outlined"
                  color="secondary"
                  className={classess.signup}
                >
                  Signup
                </Button>
              </Link>
            </Box>
          </Box>
          <Typography variant="h2" className={classess.pageTitle}>
            {title}
          </Typography>
          <Box className={classess.lfbox}>
            <TextField
              id="filled-basic"
              variant="filled"
              label="Enter Your Delivery Location"
              className={classess.location}
              value={search}
              onChange={updateSearch}
              InputProps={{
                endAdornment: <MyLocationIcon fontSize="small" />,
              }}
            />

            <Button
              variant="contained"
              color="secondary"
              className={classess.button}
              onClick={matching}
            >
              Find Food
            </Button>
          </Box>
        </Box>
      </Grid>
      <Hidden mdDown>
        <Grid item xs={4}>
          <img src={food} alt="foodimage" className={classess.rightside} />
        </Grid>
      </Hidden>
    </Grid>
  );
};

export default Header;
