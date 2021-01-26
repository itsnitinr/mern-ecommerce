import { Grid, Typography, Button, makeStyles } from '@material-ui/core';
import { Link } from 'react-router-dom';
import { Check } from '@material-ui/icons';

const useStyles = makeStyles((theme) => ({
  checkmark: {
    textAlign: 'center',
    height: 100,
    width: 100,
    fill: theme.palette.secondary.main,
    dislay: 'block',
    margin: '0 auto',
  },
  svgContainer: {
    display: 'flex',
    justifyContent: 'center',
    marginBottom: '1rem',
  },
  link: {
    margin: '2rem auto',
    display: 'block',
  },
}));

const OrderSuccess = ({ orderId }) => {
  const classes = useStyles();

  return (
    <Grid container justify="center">
      <Grid item sm={12} className={classes.svgContainer}>
        <Check className={classes.checkmark} />
      </Grid>
      <Grid item sm={12}>
        <Typography variant="h4" gutterBottom color="secondary" align="center">
          Your order has been successfully placed
        </Typography>
        <Typography variant="h6" color="primary" align="center">
          Stay tuned while we review your order requirements. Once it's
          approved, we'll send you an email notifying the same. You can also
          track your order status on your dashboard. Payment portal will be
          available once your order has been approved after review.
        </Typography>
      </Grid>
      <Grid item sm={12}>
        <Link to={`/order/${orderId}`}>
          <Button variant="contained" className={classes.link} color="primary">
            View Order Details
          </Button>
        </Link>
      </Grid>
    </Grid>
  );
};

export default OrderSuccess;
