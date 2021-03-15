import { useState } from 'react';
import { Link } from 'react-router-dom';
import { Container, Grid, Typography, Button } from '@material-ui/core';
import { Mail, Phone, LinkedIn, Instagram } from '@material-ui/icons';
import CountUp from 'react-countup';
import VisibilitySensor from 'react-visibility-sensor';
import PageHeader from '../../components/page-header/PageHeader.component';
import aboutImage from '../../assets/bg1.jpg';
import useStyles from './AboutPage.styles';

const AboutPage = () => {
  const classes = useStyles();

  const [viewPortEntered, setViewPortEntered] = useState(false);

  return (
    <>
      <PageHeader title="About Us" subtitle="Who we are & what we do" />
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
            In PCB CUPID, we put our best effort to bring down the cost for your
            R&D which makes it easy and quick to produce prototypes so you can
            iterate, improve way faster.
          </Typography>
          <Typography
            variant="body1"
            color="textPrimary"
            className={classes.aboutBody}
          >
            Try it out by yourself! It starts with low as ₹600!
          </Typography>
          <Link to="/order">
            <Button
              variant="contained"
              className={classes.greenButton}
              color="secondary"
            >
              Place Order
            </Button>
          </Link>
        </div>
      </Container>
      <section className={classes.contactBanner}>
        <Typography align="center" variant="h4" color="secondary">
          Got any queries?
        </Typography>
        <Container className={classes.innerBanner}>
          <Grid container justify="center" spacing={5}>
            <Grid item md={4} sm={6} xs={12}>
              <Typography
                className={classes.aboutHeading}
                align="center"
                variant="h5"
                gutterBottom
              >
                <Phone /> Call Us On
              </Typography>
              <a href="phone:7411475974" className={classes.contactText}>
                <Typography variant="h6" align="center" color="secondary">
                  <b>+91 74114 75974</b>
                </Typography>
              </a>
            </Grid>
            <Grid item md={4} sm={6} xs={12}>
              <Typography
                className={classes.aboutHeading}
                align="center"
                variant="h5"
                gutterBottom
              >
                <Mail /> Email Address
              </Typography>
              <a href="mailto:customercare@pcbcupid.com">
                <Typography variant="h6" color="secondary" align="center">
                  <b>customercare@pcbcupid.com</b>
                </Typography>
              </a>
            </Grid>
            <Grid item md={4} sm={12} xs={12}>
              <Typography
                className={classes.aboutHeading}
                align="center"
                variant="h5"
                gutterBottom
              >
                Follow Our Socials
              </Typography>
              <Typography align="center">
                <a
                  href="https://www.linkedin.com/company/pcbcupid"
                  className={classes.socialIcon}
                >
                  <LinkedIn fontSize="medium" />
                </a>
                <a
                  href="https://www.instagram.com/pcbcupid/"
                  className={classes.socialIcon}
                >
                  <Instagram fontSize="medium" />
                </a>
              </Typography>
            </Grid>
          </Grid>
        </Container>
      </section>
      <section className={classes.countupContainer}>
        <Container>
          <Grid container justify="center" spacing={5}>
            <Grid item sm={3} xs={12}>
              <CountUp end={10} duration={2} start={viewPortEntered ? null : 0}>
                {({ countUpRef }) => (
                  <VisibilitySensor
                    active={!viewPortEntered}
                    onChange={(isVisible) =>
                      isVisible && setViewPortEntered(true)
                    }
                    delayedCall
                  >
                    <>
                      <Typography
                        ref={countUpRef}
                        variant="h2"
                        align="center"
                      ></Typography>
                      <Typography variant="h6" align="center">
                        PCBs Manufactured
                      </Typography>
                    </>
                  </VisibilitySensor>
                )}
              </CountUp>
            </Grid>
            <Grid item sm={3} xs={12}>
              <CountUp end={10} duration={2} start={viewPortEntered ? null : 0}>
                {({ countUpRef }) => (
                  <VisibilitySensor
                    active={!viewPortEntered}
                    onChange={(isVisible) =>
                      isVisible && setViewPortEntered(true)
                    }
                    delayedCall
                  >
                    <>
                      <Typography
                        ref={countUpRef}
                        variant="h2"
                        align="center"
                      ></Typography>
                      <Typography variant="h6" align="center">
                        Projects Undertaken
                      </Typography>
                    </>
                  </VisibilitySensor>
                )}
              </CountUp>
            </Grid>
            <Grid item sm={3} xs={12}>
              <CountUp end={10} duration={2} start={viewPortEntered ? null : 0}>
                {({ countUpRef }) => (
                  <VisibilitySensor
                    active={!viewPortEntered}
                    onChange={(isVisible) =>
                      isVisible && setViewPortEntered(true)
                    }
                    delayedCall
                  >
                    <>
                      <Typography
                        ref={countUpRef}
                        variant="h2"
                        align="center"
                      ></Typography>
                      <Typography variant="h6" align="center">
                        Orders Placed
                      </Typography>
                    </>
                  </VisibilitySensor>
                )}
              </CountUp>
            </Grid>
          </Grid>
        </Container>
      </section>
    </>
  );
};

export default AboutPage;
