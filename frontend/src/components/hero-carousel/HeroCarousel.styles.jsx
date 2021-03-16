import { makeStyles } from '@material-ui/core';
import backgroundOne from '../../assets/bg1.jpg';
import backgroundTwo from '../../assets/bg2.jpg';
import backgroundThree from '../../assets/bg3.jpg';

const useStyles = makeStyles((theme) => ({
  textContainer: {
    '& > *': {
      marginBottom: '1.5rem',
    },
    color: 'white',
    padding: '4rem',
    width: '50%',
    height: '80vh',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    [theme.breakpoints.down('md')]: {
      width: '100%',
      justifyContent: 'center',
      textAlign: 'center',
      padding: '3rem 2rem',
      marginBottom: '1rem',
      height: '60vh',
    },
  },
  slideOne: {
    background: `linear-gradient(
        rgba(36,43,55, 0.75), 
        rgba(36,43,55, 0.75)
      ), url(${backgroundOne})`,
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    minHeight: '80vh',
    [theme.breakpoints.down('md')]: {
      minHeight: '60vh',
    },
  },
  slideTwo: {
    background: `linear-gradient(
        rgba(36,43,55, 0.75), 
        rgba(36,43,55, 0.75)
      ), url(${backgroundTwo})`,
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    minHeight: '80vh',
    [theme.breakpoints.down('md')]: {
      minHeight: '60vh',
    },
  },
  slideThree: {
    background: `linear-gradient(
        rgba(36,43,55, 0.75), 
        rgba(36,43,55, 0.75)
      ), url(${backgroundThree})`,
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    minHeight: '80vh',
    [theme.breakpoints.down('md')]: {
      minHeight: '60vh',
    },
  },
  headingText: {
    [theme.breakpoints.down('sm')]: {
      fontSize: '2.5rem !important',
    },
  },
  paragraphText: {
    [theme.breakpoints.down('sm')]: {
      width: '100%',
    },
  },
}));

export default useStyles;
