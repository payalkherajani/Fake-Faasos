import React from "react";
import { Paper } from "@material-ui/core";

const Checkout = (total) => {
  const to = total.location.state.total; //Total Value

  return (
    <Paper
      style={{
        width: "50%",
        marginLeft: "auto",
        marginRight: "auto",
        height: "auto",
        marginTop: "5rem",
        padding: "5rem",
        fontSize: "2rem",
        letterSpacing: "1px",
        backgroundColor: "rgb(255, 211, 68)",
        fontWeight: "600",
      }}
    >
      Thankyou for Choosing Faasos ! Your Total is ₹{to} which will be delivered
      at your delivery address within an hour!!!
    </Paper>
  );
};

export default Checkout;
