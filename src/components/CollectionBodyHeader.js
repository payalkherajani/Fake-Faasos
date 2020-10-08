import React from "react";
import {
  Box,
  Checkbox,
  FormControlLabel,
  Paper,
  InputBase,
  Typography,
} from "@material-ui/core";
import SearchIcon from "@material-ui/icons/Search";
import { makeStyles } from "@material-ui/core";

const useStyle = makeStyles({
  maindiv: {
    width: "100%",
    marginLeft: "auto",
    marginRight: "auto",
    marginTop: "1.5rem",
    paddingLeft: "5px",
  },
  seconddiv: {
    display: "flex",
  },
  innerdiv1: {
    flexBasis: "50%",
  },
  innerdiv2: {
    flexBasis: "60%",
    display: "flex",
    gap: "10px",
  },
});

const CollectionBodyHeader = ({ address }) => {
  const classess = useStyle();
  return (
    <Box className={classess.maindiv}>
      <Box className={classess.seconddiv}>
        <Box className={classess.innerdiv1}>
          <Typography variant="h6">{address}</Typography>
        </Box>
        <Box className={classess.innerdiv2}>
          <Paper>
            <div style={{ display: "flex", gap: "5px", height: "100%" }}>
              <div style={{ padding: "12px 0px 0px 1px" }}>
                <SearchIcon />
              </div>
              <InputBase
                placeholder="Search for wraps"
                inputProps={{ "aria-label": "search" }}
                style={{ padding: "1px" }}
              />
            </div>
          </Paper>
          <Paper style={{ width: "25%", padding: "0px 3px" }}>
            <FormControlLabel
              control={<Checkbox name="checkedC" />}
              label="Non-Veg"
            />
          </Paper>
          <Paper style={{ width: "20%", padding: "0px 3px" }}>
            <FormControlLabel
              control={<Checkbox name="checkedC" />}
              label="Veg"
            />
          </Paper>
        </Box>
      </Box>
    </Box>
  );
};

export default CollectionBodyHeader;
