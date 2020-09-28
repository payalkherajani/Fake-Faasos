import React from "react";
import {
  AppBar,
  Typography,
  Toolbar,
  Button,
  IconButton,
  Box,
} from "@material-ui/core";
import MenuIcon from "@material-ui/icons/Menu";
import { makeStyles } from "@material-ui/core";
import logo from "../Images/collectionlogo.svg";
import PersonIcon from "@material-ui/icons/Person";

const useStyles = makeStyles({
  root: {
    flexGrow: 1,
  },
  title: {
    flexGrow: 1,
  },
  head: {
    backgroundColor: "white",
    color: "black",
    marginBottom: "1rem",
  },
});

const CollectionHeader = ({ city }) => {
  const classes = useStyles();
  return (
    <div>
      <AppBar position="static" className={classes.head}>
        <Toolbar>
          <img
            src={logo}
            alt="faasos-logo"
            style={{ width: "68px", height: "40px", marginRight: "2rem" }}
          />
          <Typography variant="h6" className={classes.title}>
            {city}
          </Typography>

          <Button color="inherit">
            <PersonIcon />
            Login
          </Button>

          <IconButton
            edge="end"
            color="inherit"
            aria-label="menu"
            className={classes.menuButton}
          >
            <MenuIcon />
          </IconButton>
        </Toolbar>
      </AppBar>
    </div>
  );
};

export default CollectionHeader;
