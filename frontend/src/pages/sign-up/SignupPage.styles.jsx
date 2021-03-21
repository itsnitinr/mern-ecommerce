import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  paper: {
    marginTop: theme.spacing(8),
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
  avatar: {
    margin: theme.spacing(1),
    backgroundColor: theme.palette.secondary.main,
  },
  form: {
    width: '100%', // Fix IE 11 issue.
    marginTop: theme.spacing(4),
  },
  submit: {
    margin: theme.spacing(2, 0, 2),
  },
  link: {
    textDecoration: 'none',
  },
  separator: {
    textAlign: 'center',
    height: '1em',
    marginBottom: '2rem',
    borderBottom: '2px solid black',
    margin: '1em 0',
    '&:first-line': {
      backgroundColor: 'white',
    },
  },
  disclaimer: {
    color: '#a9a9a9',
    fontSize: 13,
  },
}));

export default useStyles;
