import Slider from 'react-slick';
import { Typography } from '@material-ui/core';
import useStyles from './HeroCarousel.styles';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

const HeroCarousel = () => {
  const settings = {
    autoplay: true,
    autoplaySpeed: 5000,
    fade: true,
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
  };

  const classes = useStyles();

  return (
    <div style={{ position: 'relative', overflowX: 'hidden' }}>
      <Slider {...settings}>
        <div className={classes.slideOne}>
          <div className={classes.textContainer}>
            <Typography variant="h3" className={classes.headingText}>
              An Awesome Quote
            </Typography>
            <Typography variant="h6" className={classes.paragraphText}>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempore
              iste mollitia voluptatum aspernatur asperiores enim laborum et
              rerum fugit deleniti.
            </Typography>
          </div>
        </div>
        <div className={classes.slideTwo}>
          <div className={classes.textContainer}>
            <Typography variant="h3" className={classes.headingText}>
              An Awesome Quote
            </Typography>
            <Typography variant="h6" className={classes.paragraphText}>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempore
              iste mollitia voluptatum aspernatur asperiores enim laborum et
              rerum fugit deleniti.
            </Typography>
          </div>
        </div>
        <div className={classes.slideThree}>
          <div className={classes.textContainer}>
            <Typography variant="h3" className={classes.headingText}>
              An Awesome Quote
            </Typography>
            <Typography variant="h6" className={classes.paragraphText}>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempore
              iste mollitia voluptatum aspernatur asperiores enim laborum et
              rerum fugit deleniti.
            </Typography>
          </div>
        </div>
      </Slider>
    </div>
  );
};

export default HeroCarousel;
