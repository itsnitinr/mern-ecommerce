import { Link, useRouteMatch } from 'react-router-dom';
import { Container, Grid, Typography } from '@material-ui/core';
import {
  AiOutlineMail,
  AiOutlinePhone,
  AiOutlineInstagram,
  AiOutlineLinkedin,
  AiTwotoneBank,
} from 'react-icons/ai';
import { ReactComponent as Logo } from '../../assets/PCBCUPIDfooterlogo.svg';
import useStyles from './Footer.styles';

const Footer = () => {
  const classes = useStyles();

  let match = useRouteMatch(['/signin', '/signup']);

  return (
    <>
      <footer
        className={classes.footerContainer}
        style={match && { display: 'none' }}
      >
        <Container>
          <Grid container spacing={4} justify="center" alignItems="flex-start">
            <Grid item md={3} sm={12}>
              <Logo style={{ height: '100%', width: '100%' }} />
            </Grid>
            <Grid item md={3} sm={6}>
              <Typography className={classes.footerHead} variant="h5">
                Pages
              </Typography>
              <hr className={classes.hr} />
              <div className={classes.pages}>
                <div className={classes.pageLinks}>
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
                  <a href="mailto:customercare@pcbcupid.com">
                    <Typography className={classes.contactText}>
                      customercare@pcbcupid.com
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
                    No.408, 4th Floor B Block DSATM Kanakpura Road, Bengaluru,
                    KA
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
                      href="https://www.instagram.com/pcbcupid/"
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
                      href="https://www.linkedin.com/company/pcbcupid"
                      className={classes.socialLink}
                    >
                      <AiOutlineLinkedin
                        className={classes.socialIcon}
                        fontSize={28}
                      />{' '}
                      LinkedIn
                    </a>
                  </div>
                </div>
              </div>
            </Grid>
          </Grid>
        </Container>
      </footer>
      <section className={classes.copyright}>
        <Typography align="center">
          Copyright &copy;{' '}
          <Typography component="span" color="secondary">
            <b>PCB Cupid</b>
          </Typography>
        </Typography>
      </section>
    </>
  );
};

export default Footer;
