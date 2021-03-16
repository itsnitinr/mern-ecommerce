import { useDispatch } from 'react-redux';
import { Button, makeStyles } from '@material-ui/core';
import { FaGoogle } from 'react-icons/fa';
import GoogleLogin from 'react-google-login';

import { googleOAuth } from '../../redux/user/user.actions';

const useStyles = makeStyles((theme) => ({
  button: {
    background: '#4285F4',
    color: '#fff',
    '&:hover': {
      background: 'rgba(66,133,244,0.9)',
    },
    marginTop: '1rem 0',
  },
}));

const GoogleOAuthButton = () => {
  const dispatch = useDispatch();

  const classes = useStyles();

  return (
    <GoogleLogin
      render={(renderProps) => (
        <Button
          fullWidth
          onClick={renderProps.onClick}
          disabled={renderProps.disabled}
          startIcon={<FaGoogle />}
          className={classes.button}
        >
          Log In With Google
        </Button>
      )}
      clientId={process.env.REACT_APP_GOOGLE_OAUTH_CLIENT_ID}
      onSuccess={(response) =>
        dispatch(googleOAuth({ token: response.tokenId }))
      }
      onFailure={(response) => console.log(response)}
      cookiePolicy={'single_host_origin'}
    />
  );
};

export default GoogleOAuthButton;
