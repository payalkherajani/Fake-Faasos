import React, { useEffect, useState } from "react";
import {
  Box,
  Grid,
  Paper,
  TextField,
  Typography,
  Button,
} from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import axios from "axios";

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

const Login = () => {
  const [num, setNum] = useState([]);
  const [formData, setFormData] = useState({
    phonenumber: "",
  });
  const [obj, setObj] = useState([]);

  const evaluate = () => {
    obj.map((o) => {
      if (o.number === formData.phonenumber) {
        alert("LoggedIn");
      }
    });
  };

  const handleChange = (e) => {
    const { id, value } = e.target;
    setFormData((prevState) => ({
      ...prevState,
      [id]: value,
    }));
  };

  const getData = async () => {
    const res = await axios.get("http://localhost:8000/users");
    res.data.map((num) => {
      setNum(num.Phonenumber);
    });
  };

  if (num) {
    obj.push({ number: num });
  }
  useEffect(() => {
    getData();
  }, []);

  const classes = useStyles();

  return (
    <Box>
      <Grid container direction="column">
        <Paper className={classes.paperstyle}>
          <form className={classes.formstyle}>
            <Typography variant="h1">Login</Typography>
            <TextField
              id="phonenumber"
              label="Phone Number"
              variant="outlined"
              value={formData.phonenumber}
              onChange={handleChange}
            />
            <Button variant="contained" color="secondary" onClick={evaluate}>
              Login
            </Button>
          </form>
        </Paper>
      </Grid>
    </Box>
  );
};

export default Login;
