import { useEffect } from 'react';
import { BrowserRouter, Switch, Route, useLocation } from 'react-router-dom';
import { ThemeProvider, IconButton } from '@material-ui/core';
import { Close } from '@material-ui/icons';
import { Provider } from 'react-redux';
import { SnackbarProvider } from 'notistack';
import SimpleReactLightbox from 'simple-react-lightbox';

import Navbar from './components/navbar/Navbar.component';
import Footer from './components/footer/Footer.component';
import Notifier from './components/notifier/Notifier.component';
import LandingPage from './pages/landing/LandingPage.component';
import AboutPage from './pages/about/AboutPage.component';
import SignupPage from './pages/sign-up/SignupPage.component';
import SigninPage from './pages/sign-in/SigninPage.component';
import GuidelinesPage from './pages/guidelines/GuidelinesPage.component';
import GalleryPage from './pages/gallery/GalleryPage.component';
import ForgotPasswordPage from './pages/forgot-password/ForgotPassword.component';
import ResetPasswordPage from './pages/reset-password/ResetPassword.component';
import VerifyAccountPage from './pages/verify-account/VerifyAccountPage.component';
import DashboardPage from './pages/dashboard/DashboardPage.component';
import PlaceOrderPage from './pages/place-order/PlaceOrderPage.component';
import OrderDetailsPage from './pages/order-details/OrderDetailsPage.component';
import AdminPanelUsers from './pages/admin-panel-users/AdminPanelUsers.component';
import EditUserPage from './pages/edit-user/EditUserPage.component';
import AdminPanelOrders from './pages/admin-panel-orders/AdminPanelOrders.component';
import TermsPage from './pages/terms/TermsPage.component';
import PrivacyPage from './pages/privacy/PrivacyPage.component';
import { closeSnackbar } from './redux/alert/alert.actions';
import store from './redux/store';
import theme from './theme';

function ScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
}

const App = () => {
  const snackbarDimissButton = () => (
    <IconButton onClick={() => store.dispatch(closeSnackbar())}>
      <Close style={{ color: 'white' }} />
    </IconButton>
  );

  const snackbarPosition = () => ({ vertical: 'bottom', horizontal: 'right' });

  return (
    <Provider store={store}>
      <BrowserRouter>
        <ScrollToTop />
        <ThemeProvider theme={theme}>
          <SnackbarProvider
            maxSnack={1}
            action={snackbarDimissButton}
            anchorOrigin={snackbarPosition()}
          >
            <Notifier />
            <Navbar />
            <SimpleReactLightbox>
              <Switch>
                <Route exact path="/" component={LandingPage} />
                <Route path="/about" component={AboutPage} />
                <Route path="/gallery" component={GalleryPage} />
                <Route path="/terms" component={TermsPage} />
                <Route path="/privacy" component={PrivacyPage} />
                <Route path="/signup" component={SignupPage} />
                <Route path="/signin" component={SigninPage} />
                <Route path="/guidelines" component={GuidelinesPage} />
                <Route path="/dashboard" component={DashboardPage} />
                <Route exact path="/order" component={PlaceOrderPage} />
                <Route path="/order/:id" component={OrderDetailsPage} />
                <Route path="/forgot-password" component={ForgotPasswordPage} />
                <Route
                  path="/reset-password/:resetToken"
                  component={ResetPasswordPage}
                />
                <Route
                  path="/verify/:verificationToken"
                  component={VerifyAccountPage}
                />
                <Route exact path="/admin/users" component={AdminPanelUsers} />
                <Route path="/admin/users/:id" component={EditUserPage} />
                <Route path="/admin/orders" component={AdminPanelOrders} />
              </Switch>
            </SimpleReactLightbox>
            <Footer />
          </SnackbarProvider>
        </ThemeProvider>
      </BrowserRouter>
    </Provider>
  );
};

export default App;
