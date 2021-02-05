import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import {
  Container,
  Grid,
  Typography,
  Button,
  TextField,
  LinearProgress,
  Paper,
  Table,
  TableHead,
  TableBody,
  TableContainer,
  TableRow,
  TableCell,
} from '@material-ui/core';
import { Check, Clear } from '@material-ui/icons';
import PageHeader from '../../components/page-header/PageHeader.component';
import useStyles from './Dashboard.styles';

import {
  getUserDetails,
  updateUserProfile,
} from '../../redux/user/user.actions';
import { getMyOrders } from '../../redux/order/order.actions';

const DashboardPage = ({ history }) => {
  const { user } = useSelector((state) => state.userLogin);
  const { loading, userDetails } = useSelector((state) => state.userDetails);
  const { loading: orderLoading, orders } = useSelector(
    (state) => state.orderListMy
  );

  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const dispatch = useDispatch();

  useEffect(() => {
    if (!user) {
      history.push('/signin');
    } else {
      dispatch(getMyOrders());
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
          <Grid item md={3} sm={4} xs={12}>
            <Typography variant="h5" gutterBottom>
              Manage Profile
            </Typography>
            <div className={classes.cardContainer}>
              <div className={classes.cardTop}>
                <Typography>Profile Info</Typography>
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
          <Grid item md={9} sm={8} xs={12}>
            <Typography variant="h5" gutterBottom>
              Manage Orders
            </Typography>
            <TableContainer component={Paper}>
              {orderLoading ? (
                <LinearProgress />
              ) : (
                <Table>
                  <TableHead>
                    <TableRow>
                      <TableCell>
                        <b>Order ID</b>
                      </TableCell>
                      <TableCell>
                        <b>Quantity</b>
                      </TableCell>
                      <TableCell>
                        <b>Placed On</b>
                      </TableCell>
                      <TableCell>
                        <b>Total Price</b>
                      </TableCell>
                      <TableCell>
                        <b>Review Status</b>
                      </TableCell>
                      <TableCell>
                        <b>Paid</b>
                      </TableCell>
                      <TableCell>
                        <b>Dispatched</b>
                      </TableCell>
                      <TableCell>
                        <b>Actions</b>
                      </TableCell>
                    </TableRow>
                  </TableHead>
                  <TableBody>
                    {orders.map((order) => (
                      <TableRow key={order._id}>
                        <TableCell component="th" scope="row">
                          {order._id.substring(order._id.length - 7)}
                        </TableCell>
                        <TableCell>{order.pcbDetails.quantity}</TableCell>
                        <TableCell>
                          {order.createdAt.substring(0, 10)}
                        </TableCell>
                        <TableCell>₹ {order.totalPrice}</TableCell>
                        <TableCell>
                          {order.underReview
                            ? 'Under Review'
                            : order.reviewPassed
                            ? 'Passed'
                            : 'Failed'}
                        </TableCell>
                        <TableCell>
                          {order.isPaid ? (
                            <Check className={classes.checkIcon} />
                          ) : (
                            <Clear className={classes.clearIcon} />
                          )}
                        </TableCell>
                        <TableCell>
                          {order.isDispatched ? (
                            <Check className={classes.checkIcon} />
                          ) : (
                            <Clear className={classes.clearIcon} />
                          )}
                        </TableCell>
                        <TableCell>
                          <Link to={`/order/${order._id}`}>
                            <Button variant="contained" color="primary">
                              View Order
                            </Button>
                          </Link>
                        </TableCell>
                      </TableRow>
                    ))}
                  </TableBody>
                </Table>
              )}
            </TableContainer>
          </Grid>
        </Grid>
      </Container>
    </>
  );
};

export default DashboardPage;
