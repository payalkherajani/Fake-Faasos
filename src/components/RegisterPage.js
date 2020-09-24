import React from "react";
import { Box, Paper, TextField, Grid, Typography } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles({
  paperstyle: {
    margin: "10rem",
    width: "60%",
    height: "80%",
    padding: "2rem",
  },
  formstyle: {
    display: "flex",
    flexDirection: "column",
    gap: "3rem",
    marginBottom: "2rem",
  },
});

const Register = () => {
  const classes = useStyles();
  return (
    <Box>
      <Grid container direction="column">
        <Paper className={classes.paperstyle}>
          <form className={classes.formstyle}>
            <Typography variant="h1">Sign up</Typography>
            <TextField
              id="outlined-basic"
              label="Phone Number"
              variant="outlined"
            />
            <TextField id="outlined-basic" label="Name" variant="outlined" />
            <TextField id="outlined-basic" label="Email" variant="outlined" />
          </form>
        </Paper>
      </Grid>
    </Box>
  );
};

export default Register;
