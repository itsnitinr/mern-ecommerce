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
              PCB Cupid
            </Typography>
            <Typography variant="h6" className={classes.paragraphText}>
              We manufacture PCB for makers/ professionals alike, starting from
              prototype to full fledge production. Check out our Gallery to see
              our production result.
            </Typography>
          </div>
        </div>
        <div className={classes.slideTwo}>
          <div className={classes.textContainer}>
            <Typography variant="h3" className={classes.headingText}>
              PCB Cupid
            </Typography>
            <Typography variant="h6" className={classes.paragraphText}>
              We manufacture PCB for makers/ professionals alike, starting from
              prototype to full fledge production. Check out our Gallery to see
              our production result.
            </Typography>
          </div>
        </div>
        <div className={classes.slideThree}>
          <div className={classes.textContainer}>
            <Typography variant="h3" className={classes.headingText}>
              PCB Cupid
            </Typography>
            <Typography variant="h6" className={classes.paragraphText}>
              We manufacture PCB for makers/ professionals alike, starting from
              prototype to full fledge production. Check out our Gallery to see
              our production result.
            </Typography>
          </div>
        </div>
      </Slider>
    </div>
  );
};

export default HeroCarousel;
