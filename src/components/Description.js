import React from "react";
import { Box, Divider, Paper, Button } from "@material-ui/core";
import CollectionHeader from "./CollectionHeader";
import { makeStyles } from "@material-ui/core";

const styles = makeStyles({
  mainbox: {
    marginTop: "2rem",
    marginLeft: "auto",
    marginRight: "auto",
    width: "80%",
  },
  url: {
    paddingBottom: "3rem",
    color: "rgb(153, 153, 153)",
  },
  seconddiv: {
    display: "flex",
    gap: "20px",
  },
  innerdiv1: {
    width: "350px",
    flexBasis: "60%",
  },
  innerdiv2: {
    display: "flex",
    flexDirection: "column",
    flexBasis: "40%",
  },
  image: {
    width: "95%",
    height: "350px",
    borderRadius: "5px",
  },
  check: {
    border: "1px solid rgb(126, 126, 126)",
    padding: "20px",
    marginBottom: "2rem",
  },
  pe: {
    padding: "1rem",
    display: "flex",
    gap: "10px",
  },
  pe1: {
    flexBasis: "80%",
    color: "rgb(51, 51, 51)",
    fontWeight: "800",
    fontSize: "1rem",
  },
  pe2: {
    flexBasis: "20%",
    color: "rgb(126, 126, 126)",
    fontWeight: "600",
  },
  describe: {
    padding: "20px",
    fontWeight: "500",
    color: "rgb(126, 126, 126)",
    fontSize: "1rem",
  },
  addArea: {
    display: "flex",
  },
});

const Description = (props) => {
  const classess = styles();
  const data = props.location.state;
  return (
    <Box>
      <CollectionHeader city={data.city} />
      <Box className={classess.mainbox}>
        <div className={classess.url}>
          Home/ Collection/
          <span style={{ color: "rgb(100, 100, 100)", fontWeight: "700" }}>
            {""} {data.title}
          </span>
        </div>
        <div className={classess.seconddiv}>
          <div className={classess.innerdiv1}>
            <img
              src={data.imageUrl}
              alt="foodimage"
              className={classess.image}
            />
          </div>
          <div className={classess.innerdiv2}>
            <Paper className={classess.check}>
              <div className={classess.pe}>
                <div className={classess.pe1}>{data.title}</div>
                <div className={classess.pe2}>₹ {data.price}</div>
              </div>
              <div className={classess.addArea}>
                <Button
                  variant="contained"
                  style={{
                    backgroundColor: "rgb(255, 211, 68)",
                    marginLeft: "auto",
                    marginRight: "auto",
                    marginTop: "2px",
                  }}
                >
                  Add
                </Button>
              </div>
            </Paper>
            <Divider />
            <div className={classess.describe}>{data.detailDesc}</div>
          </div>
        </div>
      </Box>
    </Box>
  );
};

export default Description;
