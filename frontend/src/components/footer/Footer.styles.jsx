import { makeStyles } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
  footerContainer: {
    marginTop: '2.5rem',
    background: theme.palette.primary.main,
    color: theme.palette.secondary.main,
    padding: '2rem',
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
  pages: {
    display: 'flex',
    justifyContent: 'center',
  },
  pageLinks: {
    textAlign: 'left',
    [theme.breakpoints.down('sm')]: {
      textAlign: 'center',
    },
  },
  link: {
    color: 'white',
    cursor: 'pointer',
    fontSize: '1.1rem',
    '&:hover': {
      color: theme.palette.secondary.main,
    },
    marginBottom: '0.25rem',
  },
  contactContainer: {
    display: 'flex',
    alignItems: 'flex-start',
    flexDirection: 'column',
    [theme.breakpoints.down('xs')]: {
      alignItems: 'center',
    },
  },
  contact: {
    display: 'flex',
    color: 'white',
    marginBottom: '0.5rem',
    width: '95%',
    margin: '0 auto',
    [theme.breakpoints.down('sm')]: {
      justifyContent: 'center',
      marginBottom: '0.75rem',
    },
  },
  contactText: {
    color: 'white',
    marginLeft: '1rem',
    textAlign: 'left',
    fontSize: '1rem',
    '&:hover': {
      color: '#eee',
    },
    [theme.breakpoints.down('sm')]: {
      textAlign: 'center',
    },
  },
  socialIcon: {
    margin: '0 0.5rem',
    color: 'white',
  },
  socialLink: {
    color: '#fff',
    fontFamily: 'Roboto, sans-serif',
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'flex-start',
    textAlign: 'left',
    marginBottom: '0.75rem',
  },
  socialContainer: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
  copyright: {
    background: '#fff',
    padding: '1rem',
    color: '#333',
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    flexWrap: 'wrap',
    '& > *': {
      flex: 1,
      [theme.breakpoints.down('xs')]: {
        width: '100%',
        flex: 'initial',
      },
    },
  },
  disclaimer: {
    textAlign: 'right',
    [theme.breakpoints.down('xs')]: {
      textAlign: 'center',
    },
  },
}));

export default useStyles;
