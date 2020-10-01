import React, { useState } from "react";
import {
  Box,
  Paper,
  TextField,
  Grid,
  Typography,
  Button,
} from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import axios from "axios";
import { useHistory } from "react-router-dom";

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
  let history = useHistory();
  const classes = useStyles();

  const [formData, setFormData] = useState({
    phonenumber: "",
    name: "",
    email: "",
  });

  const handleChange = (e) => {
    const { id, value } = e.target;
    setFormData((prevState) => ({
      ...prevState,
      [id]: value,
    }));
  };

  const handleSubmitClick = (e) => {
    e.preventDefault();
    if (
      formData.name === "" ||
      formData.email === "" ||
      formData.phonenumber === ""
    ) {
      alert("Please fill in all details");
    } else {
      sendDetailsToServer();
    }
    e.target.value = " ";
  };
  const sendDetailsToServer = () => {
    const payload = {
      email: formData.email,
      name: formData.name,
      phonenumber: formData.phonenumber,
    };
    axios
      .post("http://localhost:8000/users", payload)
      .then(function (response) {
        alert("Registration Successfull");
        history.push({
          pathname: "/",
        });
      })
      .catch(function (error) {
        alert("Registration Failed");
      });
  };

  return (
    <Box>
      <Grid container direction="column">
        <Paper className={classes.paperstyle}>
          <form className={classes.formstyle}>
            <Typography variant="h1">Sign up</Typography>
            <TextField
              id="phonenumber"
              label="Phone Number"
              variant="outlined"
              value={formData.phonenumber}
              onChange={handleChange}
            />

            <TextField
              id="name"
              label="Name"
              variant="outlined"
              value={formData.name}
              onChange={handleChange}
            />

            <TextField
              id="email"
              label="Email"
              variant="outlined"
              value={formData.email}
              onChange={handleChange}
            />
            <Button
              variant="contained"
              color="secondary"
              onClick={handleSubmitClick}
            >
              Register
            </Button>
          </form>
        </Paper>
      </Grid>
    </Box>
  );
};

export default Register;
