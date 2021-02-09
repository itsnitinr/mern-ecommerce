import { makeStyles } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
  footerContainer: {
    marginTop: '2.5rem',
    background: theme.palette.primary.main,
    color: theme.palette.secondary.main,
    padding: '3rem',
    textAlign: 'center',
  },
  footerHead: {
    textTransform: 'uppercase',
    fontWeight: 'bold',
    paddingBottom: '0.5rem',
    letterSpacing: '2px',
  },
  hr: {
    width: '20%',
    margin: '0 auto',
    marginBottom: '2rem',
    [theme.breakpoints.down('xs')]: {
      width: 100,
    },
  },
  link: {
    color: 'white',
    fontSize: '1.1rem',
    '&:hover': {
      color: theme.palette.secondary.main,
    },
    marginBottom: '0.25rem',
  },
  aboutText: {
    color: 'white',
    fontSize: '1.1rem',
  },
  contact: {
    color: 'white',
    display: 'flex',
    justifyContent: 'center',
    marginBottom: '0.5rem',
    width: '80%',
    margin: '0 auto',
    [theme.breakpoints.down('xs')]: {
      width: '100%',
    },
  },
  contactText: {
    color: 'white',
    marginLeft: '0.5rem',
    fontSize: '1.1rem',
    '&:hover': {
      color: theme.palette.secondary.main,
    },
  },
  socialIcon: {
    margin: '0 0.5rem',
    color: 'white',
    '&:hover': {
      color: theme.palette.secondary.main,
    },
  },
}));

export default useStyles;
