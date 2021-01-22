import { Typography } from '@material-ui/core';
import useStyles from './PageHeader.styles';

const PageHeader = ({ title, subtitle }) => {
  const classes = useStyles();

  return (
    <div className={classes.container}>
      <Typography variant="h3" className={classes.heading}>
        {title}
      </Typography>
      <Typography variant="h6" color="secondary" className={classes.subheading}>
        {subtitle}
      </Typography>
    </div>
  );
};

export default PageHeader;
