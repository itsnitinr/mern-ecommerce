import { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import TextField from '@material-ui/core/TextField';
import Grid from '@material-ui/core/Grid';
import Box from '@material-ui/core/Box';
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import Typography from '@material-ui/core/Typography';
import Container from '@material-ui/core/Container';
import LinearProgress from '@material-ui/core/LinearProgress';
import useStyles from './SigninPage.sytles';

import GoogleOAuthButton from '../../components/google-oauth-button/GoogleOAuthButton.component';

import { loginUser } from '../../redux/user/user.actions';

function Copyright() {
  return (
    <Typography
      style={{ paddingBottom: '1.5rem' }}
      variant="body2"
      color="textSecondary"
      align="center"
    >
      {'Copyright © '}
      <a href="http://thefirm.dev/">The Firm</a> {new Date().getFullYear()}
      {'.'}
    </Typography>
  );
}

export default function SignIn({ history, location }) {
  const classes = useStyles();

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const dispatch = useDispatch();

  const { loading, user } = useSelector((state) => state.userLogin);

  const onFormSubmit = (e) => {
    e.preventDefault();
    dispatch(loginUser(email, password));
  };

  const redirect = location.search ? location.search.split('=')[1] : '/';

  useEffect(() => {
    if (user) {
      history.push(redirect);
    }
  }, [history, user, redirect]);

  return (
    <>
      {loading && <LinearProgress />}
      <Container component="main" maxWidth="xs">
        <CssBaseline />
        <div className={classes.paper}>
          <Avatar className={classes.avatar}>
            <LockOutlinedIcon />
          </Avatar>
          <Typography component="h1" variant="h5">
            Sign in
          </Typography>
          <form className={classes.form} onSubmit={(e) => onFormSubmit(e)}>
            <TextField
              variant="outlined"
              margin="normal"
              required
              fullWidth
              id="email"
              label="Email Address"
              name="email"
              autoComplete="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              autoFocus
            />
            <TextField
              variant="outlined"
              margin="normal"
              required
              fullWidth
              name="password"
              label="Password"
              type="password"
              id="password"
              autoComplete="current-password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
            <Button
              type="submit"
              fullWidth
              variant="contained"
              color="primary"
              className={classes.submit}
            >
              Sign In
            </Button>
            <Grid container>
              <Grid item xs>
                <Link to="/forgot-password" className={classes.link}>
                  Forgot password?
                </Link>
              </Grid>
              <Grid item>
                <Link to="/signup" className={classes.link}>
                  Don't have an account? Sign Up
                </Link>
              </Grid>
            </Grid>
            <div className={classes.separator}>
              <Typography>&nbsp;&nbsp;&nbsp;or&nbsp;&nbsp;&nbsp;</Typography>
            </div>
            <GoogleOAuthButton />
          </form>
        </div>
        <Box mt={8}>
          <Copyright />
        </Box>
      </Container>
    </>
  );
}
