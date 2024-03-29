import { Typography, Container, Button } from '@material-ui/core';
import { Link } from 'react-router-dom';
import HeroCarousel from '../../components/hero-carousel/HeroCarousel.component';
import HeroForm from '../../components/hero-form/HeroForm.component';
// import FeatureCard from '../../components/feature-card/FeatureCard.component';
import Testimonials from '../../components/testimonials/Testimonials.component';
import useStyles from './LandingPage.styles';

import aboutImage from '../../assets/bg1.jpg';
// import printerImage from '../../assets/3d-printer.svg';
// import microcontrollerImage from '../../assets/microcontroller.svg';
// import pcbImage from '../../assets/pcb.svg';
// import productImage from '../../assets/product.svg';

const LandingPage = () => {
  const classes = useStyles();

  return (
    <>
      <HeroCarousel />
      <HeroForm />
      <section>
        <Container className={classes.aboutContainer}>
          <img src={aboutImage} className={classes.aboutImage} alt="About us" />
          <div className={classes.aboutText}>
            <Typography variant="h2" className={classes.aboutHeading}>
              About Us
            </Typography>
            <Typography
              variant="h6"
              className={classes.aboutHeading}
              color="secondary"
            >
              Who Are We & What Do We Do?
            </Typography>
            <Typography
              variant="body1"
              color="textPrimary"
              className={classes.aboutBody}
            >
              We help you transition your idea to a prototype, it doesn't matter
              if it's your first PCB or you are developing a product we deliver
              our best!
            </Typography>
            <Typography
              variant="body1"
              color="textPrimary"
              className={classes.aboutBody}
            >
              In PCB CUPID, we put our best effort to bring down the cost for
              your R&D which makes it easy and quick to produce prototypes so
              you can iterate, improve way faster.
            </Typography>
            <Typography
              variant="body1"
              color="textPrimary"
              className={classes.aboutBody}
            >
              Try it out by yourself! It starts with low as ₹600!
            </Typography>
            <Link to="/about">
              <Button
                variant="contained"
                className={classes.greenButton}
                color="secondary"
              >
                Know More
              </Button>
            </Link>
          </div>
        </Container>
      </section>
      {/* <section className={classes.featuresSection}>
        <div className={classes.featuresContent}>
          <Typography
            variant="h3"
            align="center"
            className={classes.featuresHeading}
            color="secondary"
          >
            Our Services
          </Typography>
          <hr className={classes.horizontalRule} />
          <Grid container justify="center" spacing={5}>
            <Grid item lg={3} sm={6} xs={12}>
              <FeatureCard
                image={printerImage}
                title="Firmware Development"
                body="End to end solution for your IoT / Embedded Technologies"
              />
            </Grid>
            <Grid item lg={3} sm={6} xs={12}>
              <FeatureCard
                image={microcontrollerImage}
                title="Rapid Prototyping"
                body="Bring your creative ideas into reality with our expertise"
              />
            </Grid>
            <Grid item lg={3} sm={6} xs={12}>
              <FeatureCard
                image={pcbImage}
                title="PCB Designing"
                body="Designing the Best Quality PCB with fabrication"
              />
            </Grid>
            <Grid item lg={3} sm={6} xs={12}>
              <FeatureCard
                image={productImage}
                title="3D Printing"
                body="Designing and printing of 3D models with wide range of filaments."
              />
            </Grid>
          </Grid>
        </div>
      </section> */}
      <section className={classes.testimonialsContainer}>
        <Typography
          variant="h2"
          align="center"
          className={classes.featuresHeading}
          color="primary"
        >
          Testimonials
        </Typography>
        <Typography
          variant="h5"
          align="center"
          color="secondary"
          className={classes.featuresHeading}
        >
          Clients Love Us
        </Typography>
        <Testimonials />
      </section>
    </>
  );
};

export default LandingPage;
