import React, { useState, useEffect } from "react";
import { Paper, Typography, Box, Button } from "@material-ui/core";

import { useHistory } from "react-router-dom";

const CollectionCheckout = ({ price, checkoutTitle, counter, total }) => {
  let history = useHistory();
  const [obj, setObj] = useState([]);

 
    if ((price, checkoutTitle)) {
     obj.push({ title: checkoutTitle, pr: price }) 
    }
    
 
  const evaluate = () => {
    console.log(total)
    total === 0
      ? alert("You need to select atleast 1 Wrap")
      : history.push({
          pathname: "/checkout",
          state: {total: total}
        });
  };
  return (
    <Paper style={{ width: "120%", padding: "1rem", marginTop: "15px" }}>
      <Box>
        <Typography variant="h5">Cart has {counter} Item</Typography>
      </Box>
      <Box
        style={{
          display: "flex",
          gap: "50px",
          margin: "10px",
          flexDirection: "column",
        }}
      >
        {counter !== 0 ? (
          obj.map((o) => (
            <li style={{ listStyleType: "none" }}>
              <Box>{o.title} </Box>
              <Box>₹ {o.pr} </Box>
            </li>
          ))
        ) : (
          <Box display="flex" gridGap="1rem">
            <Box>Your Cart is Empty</Box>
            <Box>₹ 0 </Box>
          </Box>
        )}
      </Box>
      <Box style={{ display: "flex", gap: "85px", margin: "10px" }}>
        <Box>SubTotal</Box>
        <Box>₹ {total}</Box>
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
