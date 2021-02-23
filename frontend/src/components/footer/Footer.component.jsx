import { Link, useRouteMatch } from 'react-router-dom';
import { Container, Grid, Typography } from '@material-ui/core';
import {
  AiOutlineMail,
  AiOutlinePhone,
  AiOutlineFacebook,
  AiOutlineTwitter,
  AiOutlineInstagram,
  AiOutlineLinkedin,
  AiTwotoneBank,
} from 'react-icons/ai';
import { ReactComponent as Logo } from '../../assets/firmLogo.svg';
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
          <Grid item md={3} sm={12}>
            <Logo />
          </Grid>
          <Grid item md={3} sm={6}>
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
          <Grid item md={3} sm={6}>
            <Typography className={classes.footerHead} variant="h5">
              Contact Us
            </Typography>
            <hr className={classes.hr} />
            <div className={classes.contactContainer}>
              <div className={classes.contact}>
                <AiOutlineMail fontSize={28} />{' '}
                <a href="mailto:thefirm.dev@gmail.com">
                  <Typography className={classes.contactText}>
                    thefirm.dev@gmail.com
                  </Typography>
                </a>
              </div>
              <div className={classes.contact}>
                <AiOutlinePhone fontSize={28} />{' '}
                <a href="phone:7411475974">
                  <Typography className={classes.contactText}>
                    +91 74114 75974
                  </Typography>
                </a>
              </div>
              <div className={classes.contact}>
                <AiTwotoneBank fontSize={64} />
                <Typography className={classes.contactText}>
                  No.408, 4th Floor B Block DSATM Kanakpura Road, Bengaluru, KA
                </Typography>
              </div>
            </div>
          </Grid>
          <Grid item md={3} sm={12}>
            <Typography className={classes.footerHead} variant="h5">
              Social Media
            </Typography>
            <hr className={classes.hr} />
            <div className={classes.socialContainer}>
              <div>
                <div style={{ textAlign: 'left' }}>
                  <a
                    href="https://www.thefirm.dev/"
                    className={classes.socialLink}
                  >
                    <AiOutlineFacebook
                      className={classes.socialIcon}
                      fontSize={28}
                    />{' '}
                    Facebook
                  </a>
                </div>
                <div style={{ textAlign: 'left' }}>
                  <a
                    href="https://www.instagram.com/thefirm.dev/?hl=en"
                    className={classes.socialLink}
                  >
                    <AiOutlineInstagram
                      className={classes.socialIcon}
                      fontSize={28}
                    />{' '}
                    Instagram
                  </a>
                </div>
                <div style={{ textAlign: 'left' }}>
                  <a
                    href="https://www.thefirm.dev/"
                    className={classes.socialLink}
                  >
                    <AiOutlineLinkedin
                      className={classes.socialIcon}
                      fontSize={28}
                    />{' '}
                    LinkedIn
                  </a>
                </div>
                <div>
                  <a
                    href="https://twitter.com/ThefirmD"
                    className={classes.socialLink}
                  >
                    <AiOutlineTwitter
                      className={classes.socialIcon}
                      fontSize={28}
                    />{' '}
                    Twitter
                  </a>
                </div>
              </div>
            </div>
          </Grid>
        </Grid>
      </Container>
    </footer>
  );
};

export default Footer;
