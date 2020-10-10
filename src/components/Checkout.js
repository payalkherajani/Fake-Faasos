import React from "react";
import { Paper,Grid, Typography,Box,Button } from "@material-ui/core";
import CollectionHeader from './CollectionHeader';
import Footer from './FooterPage'

const Checkout = (props) => {
 console.log(props)
  // const to = total.location.state.total; //Total Value

  return (
    <div>
    <Grid container >
        <Grid item lg={12}><CollectionHeader /></Grid>
      </Grid>
    <Grid container>
      <Grid container item lg={8} direction="column">
        <Grid item>
        <Paper>
          <Box>
            <Box>1</Box>
            <Box>
              <Typography>Account</Typography>
              <Typography>To place your order now, log in to your existing account or sign up.</Typography>
              <Box>
                <Button>LogIn</Button>
                <Button>SignUp</Button>
              </Box>
            </Box>
          </Box>
        </Paper>
        </Grid>

      <Grid item> 
        <Paper>
          <Box>
            <Box>2</Box>
            <Box>
              <Typography>Delivery Address</Typography>
            </Box>
          </Box>
        </Paper>
        </Grid>
      <Grid item>
        <Paper>
        <Box>
            <Box>3</Box>
            <Box>
              <Typography>Payement</Typography>
            </Box>
          </Box>
        </Paper>
      </Grid>
    </Grid>
        <Grid item lg={4}>
          <Paper>
            <Box>
              <Typography>Order Summary</Typography>
            </Box>
            <Box>
              Apply Coupon
            </Box>
            <Box>
              Card Amount and total
            </Box>


          </Paper>

      
          
        </Grid>
  </Grid>
     
      <Grid container>
        <Grid item lg={12}> <Footer /> </Grid>
      </Grid>

    </div>
  );
};

export default Checkout;
