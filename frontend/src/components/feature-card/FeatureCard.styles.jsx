import { makeStyles } from '@material-ui/core';

const useStyles = makeStyles({
  featureCard: {
    background: '#fff',
    width: '90%',
    height: '100%',
    margin: '0 auto',
    opacity: '0.75',
    padding: '2rem 1rem',
    textAlign: 'center',
    display: 'flex',
    flexDirection: 'column',
    color: 'black',
    transition: '0.4s transform',
    boxShadow: '4px 4px 4px rgba(0, 0, 0, 0.4)',
    '&:hover': {
      transform: 'translateY(-15px) scale(1.02)',
    },
  },
  featureImage: {
    width: '35%',
    height: '35%',
    margin: '0 auto',
  },
  featureTitle: {
    fontWeight: 'bold',
    margin: '1rem 0',
  },
});

export default useStyles;
