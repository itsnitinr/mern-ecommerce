import Slider from 'react-slick';
import { Typography, Grid } from '@material-ui/core';
import { FormatQuote } from '@material-ui/icons';
import useStyles from './Testimonials.styles';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

import pcbImage from '../../assets/bg1.jpg';

const Testimonials = () => {
  const settings = {
    dots: true,
    slidesToShow: 1,
    slidesToScroll: 1,
  };

  const classes = useStyles();

  return (
    <Slider {...settings} className={classes.wrapper}>
      <div>
        <Grid container>
          <Grid item lg={6} sm={6} xs={12}>
            <div className={classes.testimonialLeft}>
              <img
                src={pcbImage}
                alt="Ordered PCB"
                className={classes.testimonialImage}
              />
            </div>
          </Grid>
          <Grid item lg={6} sm={6} xs={12}>
            <div className={classes.testimonialRight}>
              <FormatQuote
                color="secondary"
                fontSize="large"
                className={classes.quoteIcon}
              />
              <Typography variant="body1" align="center">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque
                blanditiis adipisci provident dolores quis impedit cum nostrum
                eos odio ipsam aut consectetur eveniet inventore, eaque amet
                facilis atque natus!
              </Typography>
              <div className={classes.userDetails}>
                <img
                  src="https://i.pravatar.cc/150"
                  alt="User Avatar"
                  className={classes.userImage}
                />
                <Typography variant="h6">John Doe</Typography>
              </div>
            </div>
          </Grid>
        </Grid>
      </div>
      <div>
        <Grid container>
          <Grid item lg={6} sm={6} xs={12}>
            <div className={classes.testimonialLeft}>
              <img
                src={pcbImage}
                alt="Ordered PCB"
                className={classes.testimonialImage}
              />
            </div>
          </Grid>
          <Grid item lg={6} sm={6} xs={12}>
            <div className={classes.testimonialRight}>
              <FormatQuote
                color="secondary"
                fontSize="large"
                className={classes.quoteIcon}
              />
              <Typography variant="body1" align="center">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque
                blanditiis adipisci provident dolores quis impedit cum nostrum
                eos odio ipsam aut consectetur eveniet inventore, eaque amet
                facilis atque natus!
              </Typography>
              <div className={classes.userDetails}>
                <img
                  src="https://i.pravatar.cc/150"
                  alt="User Avatar"
                  className={classes.userImage}
                />
                <Typography variant="h6">John Doe</Typography>
              </div>
            </div>
          </Grid>
        </Grid>
      </div>
      <div>
        <Grid container>
          <Grid item lg={6} sm={6} xs={12}>
            <div className={classes.testimonialLeft}>
              <img
                src={pcbImage}
                alt="Ordered PCB"
                className={classes.testimonialImage}
              />
            </div>
          </Grid>
          <Grid item lg={6} sm={6} xs={12}>
            <div className={classes.testimonialRight}>
              <FormatQuote
                color="secondary"
                fontSize="large"
                className={classes.quoteIcon}
              />
              <Typography variant="body1" align="center">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque
                blanditiis adipisci provident dolores quis impedit cum nostrum
                eos odio ipsam aut consectetur eveniet inventore, eaque amet
                facilis atque natus!
              </Typography>
              <div className={classes.userDetails}>
                <img
                  src="https://i.pravatar.cc/150"
                  alt="User Avatar"
                  className={classes.userImage}
                />
                <Typography variant="h6">John Doe</Typography>
              </div>
            </div>
          </Grid>
        </Grid>
      </div>
    </Slider>
  );
};

export default Testimonials;
