import { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useParams } from 'react-router-dom';
import {
  Grid,
  Container,
  Typography,
  LinearProgress,
  Button,
  Card,
  Table,
  TableContainer,
  TableHead,
  TableBody,
  TableRow,
  TableCell,
  TextField,
} from '@material-ui/core';
import { Check, Clear, CloudDownload } from '@material-ui/icons';

import PageHeader from '../../components/page-header/PageHeader.component';
import {
  getOrderDetails,
  reviewOrder,
  payOrder,
  dispatchOrder,
} from '../../redux/order/order.actions';
import {
  ORDER_PAY_RESET,
  ORDER_DISPATCH_RESET,
} from '../../redux/order/order.types';
import useStyles from './OrderDetails.styles';

function loadRazorpay() {
  return new Promise((resolve) => {
    const script = document.createElement('script');
    script.src = 'https://checkout.razorpay.com/v1/checkout.js';
    document.body.appendChild(script);
    script.onload = () => {
      resolve(true);
    };
    script.onerror = () => {
      resolve(false);
    };
  });
}

const OrderDetailsPage = ({ history }) => {
  const orderId = useParams().id;

  const { user } = useSelector((state) => state.userLogin);
  const { order, loading } = useSelector((state) => state.orderDetails);
  const { success } = useSelector((state) => state.orderPay);
  const { success: dispatchSuccess } = useSelector(
    (state) => state.orderDispatch
  );

  const dispatch = useDispatch();

  useEffect(() => {
    if (!user) {
      history.push('/signin');
    } else {
      if (success) {
        dispatch({ type: ORDER_PAY_RESET });
      }
      if (dispatchSuccess) {
        dispatch({ type: ORDER_DISPATCH_RESET });
      }
      dispatch(getOrderDetails(orderId));
      setAdjustedPrice(order.orderPrice);
    }
  }, [
    dispatch,
    order.orderPrice,
    orderId,
    user,
    history,
    success,
    dispatchSuccess,
  ]);

  const classes = useStyles();

  async function displayRazorpay() {
    const res = await loadRazorpay();
    if (!res) {
      alert('Razorpay SDK failed to load. Are you online?');
      return;
    }

    const options = {
      key: 'rzp_test_tCLOmiV4RXNrMu',
      currency: 'INR',
      name: 'The Firm',
      description: 'PCB Order Payment',
      image: 'https://example.com/your_logo',
      order_id: `${order.razorpayOrderId}`,
      handler: function (response) {
        dispatch(
          payOrder(
            orderId,
            response.razorpay_payment_id,
            response.razorpay_signature
          )
        );
      },
      prefill: {
        name: user.name,
        email: user.email,
      },
    };
    const paymentObject = new window.Razorpay(options);
    paymentObject.open();
  }

  const [adjustedPrice, setAdjustedPrice] = useState('');
  const [logisticsPartner, setLogisticsPartner] = useState('');
  const [trackingId, setTrackingId] = useState('');

  const onDispatchSubmit = (e) => {
    e.preventDefault();
    dispatch(dispatchOrder(orderId, logisticsPartner, trackingId));
  };

  return (
    <>
      <PageHeader title="Order Details" subtitle={`Order no: ${orderId}`} />
      {loading ? (
        <LinearProgress color="secondary" />
      ) : (
        <Container>
          <Grid container>
            <Grid item sm={8} xs={12}>
              <Typography variant="h4" gutterBottom color="secondary">
                User Details
              </Typography>
              <Typography>
                <b>{order.user.name}</b>
              </Typography>
              <Typography>{order.user.email}</Typography>
              <Typography gutterBottom className={classes.address}>
                {order.shippingDetails.addressLine1},{' '}
                {order.shippingDetails.addressLine2},{' '}
                {order.shippingDetails.city}, {order.shippingDetails.state},{' '}
                {order.shippingDetails.pincode}
              </Typography>
              <Typography variant="h4" color="secondary">
                Order Details
              </Typography>
              <Table className={classes.tableContainer}>
                <TableHead>
                  <TableRow>
                    <TableCell>
                      <b>Specification</b>
                    </TableCell>
                    <TableCell>
                      <b>Value</b>
                    </TableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                  <TableRow>
                    <TableCell>Gerber File</TableCell>
                    <TableCell>
                      <a href={order.gerberFileUrl}>
                        <Button
                          startIcon={<CloudDownload />}
                          variant="contained"
                          color="primary"
                        >
                          Download Gerber File
                        </Button>
                      </a>
                    </TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell>Layers</TableCell>
                    <TableCell>{order.pcbDetails.layers}</TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell>Dimensions</TableCell>
                    <TableCell>
                      X: {order.pcbDetails.dimensions.x} mm, Y:{' '}
                      {order.pcbDetails.dimensions.y} mm
                    </TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell>Quantity</TableCell>
                    <TableCell>{order.pcbDetails.quantity}</TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell>Thickness</TableCell>
                    <TableCell>{order.pcbDetails.thickness}</TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell>Color</TableCell>
                    <TableCell>
                      {order.pcbDetails.color.charAt(0).toUpperCase() +
                        order.pcbDetails.color.slice(1)}
                    </TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell>Surface Finish</TableCell>
                    <TableCell>{order.pcbDetails.surfaceFinish}</TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell>Copper Weight</TableCell>
                    <TableCell>{order.pcbDetails.copperWeight} µm</TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell>Gold Fingers</TableCell>
                    <TableCell>
                      {order.pcbDetails.goldFinger ? 'Yes' : 'No'}
                    </TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell>Flying Probe Test</TableCell>
                    <TableCell>
                      {order.pcbDetails.flyingProbeTest ? 'Yes' : 'No'}
                    </TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell>Castellated Holes</TableCell>
                    <TableCell>
                      {order.pcbDetails.castellatedHoles ? 'Yes' : 'No'}
                    </TableCell>
                  </TableRow>
                </TableBody>
              </Table>
              {order.pcbDetails.remarks && (
                <Typography className={classes.remark}>
                  <b>Remark:</b> {order.pcbDetails.remarks}
                </Typography>
              )}
            </Grid>
            <Grid item sm={4} xs={12}>
              <Typography variant="h4" gutterBottom color="secondary">
                Tracking
              </Typography>
              <TableContainer component={Card}>
                <Table>
                  <TableHead>
                    <TableRow>
                      <TableCell>
                        <b>Detail</b>
                      </TableCell>
                      <TableCell>
                        <b>Status</b>
                      </TableCell>
                    </TableRow>
                  </TableHead>
                  <TableBody>
                    <TableRow>
                      <TableCell scope="row">Review</TableCell>
                      <TableCell>
                        {order.underReview
                          ? 'Under Review'
                          : order.reviewPassed
                          ? 'Passed'
                          : 'Failed'}
                      </TableCell>
                    </TableRow>
                    {user && user.isAdmin && !order.underReview && (
                      <TableRow>
                        <TableCell scope="row">Reviewed By</TableCell>
                        <TableCell>{order.reviewedBy.name}</TableCell>
                      </TableRow>
                    )}
                    <TableRow>
                      <TableCell scope="row">Paid</TableCell>
                      <TableCell>
                        {order.isPaid || success ? (
                          <div
                            style={{ display: 'flex', alignItems: 'center' }}
                          >
                            <Check className={classes.checkIcon} />
                            {order.paidAt && order.paidAt.substring(0, 10)}
                          </div>
                        ) : (
                          <Clear className={classes.clearIcon} />
                        )}
                      </TableCell>
                    </TableRow>
                    <TableRow>
                      <TableCell scope="row">Dispatched</TableCell>
                      <TableCell>
                        {order.isDispatched ? (
                          <div
                            style={{ display: 'flex', alignItems: 'center' }}
                          >
                            <Check className={classes.checkIcon} />
                            {order.dispatchedAt &&
                              order.dispatchedAt.substring(0, 10)}
                          </div>
                        ) : (
                          <Clear className={classes.clearIcon} />
                        )}
                      </TableCell>
                    </TableRow>
                    {order.logisticsPartner && (
                      <TableRow>
                        <TableCell scope="row">Logistics Partner</TableCell>
                        <TableCell>{order.logisticsPartner}</TableCell>
                      </TableRow>
                    )}
                    {order.trackingId && (
                      <TableRow>
                        <TableCell scope="row">Tracking ID</TableCell>
                        <TableCell>{order.trackingId}</TableCell>
                      </TableRow>
                    )}
                  </TableBody>
                </Table>
                {user && user.isAdmin && !order.isPaid && order.underReview ? (
                  <>
                    <TextField
                      variant="outlined"
                      color="secondary"
                      value={adjustedPrice}
                      onChange={(e) => setAdjustedPrice(e.target.value)}
                      label="Adjusted Price"
                      fullWidth
                      required
                    />
                    <Button
                      style={{ width: '50%', borderRadius: 0 }}
                      variant="contained"
                      color="secondary"
                      onClick={() =>
                        dispatch(
                          reviewOrder(order._id, true, adjustedPrice, user._id)
                        )
                      }
                    >
                      Approve
                    </Button>
                    <Button
                      style={{
                        width: '50%',
                        background: '#f44336',
                        borderRadius: 0,
                      }}
                      variant="contained"
                      onClick={() =>
                        dispatch(
                          reviewOrder(order._id, false, adjustedPrice, user._id)
                        )
                      }
                    >
                      Reject
                    </Button>
                  </>
                ) : user &&
                  user.isAdmin &&
                  order.reviewPassed &&
                  order.isPaid &&
                  !order.isDispatched ? (
                  <form onSubmit={onDispatchSubmit}>
                    <TextField
                      variant="outlined"
                      color="secondary"
                      value={logisticsPartner}
                      onChange={(e) => setLogisticsPartner(e.target.value)}
                      label="Logistics Partner"
                      fullWidth
                      required
                    />
                    <TextField
                      variant="outlined"
                      color="secondary"
                      value={trackingId}
                      onChange={(e) => setTrackingId(e.target.value)}
                      label="Tracking ID"
                      fullWidth
                      required
                    />
                    <Button
                      variant="contained"
                      color="secondary"
                      type="submit"
                      fullWidth
                      required
                    >
                      Mark as Dispatched
                    </Button>
                  </form>
                ) : (
                  user &&
                  !user.isAdmin &&
                  !order.isPaid && (
                    <Button
                      disabled={order.underReview || !order.reviewPassed}
                      variant="contained"
                      color="primary"
                      onClick={displayRazorpay}
                      fullWidth
                    >
                      Pay
                    </Button>
                  )
                )}
              </TableContainer>
              <Typography
                variant="h4"
                className={classes.cost}
                gutterBottom
                color="secondary"
              >
                Cost Breakdown
              </Typography>
              <TableContainer component={Card}>
                <Table>
                  <TableHead>
                    <TableRow>
                      <TableCell>
                        <b>Cost Type</b>
                      </TableCell>
                      <TableCell>
                        <b>Price</b>
                      </TableCell>
                    </TableRow>
                  </TableHead>
                  <TableBody>
                    <TableRow>
                      <TableCell scope="row">Estimated PCB Cost</TableCell>
                      <TableCell>₹ {order.orderPrice}</TableCell>
                    </TableRow>
                    {order.isAdjusted && (
                      <TableRow>
                        <TableCell scope="row">
                          <b>Adjusted PCB Cost</b>
                        </TableCell>
                        <TableCell>
                          <b>₹ {order.adjustedPrice}</b>
                        </TableCell>
                      </TableRow>
                    )}
                    <TableRow>
                      <TableCell scope="row">Tax</TableCell>
                      <TableCell>₹ {order.taxPrice}</TableCell>
                    </TableRow>
                    {order.isAdjusted && (
                      <TableRow>
                        <TableCell scope="row">
                          <b>Adjusted Tax</b>
                        </TableCell>
                        <TableCell>
                          <b>₹ {order.adjustedTax}</b>
                        </TableCell>
                      </TableRow>
                    )}
                    <TableRow>
                      <TableCell scope="row">Shipping</TableCell>
                      <TableCell>₹ {order.shippingPrice}</TableCell>
                    </TableRow>
                    <TableRow>
                      <TableCell scope="row">
                        <b>Estimated Total Cost</b>
                      </TableCell>
                      <TableCell>
                        <b>₹ {order.totalPrice}</b>
                      </TableCell>
                    </TableRow>
                    {order.isAdjusted && (
                      <TableRow>
                        <TableCell scope="row">
                          <b>Adjusted Total Cost</b>
                        </TableCell>
                        <TableCell>
                          <b>₹ {order.adjustedTotal}</b>
                        </TableCell>
                      </TableRow>
                    )}
                  </TableBody>
                </Table>
              </TableContainer>
            </Grid>
          </Grid>
        </Container>
      )}
    </>
  );
};

export default OrderDetailsPage;
