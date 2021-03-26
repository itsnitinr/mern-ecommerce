import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { FiUserPlus } from 'react-icons/fi';
import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import TextField from '@material-ui/core/TextField';
import Grid from '@material-ui/core/Grid';
import Box from '@material-ui/core/Box';
import Typography from '@material-ui/core/Typography';
import Container from '@material-ui/core/Container';
import LinearProgress from '@material-ui/core/LinearProgress';
import Modal from '@material-ui/core/Modal';
import TermsModal from '../../components/terms-modal/TermsModal.component';
import PrivacyModal from '../../components/privacy-modal/PrivacyModal.component';
import useStyles from './SignupPage.styles';
import GoogleOAuthButton from '../../components/google-oauth-button/GoogleOAuthButton.component';
import Visibility from '@material-ui/icons/Visibility';
import VisibilityOff from '@material-ui/icons/VisibilityOff';
import InputAdornment from '@material-ui/core/InputAdornment';
import IconButton from '@material-ui/core/IconButton';

import { registerUser } from '../../redux/user/user.actions';
import { enqueueSnackbar } from '../../redux/alert/alert.actions';

export default function SignUp({ history, location }) {
  const classes = useStyles();

  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [termsModalOpen, setTermsModalOpen] = useState(false);
  const [privacyModalOpen, setPrivacyModalOpen] = useState(false);
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);

  const { loading } = useSelector((state) => state.userRegister);
  const { user } = useSelector((state) => state.userLogin);

  const dispatch = useDispatch();

  const onFormSubmit = (e) => {
    e.preventDefault();
    if (password.length < 8)
      return dispatch(
        enqueueSnackbar({
          message: 'Password should be atleast 8 characters long',
          options: { variant: 'error' },
        })
      );
    if (password !== confirmPassword) {
      dispatch(
        enqueueSnackbar({
          message: 'Passwords do not match',
          options: { variant: 'error' },
        })
      );
    } else {
      dispatch(registerUser(name, email, password));
      history.push('/');
    }
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
            <FiUserPlus style={{ fontSize: '1.5rem' }} />
          </Avatar>
          <Typography component="h1" variant="h5">
            Sign up
          </Typography>
          <form className={classes.form} onSubmit={(e) => onFormSubmit(e)}>
            <GoogleOAuthButton />
            <div className={classes.separator}>
              <Typography>&nbsp;&nbsp;&nbsp;or&nbsp;&nbsp;&nbsp;</Typography>
            </div>
            <Grid container spacing={2}>
              <Grid item xs={12}>
                <TextField
                  variant="outlined"
                  required
                  fullWidth
                  id="name"
                  label="Full Name"
                  name="name"
                  autoComplete="name"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  variant="outlined"
                  required
                  fullWidth
                  type="email"
                  id="email"
                  label="Email Address"
                  name="email"
                  autoComplete="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  variant="outlined"
                  required
                  fullWidth
                  name="password"
                  label="Password"
                  type={showPassword ? 'text' : 'password'}
                  id="password"
                  autoComplete="current-password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  InputProps={{
                    endAdornment: (
                      <InputAdornment position="end">
                        <IconButton
                          aria-label="toggle password visibility"
                          onClick={() => setShowPassword(!showPassword)}
                          edge="end"
                        >
                          {showPassword ? <Visibility /> : <VisibilityOff />}
                        </IconButton>
                      </InputAdornment>
                    ),
                  }}
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  variant="outlined"
                  required
                  fullWidth
                  name="confirmPassword"
                  label="Confirm Password"
                  type={showConfirmPassword ? 'text' : 'password'}
                  id="confirmPassword"
                  autoComplete="current-password"
                  value={confirmPassword}
                  onChange={(e) => setConfirmPassword(e.target.value)}
                  InputProps={{
                    endAdornment: (
                      <InputAdornment position="end">
                        <IconButton
                          aria-label="toggle password visibility"
                          onClick={() =>
                            setShowConfirmPassword(!showConfirmPassword)
                          }
                          edge="end"
                        >
                          {showConfirmPassword ? (
                            <Visibility />
                          ) : (
                            <VisibilityOff />
                          )}
                        </IconButton>
                      </InputAdornment>
                    ),
                  }}
                />
              </Grid>
            </Grid>
            <Box mt={2}>
              <Typography className={classes.disclaimer}>
                By signing up, you agree to PCB Cupid's{' '}
                <span
                  style={{ cursor: 'pointer', color: '#1d1d1d' }}
                  onClick={() => setTermsModalOpen(true)}
                >
                  Terms of Use
                </span>{' '}
                and{' '}
                <span
                  style={{ cursor: 'pointer', color: '#1d1d1d' }}
                  onClick={() => setPrivacyModalOpen(true)}
                >
                  Privacy Policy
                </span>
                .
              </Typography>
            </Box>
            <Button
              type="submit"
              fullWidth
              variant="contained"
              color="primary"
              className={classes.submit}
            >
              Sign Up
            </Button>
            <Grid container justify="flex-end" style={{ marginBottom: '3rem' }}>
              <Grid item>
                <Link to="/signin" className={classes.link}>
                  Already have an account? Sign in
                </Link>
              </Grid>
            </Grid>
          </form>
        </div>
      </Container>
      <Modal open={privacyModalOpen} onClose={() => setPrivacyModalOpen(false)}>
        <PrivacyModal />
      </Modal>
      <Modal open={termsModalOpen} onClose={() => setTermsModalOpen(false)}>
        <TermsModal />
      </Modal>
    </>
  );
}
