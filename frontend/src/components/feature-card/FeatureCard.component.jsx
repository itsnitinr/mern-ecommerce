import { Typography } from '@material-ui/core';
import useStyles from './FeatureCard.styles';

const FeatureCard = ({ image, title, body }) => {
  const classes = useStyles();

  return (
    <div className={classes.featureCard}>
      <img src={image} alt={title} className={classes.featureImage} />
      <Typography variant="h6" className={classes.featureTitle}>
        {title}
      </Typography>
      <Typography variant="body2">{body}</Typography>
    </div>
  );
};

export default FeatureCard;
