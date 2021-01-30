import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import {
  Container,
  Table,
  TableHead,
  TableBody,
  TableRow,
  TableCell,
  Typography,
  Button,
  LinearProgress,
  TableFooter,
  TablePagination,
  TableContainer,
} from '@material-ui/core';
import { Check, Clear } from '@material-ui/icons';
import PageHeader from '../../components/page-header/PageHeader.component';
import TablePaginationActions from '../../components/table-pagination/TablePagination.component';

import { getAllOrders } from '../../redux/order/order.actions';

const AdminPanelOrders = ({ history }) => {
  const { orders, loading } = useSelector((state) => state.orderList);
  const { user } = useSelector((state) => state.userLogin);

  const dispatch = useDispatch();

  const [page, setPage] = useState(0);
  const [rowsPerPage, setRowsPerPage] = useState(5);

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(parseInt(event.target.value, 10));
    setPage(0);
  };

  useEffect(() => {
    if (user && user.isAdmin) {
      dispatch(getAllOrders());
    } else {
      history.push('/signin');
    }
  }, [dispatch, history, user]);

  return (
    <>
      <PageHeader title="Admin Panel" subtitle="Orders" />
      <Container>
        <Typography variant="h4" color="secondary">
          Manage Orders
        </Typography>
        {loading ? (
          <LinearProgress />
        ) : (
          <TableContainer>
            <Table>
              <TableHead>
                <TableRow>
                  <TableCell>
                    <b>ID</b>
                  </TableCell>
                  <TableCell>
                    <b>Name</b>
                  </TableCell>
                  <TableCell>
                    <b>Email</b>
                  </TableCell>
                  <TableCell>
                    <b>Placed On</b>
                  </TableCell>
                  <TableCell>
                    <b>Total Cost</b>
                  </TableCell>
                  <TableCell>
                    <b>Review</b>
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
                {(rowsPerPage > 0
                  ? orders.slice(
                      page * rowsPerPage,
                      page * rowsPerPage + rowsPerPage
                    )
                  : orders
                ).map((order) => (
                  <TableRow key={order._id}>
                    <TableCell>{order._id}</TableCell>
                    <TableCell>{order.user.name}</TableCell>
                    <TableCell>{order.user.email}</TableCell>
                    <TableCell>{order.createdAt.substring(0, 10)}</TableCell>
                    <TableCell>₹ {order.totalPrice}</TableCell>
                    <TableCell>
                      {order.underReview ? (
                        'Pending'
                      ) : order.reviewPassed ? (
                        <Check />
                      ) : (
                        <Clear />
                      )}
                    </TableCell>
                    <TableCell>
                      {order.isPaid ? <Check /> : <Clear />}
                    </TableCell>
                    <TableCell>
                      {order.isDispatched ? <Check /> : <Clear />}
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
              <TableFooter>
                <TableRow>
                  <TablePagination
                    rowsPerPageOptions={[
                      5,
                      10,
                      25,
                      { label: 'All', value: -1 },
                    ]}
                    colSpan={3}
                    count={orders.length}
                    rowsPerPage={rowsPerPage}
                    page={page}
                    SelectProps={{
                      inputProps: { 'aria-label': 'rows per page' },
                      native: true,
                    }}
                    onChangePage={handleChangePage}
                    onChangeRowsPerPage={handleChangeRowsPerPage}
                    ActionsComponent={TablePaginationActions}
                  />
                </TableRow>
              </TableFooter>
            </Table>
          </TableContainer>
        )}
      </Container>
    </>
  );
};

export default AdminPanelOrders;
