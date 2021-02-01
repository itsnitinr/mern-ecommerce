import { useDispatch } from 'react-redux';
import { Button } from '@material-ui/core';
import GoogleLogin from 'react-google-login';

import { googleOAuth } from '../../redux/user/user.actions';

const GoogleOAuthButton = () => {
  const dispatch = useDispatch();

  return (
    <GoogleLogin
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
