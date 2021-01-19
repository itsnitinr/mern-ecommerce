import { makeStyles } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
  wrapper: {
    overflow: 'hidden',
    width: '55vw',
    margin: '3rem auto',
    [theme.breakpoints.down('md')]: {
      width: '80vw',
    },
  },
  testimonialLeft: {
    display: 'flex',
    flexDirection: 'column',
    height: '100%',
  },
  testimonialRight: {
    padding: '0 3rem',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    background: '#eee',
    height: '100%',
  },
  quoteIcon: {
    fontSize: '5rem',
    margin: '0 auto',
    display: 'block',
  },
  testimonialImage: {
    width: '100%',
    height: '100%',
  },
  userDetails: {
    marginTop: '1.5rem',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    paddingBottom: '1rem',
  },
  userImage: {
    width: '40px',
    height: '40px',
    borderRadius: '50%',
    marginRight: '1rem',
  },
}));

export default useStyles;
