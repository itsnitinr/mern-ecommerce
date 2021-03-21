import { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import {
  Stepper,
  Step,
  StepLabel,
  Button,
  Container,
  Grid,
} from '@material-ui/core';
import PageHeader from '../../components/page-header/PageHeader.component';
import useStyles from './PlaceOrderPage.styles';

import { placeOrder } from '../../redux/order/order.actions';

import PCBDetails from './PCBDetails.component';
import GerberUpload from './GerberUpload.component';
import BillingDetails from './BillingDetails.component';
import ShippingDetails from './ShippingDetails.component';
import OrderResult from './OrderResult.component';

function getSteps() {
  return [
    'PCB Details',
    'Gerber File Upload',
    'Billing Details',
    'Shipping Details',
  ];
}

const PlaceOrderPage = ({ history }) => {
  const { user } = useSelector((state) => state.userLogin);

  const { order } = useSelector((state) => state.orderCreate);

  const billingAddress = useSelector((state) => state.billingAddress);
  const shippingAddress = useSelector((state) => state.shippingAddress);

  const [activeStep, setActiveStep] = useState(0);
  const steps = getSteps();

  const handleNext = () => {
    setActiveStep((previousStep) => previousStep + 1);
  };

  const handleBack = () => {
    setActiveStep((previousStep) => previousStep - 1);
  };

  function useQuery() {
    return new URLSearchParams(useLocation().search);
  }

  const query = useQuery();

  const [details, setDetails] = useState({
    height: query.get('height') || '',
    width: query.get('width') || '',
    quantity: '',
    layers: query.get('layers') || 2,
    thickness: query.get('thickness') || 1.6,
    color: 'Green',
    surfaceFinish: 'HASL',
    copperWeight: 35,
    goldFingers: false,
    flyingProbeTest: false,
    castellatedHoles: false,
    remarks: '',
  });

  const [file, setFile] = useState('');

  const [shippingDetails, setShippingDetails] = useState({
    addressLine1: shippingAddress.addressLine1 || '',
    addressLine2: shippingAddress.addressLine2 || '',
    city: shippingAddress.city || '',
    state: shippingAddress.state || '',
    pincode: shippingAddress.pincode || '',
    phoneNumber: shippingAddress.phoneNumber || '',
  });

  const [billingDetails, setBillingDetails] = useState({
    addressLine1: billingAddress.addressLine1 || '',
    addressLine2: billingAddress.addressLine2 || '',
    city: billingAddress.city || '',
    state: billingAddress.state || '',
    pincode: billingAddress.pincode || '',
    phoneNumber: billingAddress.phoneNumber || '',
  });

  const [sameAddress, setSameAddress] = useState(false);

  let orderPrice, taxPrice, shippingPrice;

  if (details.height && details.width && details.quantity) {
    orderPrice =
      Math.round(
        (((details.height / 10) * details.width) / 10) *
          1.5 *
          details.quantity *
          100
      ) / 100;
    if (details.color !== 'Green' && details.color) {
      orderPrice += 100;
    }
    taxPrice = Math.round(0.18 * orderPrice * 100) / 100;
    shippingPrice = details.quantity > 50 ? 0 : 100;
  }

  const onChange = (e) => {
    setDetails({ ...details, [e.target.name]: e.target.value });
  };

  const onButtonChange = (e) => {
    setDetails({ ...details, [e.currentTarget.name]: e.currentTarget.value });
  };

  const onHeightChange = (e) => {
    // Max: 304.8 for single layer, 457.2 for double layer
    const maxHeight = details.layers === 2 ? 457.2 : 304.8;
    setDetails({
      ...details,
      height: Math.min(parseInt(e.target.value), maxHeight),
    });
  };

  const onWidthChange = (e) => {
    // Max: 1219.2 for single layer, 457.2 for double layer
    const maxWidth = details.layers === 2 ? 457.2 : 1219.2;
    setDetails({
      ...details,
      width: Math.min(parseInt(e.target.value), maxWidth),
    });
  };

  const onShippingChange = (e) => {
    setShippingDetails({ ...shippingDetails, [e.target.name]: e.target.value });
  };

  const onBillingChange = (e) => {
    setBillingDetails({ ...billingDetails, [e.target.name]: e.target.value });
  };

  const dispatch = useDispatch();

  const onSubmit = (e) => {
    e.preventDefault();
    const orderDetails = {
      pcbDetails: {
        layers: details.layers,
        dimensions: {
          x: parseInt(details.height),
          y: parseInt(details.width),
        },
        quantity: parseInt(details.quantity),
        thickness: details.thickness,
        color: details.color,
        surfaceFinish: details.surfaceFinish,
        copperWeight: details.copperWeight,
        goldFingers: details.goldFingers,
        flyingProbeTest: details.flyingProbeTest,
        castellatedHoles: details.castellatedHoles,
        remarks: details.remarks,
      },
      orderPrice,
      taxPrice,
      shippingPrice,
      billingDetails,
      totalPrice:
        Math.round((orderPrice + taxPrice + shippingPrice) * 100) / 100,
      gerberFileUrl: file,
      shippingDetails,
    };
    dispatch(placeOrder(orderDetails));
    setActiveStep(4);
  };

  function getStepContent(stepIndex) {
    switch (stepIndex) {
      case 0:
        return (
          <PCBDetails
            details={details}
            onChange={onChange}
            onButtonChange={onButtonChange}
            price={{ orderPrice, taxPrice, shippingPrice }}
            onHeightChange={onHeightChange}
            onWidthChange={onWidthChange}
          />
        );
      case 1:
        return <GerberUpload file={file} setFile={setFile} />;
      case 2:
        return (
          <BillingDetails
            details={billingDetails}
            onChange={onBillingChange}
            sameAddress={sameAddress}
            setSameAddress={setSameAddress}
          />
        );
      case 3:
        return (
          <ShippingDetails
            details={shippingDetails}
            onChange={onShippingChange}
          />
        );
      default:
        return 'You were not supposed to reach here!';
    }
  }

  const pcbDetailsCheck = () => {
    if (
      details.height > 0 &&
      details.width > 0 &&
      details.layers !== '' &&
      details.thickness !== '' &&
      details.quantity > 0 &&
      details.color !== '' &&
      details.surfaceFinish !== '' &&
      details.copperWeight !== ''
    )
      return false;
    return true;
  };

  useEffect(() => {
    if (!user) {
      history.push('/signin');
    }
    if (user && user.isAdmin) {
      history.push('/');
    }
    if (sameAddress) {
      setShippingDetails(billingDetails);
    }
    if (!sameAddress) {
      setShippingDetails({
        addressLine1: shippingAddress.addressLine1 || '',
        addressLine2: shippingAddress.addressLine2 || '',
        city: shippingAddress.city || '',
        state: shippingAddress.state || '',
        pincode: shippingAddress.pincode || '',
      });
    }
  }, [history, user, sameAddress, billingDetails, shippingAddress]);

  const classes = useStyles();

  return (
    <>
      <PageHeader title="Place Order" subtitle="Enter your details" />
      <Stepper activeStep={activeStep} alternativeLabel>
        {steps.map((label) => (
          <Step key={label}>
            <StepLabel>{label}</StepLabel>
          </Step>
        ))}
      </Stepper>
      <Container className={classes.contentContainer}>
        {activeStep === steps.length ? (
          <OrderResult orderId={order && order._id} />
        ) : (
          <Grid container className={classes.root}>
            {getStepContent(activeStep)}
            <Button
              disabled={activeStep === 0}
              onClick={handleBack}
              className={classes.button}
              color="primary"
            >
              Back
            </Button>
            {activeStep < 3 && (
              <Button
                variant="contained"
                color="secondary"
                className={classes.button}
                onClick={handleNext}
                disabled={
                  (activeStep === 0 && pcbDetailsCheck()) ||
                  (activeStep === 1 && !file) ||
                  (activeStep === 2 &&
                    (!billingDetails.addressLine1 ||
                      !billingDetails.addressLine2 ||
                      !billingDetails.city ||
                      !billingDetails.state ||
                      !billingDetails.pincode ||
                      !billingDetails.phoneNumber))
                }
              >
                Next
              </Button>
            )}
            {activeStep === 3 && (
              <Button
                variant="contained"
                color="secondary"
                className={classes.button}
                onClick={onSubmit}
                disabled={
                  !shippingDetails.addressLine1 ||
                  !shippingDetails.addressLine2 ||
                  !shippingDetails.city ||
                  !shippingDetails.state ||
                  !shippingDetails.pincode ||
                  !shippingDetails.phoneNumber
                }
              >
                Place Order
              </Button>
            )}
          </Grid>
        )}
      </Container>
    </>
  );
};

export default PlaceOrderPage;
