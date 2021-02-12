import { useState } from 'react';
import { Container, Grid, Typography, Button } from '@material-ui/core';
import {
  Mail,
  Phone,
  LinkedIn,
  Instagram,
  Twitter,
  Facebook,
} from '@material-ui/icons';
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
            We help companies in Firmware Development / Rapid Prototyping /
            Product Developments based on electronics, embedded and IoT
            solutions. Transition between an idea to a prototype has never been
            this easy. Just contact us and let's talk about bringing your idea
            into reality.
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
            Place Order
          </Button>
        </div>
      </Container>
      <section className={classes.contactBanner}>
        <Typography align="center" variant="h4" color="secondary">
          Got any queries?
        </Typography>
        <Container className={classes.innerBanner}>
          <Grid container justify="center" spacing={5}>
            <Grid item sm={6} xs={12}>
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
            <Grid item sm={6} xs={12}>
              <Typography
                className={classes.aboutHeading}
                align="center"
                variant="h5"
                gutterBottom
              >
                <Mail /> Email Address
              </Typography>
              <a href="mailto:thefirm.dev@gmail.com">
                <Typography variant="h6" color="secondary" align="center">
                  <b>thefirm.dev@gmail.com</b>
                </Typography>
              </a>
            </Grid>
            <Grid item sm={12} xs={12}>
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
                  href="https://www.thefirm.dev/"
                  className={classes.socialIcon}
                >
                  <LinkedIn fontSize="small" />
                </a>
                <a
                  href="https://www.instagram.com/thefirm.dev/?hl=en"
                  className={classes.socialIcon}
                >
                  <Instagram fontSize="small" />
                </a>
                <a
                  href="https://twitter.com/ThefirmD"
                  className={classes.socialIcon}
                >
                  <Twitter fontSize="small" />
                </a>
                <a
                  href="https://twitter.com/ThefirmD"
                  className={classes.socialIcon}
                >
                  <Facebook fontSize="small" />
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
              <CountUp
                end={100}
                duration={5}
                start={viewPortEntered ? null : 0}
              >
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
              <CountUp end={75} duration={5} start={viewPortEntered ? null : 0}>
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
              <CountUp end={50} duration={5} start={viewPortEntered ? null : 0}>
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
                        Manufacturing Partners
                      </Typography>
                    </>
                  </VisibilitySensor>
                )}
              </CountUp>
            </Grid>
            <Grid item sm={3} xs={12}>
              <CountUp
                end={200}
                duration={5}
                start={viewPortEntered ? null : 0}
              >
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
