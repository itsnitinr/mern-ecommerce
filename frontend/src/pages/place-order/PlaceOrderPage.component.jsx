import { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { useSelector } from 'react-redux';
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

import PCBDetails from './PCBDetails.component';

function getSteps() {
  return ['Enter PCB Details', 'Gerber File Upload', 'Enter Shipping Details'];
}

const PlaceOrderPage = ({ history }) => {
  const { user } = useSelector((state) => state.userLogin);

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
    layers: query.get('layers') || '',
    thickness: query.get('thickness') || '',
    color: '',
    surfaceFinish: '',
    copperWeight: '',
    goldFingers: '',
    flyingProbeTest: '',
    castellatedHoles: '',
    remarks: '',
  });

  let orderPrice, taxPrice, shippingPrice;

  if (details.height && details.width && details.quantity) {
    orderPrice =
      (((details.height / 10) * details.width) / 10) * 1.5 * details.quantity;
    if (details.color !== 'green' && details.color) {
      orderPrice += 100;
    }
    taxPrice = 0.18 * orderPrice;
    shippingPrice = orderPrice > 100 ? 0 : 50;
  }

  const onChange = (e) => {
    setDetails({ ...details, [e.target.name]: e.target.value });
  };

  //   const onSubmit = (e) => {
  //     e.preventDefault();
  //     const orderDetails = {
  //       layers,
  //       dimensions: {
  //         x: parseInt(height),
  //         y: parseInt(width),
  //       },
  //       quantity: parseInt(quantity),
  //       thickness,
  //       color,
  //       surfaceFinish,
  //       copperWeight,
  //       goldFingers,
  //       flyingProbeTest,
  //       castellatedHoles,
  //       remarks,
  //     };
  //     console.log(orderDetails);
  //   };

  function getStepContent(stepIndex) {
    switch (stepIndex) {
      case 0:
        return (
          <PCBDetails
            details={details}
            onChange={onChange}
            price={{ orderPrice, taxPrice, shippingPrice }}
          />
        );
      case 1:
        return 'Gerber View Component';
      case 2:
        return 'Shipping Component';
      default:
        return 'You were not supposed to reach here!';
    }
  }

  useEffect(() => {
    if (!user) {
      history.push('/signin');
    }
  }, [history, user]);

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
          <h1>All steps completed</h1>
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
            <Button
              variant="contained"
              color="secondary"
              className={classes.button}
              onClick={handleNext}
            >
              {activeStep === steps.length - 1 ? 'Finish' : 'Next'}
            </Button>
          </Grid>
        )}
      </Container>
    </>
  );
};

export default PlaceOrderPage;
