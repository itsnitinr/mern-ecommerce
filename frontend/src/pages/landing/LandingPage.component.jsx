import { Typography, Container, Button, Grid } from '@material-ui/core';
import Navbar from '../../components/navbar/Navbar.component';
import HeroCarousel from '../../components/hero-carousel/HeroCarousel.component';
import HeroForm from '../../components/hero-form/HeroForm.component';
import FeatureCard from '../../components/feature-card/FeatureCard.component';
import aboutImage from '../../assets/bg1.jpg';
import useStyles from './LandingPage.styles';

import printerImage from '../../assets/3d-printer.svg';
import microcontrollerImage from '../../assets/microcontroller.svg';
import pcbImage from '../../assets/pcb.svg';
import productImage from '../../assets/product.svg';

const LandingPage = () => {
  const classes = useStyles();

  return (
    <>
      <Navbar />
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
              We help companies in Firmware Development / Rapid Prototyping /
              Product Developments based on electronics, embedded and IoT
              solutions. Transition between an idea to a prototype has never
              been this easy. Just contact us and let's talk about bringing your
              idea into reality.
            </Typography>
            <Typography
              variant="body1"
              color="textPrimary"
              className={classes.aboutBody}
            >
              We help companies in Firmware Development / Rapid Prototyping /
              Product Developments based on electronics, embedded and IoT
              solutions.
            </Typography>
            <Button
              variant="contained"
              className={classes.greenButton}
              color="secondary"
            >
              Know More
            </Button>
          </div>
        </Container>
      </section>
      <section className={classes.featuresSection}>
        <div className={classes.featuresContent}>
          <Typography
            variant="h4"
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
      </section>
    </>
  );
};

export default LandingPage;
