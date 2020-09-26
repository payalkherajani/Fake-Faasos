import React from "react";
import { Grid, Typography, Box, Button } from "@material-ui/core";
import { makeStyles } from "@material-ui/styles";
import eatlogo from "../Images/eat-sure-logo.png";
const styles = makeStyles({
  tag: {
    color: "rgb(51, 51, 51)",
    fontWeight: "600",
    textAlign: "center",
    fontSize: "30px",
  },
  minitag: {
    color: "rgb(126, 126, 126)",
    fontSize: "15px",
    textAlign: "center",
    marginTop: "5px",
    marginBottom: "10px",
  },
  bottom: {
    backgroundColor: "rgb(86, 64, 153)",
    padding: "2rem",
    height: "200px",
  },
  eatsureblock: {
    backgroundColor: "rgb(244, 244, 237)",
    borderRadius: "12px",
    maxWidth: "1500px",
    transform: "translate(0px,-50px)",
    marginTop: "-1rem",
    padding: "0px 1rem 0px 1rem",
  },
  logo: {
    maxWidth: "200px",
    height: "45px",
    marginTop: "2rem",
  },
  list: {
    display: "flex",
    listStyleType: "none",
    gap: "15px",
    alignItems: "center",
  },
  listElement: {
    marginBottom: "0",
    display: "block",
    padding: "0 2rem",
    borderRight: "1px solid rgb(224, 224, 224)",
    textAlign: "center",
  },
  morebutton: {
    padding: "2px 10px 2px 10px",
    height: "max-content",
    color: "black",
    borderColor: "rgb(255, 211, 68)",
    marginLeft: "10px",
    marginTop: "2rem",
    fontSize: "10px",
    textTransform: "lowercase",
  },
  bottomline: {
    color: "rgb(255, 211, 68)",
    fontSize: "15px",
    marginTop: "-2rem",
  },
});

const Body = ({ tagline, minitagline }) => {
  const classess = styles();

  return (
    <Box mt={2}>
      <Grid item container xs={12}>
        <Grid item xs={2} />
        <Grid item xs={8} container direction="column">
          <Grid item container direction="column" style={{ padding: "1rem" }}>
            <Grid item>
              <Typography
                color="primary"
                component="h6"
                variant="h4"
                className={classess.tag}
              >
                {tagline}
              </Typography>
            </Grid>
            <Grid item>
              <Typography
                color="secondary"
                component="p"
                variant="span"
                className={classess.minitag}
              >
                {minitagline}
              </Typography>
            </Grid>
          </Grid>
          <Grid
            item
            container
            direction="row"
            style={{ padding: "1rem", marginBottom: "1rem" }}
          >
            <Grid
              item
              xs={4}
              container
              direction="column"
              style={{ padding: "1rem" }}
            >
              <Grid item style={{ padding: "0.5rem" }}>
                <strong>Real-time Temperature</strong> Tracking of the kitchen
                and delivery staff
              </Grid>
              <Grid item style={{ padding: "0.5rem" }}>
                <strong>Contactless Delivery</strong>
              </Grid>
              <Grid item style={{ padding: "0.5rem" }}>
                <strong>Regular health </strong>check-ups for all the staff
                members
              </Grid>
            </Grid>
            <Grid item xs={4} style={{ padding: "0.5rem" }}>
              <div>
                <iframe src="https://www.youtube.com/embed/SBGKA87fmCM" />
              </div>
            </Grid>
          </Grid>
        </Grid>
        <Grid item xs={2} />
      </Grid>
      <Grid
        xs={12}
        container
        item
        className={classess.bottom}
        direction="column"
        textAlign="center"
        justify="center"
        alignItems="center"
      >
        <Grid item>
          <Box className={classess.eatsureblock} display="flex">
            <Box>
              <img
                src={eatlogo}
                alt="eatsure block"
                className={classess.logo}
              />
            </Box>
            <Box>
              <ul className={classess.list}>
                <li className={classess.listElement}>
                  <span
                    style={{
                      backgroundColor: "rgb(232, 155, 61)",
                      color: "white",
                    }}
                  >
                    ✔
                  </span>
                  <p>Medically Certified Kitchen Staff</p>
                </li>
                <li className={classess.listElement}>
                  <span
                    style={{
                      backgroundColor: "rgb(232, 155, 61)",
                      color: "white",
                    }}
                  >
                    ✔
                  </span>
                  <p>200+ Stringent Quality Checks</p>
                </li>
                <li className={classess.listElement}>
                  <span
                    style={{
                      backgroundColor: "rgb(232, 155, 61)",
                      color: "white",
                    }}
                  >
                    ✔
                  </span>
                  <p>No Artificial Colours or Flavours</p>
                </li>
                <li className={classess.listElement}>
                  <span
                    style={{
                      backgroundColor: "rgb(232, 155, 61)",
                      color: "white",
                    }}
                  >
                    ✔
                  </span>
                  <p>Double Sealed Packaging</p>
                </li>
              </ul>
            </Box>
            <Button variant="outlined" className={classess.morebutton}>
              Know More
            </Button>
          </Box>
        </Grid>
        <Grid item>
          <Typography
            variant="h6"
            component="p"
            className={classess.bottomline}
          >
            Here are some additional measures which our kitchen teams are
            rigorously following!
          </Typography>
        </Grid>
      </Grid>
    </Box>
  );
};

export default Body;
