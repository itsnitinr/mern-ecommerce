import { makeStyles } from '@material-ui/core';
import background from '../../assets/bg2.jpg';

const useStyles = makeStyles((theme) => ({
  container: {
    marginTop: '0px',
    height: '40vh',
    background: `linear-gradient(
        rgba(36,43,55, 0.85), 
        rgba(36,43,55, 0.85)
      ), url(${background})`,
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    color: 'white',
    marginBottom: '2rem',
    textAlign: 'center',
    [theme.breakpoints.down('sm')]: {
      height: '30vh',
      padding: '0 1.5rem',
    },
  },
  heading: {
    textTransform: 'uppercase',
    letterSpacing: '3px',
  },
  subheading: {
    textTransform: 'uppercase',
  },
}));

export default useStyles;
