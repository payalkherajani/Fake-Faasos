import React from "react";
import { Paper, List, ListItemText } from "@material-ui/core";
const Category = ({ tags }) => {
  return (
    <Paper>
      <List>
        <ListItemText primary={tags} />
      </List>
    </Paper>
  );
};

export default Category;
