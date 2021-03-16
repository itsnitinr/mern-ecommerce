import { makeStyles } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
  wrapper: {
    overflow: 'initial',
    width: '70vw',
    margin: '3rem auto 0 auto',
    [theme.breakpoints.down('md')]: {
      width: '90vw',
      overflow: 'hidden',
    },
  },
  testimonialCard: {
    marginBottom: '2rem',
    minHeight: 400,
    [theme.breakpoints.down('sm')]: {
      minHeight: 0,
    },
  },
  testimonialCardImage: {
    height: '100%',
    width: '100%',
    borderRadius: '10px 0 0 10px',
    outline: 'none',
    marginLeft: '2rem',
    [theme.breakpoints.down('xs')]: {
      borderRadius: '10px 10px 0 0',
      marginLeft: 0,
    },
  },
  testimonialCardText: {
    padding: '1rem 2rem',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'column',
    height: '100%',
    background: '#f4f4f4',
    marginRight: '2rem',
    textAlign: 'center',
    borderRadius: '0 10px 10px 0',
    [theme.breakpoints.down('xs')]: {
      marginRight: 0,
    },
  },
  quoteIcon: {
    fontSize: '6rem',
  },
  userInfo: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
  userImage: {
    borderRadius: '50%',
    margin: '1rem 1rem 1rem 0',
    height: 75,
    width: 75,
  },
}));

export default useStyles;
