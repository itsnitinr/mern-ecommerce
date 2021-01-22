import { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import {
  Container,
  Grid,
  Typography,
  Avatar,
  Button,
  TextField,
  LinearProgress,
} from '@material-ui/core';
import PageHeader from '../../components/page-header/PageHeader.component';
import useStyles from './Dashboard.styles';

import {
  getUserDetails,
  updateUserProfile,
} from '../../redux/user/user.actions';

const DashboardPage = ({ history }) => {
  const { user } = useSelector((state) => state.userLogin);
  const { loading, userDetails } = useSelector((state) => state.userDetails);

  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const dispatch = useDispatch();

  useEffect(() => {
    if (!user) {
      history.push('/signin');
    } else {
      if (!userDetails.name) {
        dispatch(getUserDetails('profile'));
      } else {
        setName(userDetails.name);
        setEmail(userDetails.email);
      }
    }
  }, [user, history, userDetails, dispatch]);

  const onSubmit = (e) => {
    e.preventDefault();
    dispatch(updateUserProfile({ id: user._id, name, email, password }));
  };

  const classes = useStyles();

  return (
    <>
      {loading && <LinearProgress color="secondary" />}
      <PageHeader title="Dashboard" subtitle="Manage Profile & Orders" />
      <Container>
        <Grid container spacing={5}>
          <Grid item sm={4} xs={12}>
            <Typography variant="h5" gutterBottom>
              Manage Profile
            </Typography>
            <div className={classes.cardContainer}>
              <div className={classes.cardTop}>
                <Avatar
                  src="https://www.gravatar.com/d=mp"
                  className={classes.avatar}
                ></Avatar>
              </div>
              <div>
                <form
                  className={classes.cardContent}
                  onSubmit={(e) => onSubmit(e)}
                >
                  <TextField
                    required
                    fullWidth
                    label="Name"
                    variant="outlined"
                    color="secondary"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                  />
                  <TextField
                    required
                    fullWidth
                    label="Email"
                    variant="outlined"
                    color="secondary"
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                  />
                  <TextField
                    fullWidth
                    label="Password"
                    variant="outlined"
                    color="secondary"
                    type="password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                  />
                  <Button
                    type="submit"
                    variant="contained"
                    color="secondary"
                    fullWidth
                  >
                    Update Profile
                  </Button>
                </form>
              </div>
            </div>
          </Grid>
          <Grid item sm={8} xs={12}>
            <Typography variant="h5" gutterBottom>
              Manage Orders
            </Typography>
          </Grid>
        </Grid>
      </Container>
    </>
  );
};

export default DashboardPage;
