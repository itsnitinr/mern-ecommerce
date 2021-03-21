import { makeStyles } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
  modal: {
    fontFamily: theme.typography.fontFamily,
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: '80vw',
    height: '90vh',
    backgroundColor: theme.palette.background.paper,
    boxShadow: theme.shadows[5],
    padding: '2.5rem',
    overflowY: 'scroll',
    outline: 0,
    [theme.breakpoints.down('sm')]: {
      width: '90vw',
    },
  },
}));

export default useStyles;
