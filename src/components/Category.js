import React from "react";
import { Paper, List, ListItemText, Typography } from "@material-ui/core";
import { makeStyles } from "@material-ui/core";

const styles = makeStyles({
  pa: {
    padding: "20px",
    height: "auto",
    width: "auto",
  },
  item: {
    padding: "10px",
    fontSize: "1.3rem",
    color: "rgb(100, 100, 100)",
  },
});
const Category = ({ tags }) => {
  const classess = styles();
  return (
    <Paper className={classess.pa}>
      <Typography variant="h6" component="h2">
        Wrap Tastic Match Combo
      </Typography>
      <List>
        {tags !== undefined
          ? tags.map((t) => (
              <ListItemText primary={t} className={classess.item} key={t} />
            ))
          : console.log("Undefined")}
      </List>
    </Paper>
  );
};

export default Category;
