import React from "react";
import { Paper, Typography, Box, Button } from "@material-ui/core";

const CollectionCheckout = () => {
  return (
    <Paper style={{ width: "120%", padding: "1rem" }}>
      <Box>
        <Typography variant="h5">Cart 1Item</Typography>
      </Box>
      <Box style={{ display: "flex", gap: "50px", margin: "10px" }}>
        <Box>Burger Special</Box>
        <Box>224</Box>
      </Box>
      <Box style={{ display: "flex", gap: "85px", margin: "10px" }}>
        <Box>SubTotal</Box>
        <Box>224</Box>
      </Box>
      <p>Extra Charges may apply</p>
      <Button
        variant="contained"
        style={{ backgroundColor: "rgb(255, 211, 68)" }}
      >
        Checkout
      </Button>
    </Paper>
  );
};

export default CollectionCheckout;
