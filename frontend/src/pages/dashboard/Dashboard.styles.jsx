import { makeStyles } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
  cardContainer: {
    border: '2px solid',
    borderColor: theme.palette.secondary.main,
    borderRadius: '5px',
  },
  cardTop: {
    background: theme.palette.secondary.main,
    color: 'white',
    height: '50px',
    display: 'flex',
    alignItems: 'center',
    fontWeight: 'bold',
    justifyContent: 'center',
  },
  cardContent: {
    padding: '2rem 1rem 0.5rem 1rem',
    '& > *': {
      marginBottom: '1.5rem',
    },
  },
  checkIcon: {
    fill: theme.palette.secondary.main,
  },
  clearIcon: {
    fill: theme.palette.error.main,
  },
}));

export default useStyles;
