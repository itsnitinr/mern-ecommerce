import { Link, useRouteMatch } from 'react-router-dom';
import { Container, Grid, Typography } from '@material-ui/core';
import {
  Mail,
  Phone,
  Map,
  LinkedIn,
  Instagram,
  Twitter,
  Facebook,
} from '@material-ui/icons';
import useStyles from './Footer.styles';

const Footer = () => {
  const classes = useStyles();

  let match = useRouteMatch(['/signin', '/signup']);

  return (
    <footer
      className={classes.footerContainer}
      style={match && { display: 'none' }}
    >
      <Container>
        <Grid container spacing={4} justify="center">
          <Grid item md={4}>
            <Typography className={classes.footerHead} variant="h5">
              Pages
            </Typography>
            <hr className={classes.hr} />
            <div>
              <Link to="/about">
                <Typography className={classes.link}>About Us</Typography>
              </Link>
              <Link to="/guidelines">
                <Typography className={classes.link}>Guidelines</Typography>
              </Link>
              <Link to="/gallery">
                <Typography className={classes.link}>Gallery</Typography>
              </Link>
            </div>
          </Grid>
          <Grid item md={4}>
            <Typography className={classes.footerHead} variant="h5">
              The Firm
            </Typography>
            <hr className={classes.hr} />
            <Typography className={classes.aboutText}>
              We help companies in Firmware Development / Rapid Prototyping /
              Product Developments based on electronics, embedded and IoT
              solutions.
            </Typography>
          </Grid>
          <Grid item md={4}>
            <Typography className={classes.footerHead} variant="h5">
              Contact
            </Typography>
            <hr className={classes.hr} />
            <div className={classes.contact}>
              <Mail />{' '}
              <a
                href="mailto:thefirm.dev@gmail.com"
                className={classes.contactText}
              >
                <Typography>thefirm.dev@gmail.com</Typography>
              </a>
            </div>
            <div className={classes.contact}>
              <Phone />{' '}
              <a href="phone:7411475974" className={classes.contactText}>
                <Typography>+91 74114 75974</Typography>
              </a>
            </div>
            <div className={classes.contact}>
              <Map />
              <Typography className={classes.contactText}>
                No.408, 4th Floor B Block DSATM Kanakpura Road, Bengaluru, KA
              </Typography>
            </div>
          </Grid>
          <Grid item md={4}>
            <a href="https://www.thefirm.dev/" className={classes.socialIcon}>
              <LinkedIn fontSize="large" />
            </a>
            <a
              href="https://www.instagram.com/thefirm.dev/?hl=en"
              className={classes.socialIcon}
            >
              <Instagram fontSize="large" />
            </a>
            <a
              href="https://twitter.com/ThefirmD"
              className={classes.socialIcon}
            >
              <Twitter fontSize="large" />
            </a>
            <a
              href="https://twitter.com/ThefirmD"
              className={classes.socialIcon}
            >
              <Facebook fontSize="large" />
            </a>
          </Grid>
        </Grid>
      </Container>
    </footer>
  );
};

export default Footer;
