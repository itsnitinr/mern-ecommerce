import { makeStyles } from '@material-ui/core';
import backgroundOne from '../../assets/bg1.jpg';

const useStyles = makeStyles((theme) => ({
  aboutContainer: {
    padding: ' 4rem 3rem ',
    display: 'flex',
    '& > *': {
      padding: '2rem',
    },
    [theme.breakpoints.down('xs')]: {
      padding: '3rem 1rem',
    },
  },
  aboutImage: {
    width: '50%',
    height: '100%',
    flex: 1,
    [theme.breakpoints.down('md')]: {
      display: 'none',
    },
  },
  aboutText: {
    flex: 1,
  },
  aboutHeading: {
    fontWeight: 'bold',
    textTransform: 'uppercase',
    letterSpacing: '2px',
    padding: 0,
  },
  aboutBody: {
    marginTop: '1.25rem',
    lineHeight: 1.6,
  },
  greenButton: {
    borderRadius: 0,
    margin: '1.5rem 0',
    color: 'white',
    padding: '0.75rem 2rem',
    fontSize: '1rem',
  },
  featuresSection: {
    padding: '5rem 4rem',
    background: `linear-gradient(
        rgba(36,43,55, 0.9), 
        rgba(36,43,55, 0.9)
      ), url(${backgroundOne})`,
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    transform: 'skewY(-6deg)',
    maxWidth: '100%',
    overflow: 'hidden',
    marginBottom: '5rem',
    [theme.breakpoints.down('xs')]: {
      padding: '4rem 2.5rem',
    },
  },
  featuresContent: {
    padding: '4rem 0',
    transform: 'skewY(6deg)',
    color: 'white',
    [theme.breakpoints.down('xs')]: {
      padding: '3rem 1rem',
    },
  },
  featuresHeading: {
    fontWeight: 'bold',
    textTransform: 'uppercase',
    letterSpacing: '2px',
    padding: 0,
    marginBottom: '0.75rem',
    [theme.breakpoints.down('xs')]: {
      fontSize: '2rem',
    },
  },
  horizontalRule: {
    border: '2px solid white',
    width: '15%',
    margin: '0 auto',
    marginBottom: '4rem',
  },
  testimonialsContainer: {
    padding: '0 0 3rem 0', // 3rem 0 with services
  },
}));

export default useStyles;
