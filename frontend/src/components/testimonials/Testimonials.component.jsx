import Slider from 'react-slick';
import { Typography, Grid } from '@material-ui/core';
import { FormatQuote } from '@material-ui/icons';
import useStyles from './Testimonials.styles';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

import iotBoardImg from '../../assets/2.JPG';
import digitalTokenImg from '../../assets/1.JPG';
import thermalPrinterImg from '../../assets/6.JPG';
import sstLogo from '../../assets/sst-logo.jpg';
import waitlessbuzzLogo from '../../assets/waitlessbuzz-logo.jpg';
import a2dLogo from '../../assets/a2d-logo.jpg';

const Testimonials = () => {
  const settings = {
    arrows: true,
    dots: true,
    slidesToShow: 1,
    slidesToScroll: 1,
  };

  const classes = useStyles();

  return (
    <Slider {...settings} className={classes.wrapper}>
      <div>
        <Grid container className={classes.testimonialCard}>
          <Grid item sm={6} xs={12}>
            <img
              src={iotBoardImg}
              className={classes.testimonialCardImage}
              alt="SST-IoT-Board (Development boards for students)"
            />
          </Grid>
          <Grid item sm={6} xs={12}>
            <div className={classes.testimonialCardText}>
              <FormatQuote
                fontSize="large"
                color="secondary"
                className={classes.quoteIcon}
              />
              <Typography variant="body1" gutterBottom>
                Very Well done, happy with PCB quality and on time delivery on
                both prototyping and production PCBs.
              </Typography>
              <div className={classes.userInfo}>
                <img
                  src={sstLogo}
                  className={classes.userImage}
                  alt="Testimonial user avatar"
                  width="50"
                  height="50"
                />
                <Typography variant="h6">
                  SST Technologies, Bangalore
                </Typography>
              </div>
            </div>
          </Grid>
        </Grid>
      </div>
      <div>
        <Grid container className={classes.testimonialCard}>
          <Grid item sm={6} xs={12}>
            <img
              src={thermalPrinterImg}
              className={classes.testimonialCardImage}
              alt="Thermal printer circuit board"
            />
          </Grid>
          <Grid item sm={6} xs={12}>
            <div className={classes.testimonialCardText}>
              <FormatQuote
                fontSize="large"
                color="secondary"
                className={classes.quoteIcon}
              />
              <Typography variant="body1" gutterBottom>
                Quick prototyping, fast and effcient.
              </Typography>
              <div className={classes.userInfo}>
                <img
                  src={a2dLogo}
                  className={classes.userImage}
                  alt="Testimonial user avatar"
                  width="50"
                  height="50"
                />
                <Typography variant="h6">Sanjay, A2D Circuits</Typography>
              </div>
            </div>
          </Grid>
        </Grid>
      </div>
      <div>
        <Grid container className={classes.testimonialCard}>
          <Grid item sm={6} xs={12}>
            <img
              src={digitalTokenImg}
              className={classes.testimonialCardImage}
              alt="A prototype for digital token system"
            />
          </Grid>
          <Grid item sm={6} xs={12}>
            <div className={classes.testimonialCardText}>
              <FormatQuote
                fontSize="large"
                color="secondary"
                className={classes.quoteIcon}
              />
              <Typography variant="body1" gutterBottom>
                Highly recommeded for fast prototyping!
              </Typography>
              <div className={classes.userInfo}>
                <img
                  src={waitlessbuzzLogo}
                  className={classes.userImage}
                  alt="Testimonial user avatar"
                  width="50"
                  height="50"
                />
                <Typography variant="h6">Waitlessbuzz, Bangalore</Typography>
              </div>
            </div>
          </Grid>
        </Grid>
      </div>
    </Slider>
  );
};

export default Testimonials;
