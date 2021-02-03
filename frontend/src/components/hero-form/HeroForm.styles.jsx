import { makeStyles } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
  heroForm: {
    background: 'white',
    position: 'absolute',
    width: '35vw',
    maxHeight: '60vh',
    top: '50%',
    left: '75%',
    transform: 'translate(-50%, -50%)',
    padding: '2rem',
    border: '4px solid #54be73',
    opacity: 0.9,
    [theme.breakpoints.down('md')]: {
      position: 'static',
      maxHeight: '100%',
      top: 0,
      left: 0,
      transform: 'translate(0, -10px)',
      width: '100vw',
      opacity: 1,
      background: '#eee',
      border: 'none',
    },
  },
}));

export default useStyles;
