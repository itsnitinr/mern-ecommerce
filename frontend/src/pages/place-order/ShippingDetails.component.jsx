import {
  makeStyles,
  Container,
  Avatar,
  Grid,
  TextField,
  Typography,
} from '@material-ui/core';
import { ShoppingCart } from '@material-ui/icons';

const useStyles = makeStyles((theme) => ({
  paper: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
  avatar: {
    margin: theme.spacing(1),
    backgroundColor: theme.palette.secondary.main,
  },
  form: {
    width: '100%', // Fix IE 11 issue.
    marginTop: theme.spacing(3),
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
  },
}));

const ShippingDetails = ({ details, onChange }) => {
  const classes = useStyles();

  return (
    <Grid item sm={12} md={12} lg={12} xs={12}>
      <Container component="main" maxWidth="xs">
        <div className={classes.paper}>
          <Avatar className={classes.avatar}>
            <ShoppingCart />
          </Avatar>
          <Typography component="h1" variant="h5">
            Shipping Address
          </Typography>
          <form className={classes.form}>
            <Grid container spacing={2}>
              <Grid item xs={12}>
                <TextField
                  variant="outlined"
                  required
                  fullWidth
                  label="Address Line 1"
                  name="addressLine1"
                  value={details.addressLine1}
                  onChange={onChange}
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  variant="outlined"
                  required
                  fullWidth
                  label="Address Line 2"
                  name="addressLine2"
                  value={details.addressLine2}
                  onChange={onChange}
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  variant="outlined"
                  required
                  fullWidth
                  name="city"
                  label="City"
                  value={details.city}
                  onChange={onChange}
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  variant="outlined"
                  required
                  fullWidth
                  name="state"
                  label="State"
                  value={details.state}
                  onChange={onChange}
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  variant="outlined"
                  required
                  fullWidth
                  name="pincode"
                  label="Pincode"
                  value={details.pincode}
                  onChange={onChange}
                />
              </Grid>
            </Grid>
          </form>
        </div>
      </Container>
    </Grid>
  );
};

export default ShippingDetails;
