import React from "react";
import {
  AppBar,
  Typography,
  Toolbar,
  Button,
  IconButton,
  Drawer,
  ListItem,
  Divider,
  List,
} from "@material-ui/core";
import MenuIcon from "@material-ui/icons/Menu";
import { makeStyles, useTheme } from "@material-ui/core";
import ChevronLeftIcon from "@material-ui/icons/ChevronLeft";
import ChevronRightIcon from "@material-ui/icons/ChevronRight";
import logo from "../Images/collectionlogo.svg";
import PersonIcon from "@material-ui/icons/Person";
import { Link } from "react-router-dom";
import clsx from "clsx";

const drawerWidth = 240;
const useStyles = makeStyles((theme) => ({
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
  menuButton: {
    marginRight: theme.spacing(2),
  },
  drawer: {
    width: drawerWidth,
    flexShrink: 0,
  },
  drawerPaper: {
    width: drawerWidth,
  },
  drawerHeader: {
    display: "flex",
    alignItems: "center",
    padding: theme.spacing(0, 1),
    // necessary for content to be below app bar
    ...theme.mixins.toolbar,
    justifyContent: "flex-end",
  },
  a: {
    textDecoration: "none",
    color: "black",
  },
}));

const CollectionHeader = ({ city }) => {
  const [open, setOpen] = React.useState(false);

  const handleDrawerOpen = () => {
    setOpen(true);
  };

  const handleDrawerClose = () => {
    setOpen(false);
  };
  const classes = useStyles();
  const theme = useTheme();
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

          <Link to="/login" className={classes.a}>
            <Button color="inherit">
              <PersonIcon />
              Login
            </Button>
          </Link>

          <IconButton
            edge="end"
            color="inherit"
            aria-label="open drawer"
            className={clsx(classes.menuButton, open && classes.hide)}
            onClick={handleDrawerOpen}
          >
            <MenuIcon />
          </IconButton>
        </Toolbar>
      </AppBar>
      <Drawer
        className={classes.drawer}
        variant="persistent"
        anchor="right"
        open={open}
        classes={{
          paper: classes.drawerPaper,
        }}
      >
        <div className={classes.drawerHeader}>
          <IconButton onClick={handleDrawerClose}>
            {theme.direction === "ltr" ? (
              <ChevronLeftIcon />
            ) : (
              <ChevronRightIcon />
            )}
          </IconButton>
        </div>
        <Divider />
        <List>
          <Link to="https://www.faasos.com/aboutUs" target="_blank">
            <ListItem button key="1">
              <ListItem>About Us</ListItem>
            </ListItem>
          </Link>
          <Link to="https://www.faasos.com/elite" target="_blank">
            <ListItem button key="1">
              <ListItem>Faasos Elite</ListItem>
            </ListItem>
          </Link>
          <Link to="https://www.faasos.com/partyOrder" target="_blank">
            <ListItem button key="1">
              <ListItem>Party Orders</ListItem>
            </ListItem>
          </Link>
          <Link to="https://www.faasos.com/hungerSaver" target="_blank">
            <ListItem button key="1">
              <ListItem>Hunger Saver</ListItem>
            </ListItem>
          </Link>
        </List>
      </Drawer>
    </div>
  );
};

export default CollectionHeader;
