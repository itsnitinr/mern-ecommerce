import { makeStyles } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
  cardContainer: {
    border: '2px solid',
    borderColor: theme.palette.secondary.main,
    borderRadius: '5px',
  },
  cardTop: {
    background: theme.palette.secondary.main,
    height: '80px',
    display: 'flex',
    alignItems: 'flex-end',
    justifyContent: 'center',
    position: 'relative',
    marginBottom: '1.5rem',
  },
  avatar: {
    height: 70,
    width: 70,
    position: 'absolute',
    top: 40,
  },
  cardContent: {
    padding: '2rem 2rem 0.5rem 2rem',
    '& > *': {
      marginBottom: '1.5rem',
    },
  },
}));

export default useStyles;
