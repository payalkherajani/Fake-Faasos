import React from "react";
import { Paper, Typography, Box, Button } from "@material-ui/core";

import { useHistory } from "react-router-dom";

const CollectionCheckout = ({ price, checkoutTitle, counter, total }) => {
  let history = useHistory();
  const p = price;
  const t = checkoutTitle;
  const evaluate = () => {
    total === 0
      ? alert("You need to select atleast 1 Wrap")
      : history.push({
          pathname: "/checkout",
          state: { total: total },
        });
  };
  return (
    <Paper style={{ width: "150%", padding: "1rem" }}>
      <Box>
        <Typography variant="h5">Cart has {counter} Item</Typography>
      </Box>
      <Box style={{ display: "flex", gap: "50px", margin: "10px" }}>
        {counter !== 0 ? (
          <Box display="flex" gridGap="1rem">
            <Box>{t} </Box>
            <Box>₹ {p} </Box>
          </Box>
        ) : (
          <Box display="flex" gridGap="1rem">
            <Box>Your Cart is Empty</Box>
            <Box>₹ 0 </Box>
          </Box>
        )}
      </Box>
      <Box style={{ display: "flex", gap: "85px", margin: "10px" }}>
        <Box>SubTotal</Box>
        <Box>{total}</Box>
      </Box>
      <p>Extra Charges may apply</p>
      <Button
        variant="contained"
        style={{ backgroundColor: "rgb(255, 211, 68)" }}
        onClick={evaluate}
      >
        Checkout
      </Button>
    </Paper>
  );
};

export default CollectionCheckout;
