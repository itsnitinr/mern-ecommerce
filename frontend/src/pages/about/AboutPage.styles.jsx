import { makeStyles } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
  aboutContainer: {
    padding: '0 3rem',
    display: 'flex',
    '& > *': {
      padding: '2rem',
    },
    [theme.breakpoints.down('xs')]: {
      padding: '0rem 1rem',
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
  contactBanner: {
    background: '#f4f9f9',
    padding: '2rem 0 0 0',
    color: theme.palette.textSecondary,
  },
  innerBanner: {
    padding: '2.5rem 0',
  },
  socialIcon: {
    margin: '0 0.25rem',
    color: theme.palette.secondary.main,
  },
  countupContainer: {
    background: theme.palette.secondary.main,
    padding: '3rem 0',
    marginBottom: '-2.5rem',
    color: '#fff',
  },
}));

export default useStyles;
