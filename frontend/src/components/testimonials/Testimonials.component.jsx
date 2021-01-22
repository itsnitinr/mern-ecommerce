import Slider from 'react-slick';
import { Typography, Grid } from '@material-ui/core';
import { FormatQuote } from '@material-ui/icons';
import useStyles from './Testimonials.styles';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

import pcbImage from '../../assets/bg1.jpg';

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
              src={pcbImage}
              className={classes.testimonialCardImage}
              alt="Ordered PCB"
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
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Eos
                odio aspernatur quam ducimus repudiandae voluptate aliquid,
                nobis consectetur officia, temporibus unde voluptatem cumque
                praesentium dicta culpa aliquam consequatur veniam magni.
              </Typography>
              <div className={classes.userInfo}>
                <img
                  src="https://picsum.photos/100"
                  className={classes.userImage}
                  alt="Testimonial user avatar"
                  width="50"
                  height="50"
                />
                <Typography variant="h6">John Doe</Typography>
              </div>
            </div>
          </Grid>
        </Grid>
      </div>
      <div>
        <Grid container className={classes.testimonialCard}>
          <Grid item sm={6} xs={12}>
            <img
              src={pcbImage}
              className={classes.testimonialCardImage}
              alt="Ordered PCB"
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
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Eos
                odio aspernatur quam ducimus repudiandae voluptate aliquid,
                nobis consectetur officia, temporibus unde voluptatem cumque
                praesentium dicta culpa aliquam consequatur veniam magni.
              </Typography>
              <div className={classes.userInfo}>
                <img
                  src="https://picsum.photos/100"
                  className={classes.userImage}
                  alt="Testimonial user avatar"
                  width="50"
                  height="50"
                />
                <Typography variant="h6">John Doe</Typography>
              </div>
            </div>
          </Grid>
        </Grid>
      </div>
      <div>
        <Grid container className={classes.testimonialCard}>
          <Grid item sm={6} xs={12}>
            <img
              src={pcbImage}
              className={classes.testimonialCardImage}
              alt="Ordered PCB"
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
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Eos
                odio aspernatur quam ducimus repudiandae voluptate aliquid,
                nobis consectetur officia, temporibus unde voluptatem cumque
                praesentium dicta culpa aliquam consequatur veniam magni.
              </Typography>
              <div className={classes.userInfo}>
                <img
                  src="https://picsum.photos/100"
                  className={classes.userImage}
                  alt="Testimonial user avatar"
                  width="50"
                  height="50"
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
