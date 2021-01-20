import { BrowserRouter, Switch, Route } from 'react-router-dom';
import { ThemeProvider, Button } from '@material-ui/core';
import { Provider } from 'react-redux';
import { SnackbarProvider } from 'notistack';

import Navbar from './components/navbar/Navbar.component';
import Notifier from './components/notifier/Notifier.component';
import LandingPage from './pages/landing/LandingPage.component';
import SignupPage from './pages/sign-up/SignupPage.component';
import SigninPage from './pages/sign-in/SigninPage.component';
import { closeSnackbar } from './redux/alert/alert.actions';
import store from './redux/store';
import theme from './theme';

const App = () => {
  const snackbarDimissButton = () => (
    <Button onClick={() => store.dispatch(closeSnackbar())}>dismiss me</Button>
  );

  const snackbarPosition = () => ({ vertical: 'bottom', horizontal: 'right' });

  return (
    <Provider store={store}>
      <BrowserRouter>
        <ThemeProvider theme={theme}>
          <SnackbarProvider
            maxSnack={1}
            action={snackbarDimissButton}
            anchorOrigin={snackbarPosition()}
          >
            <Notifier />
            <Navbar />
            <Switch>
              <Route exact path="/" component={LandingPage} />
              <Route path="/signup" component={SignupPage} />
              <Route path="/signin" component={SigninPage} />
            </Switch>
          </SnackbarProvider>
        </ThemeProvider>
      </BrowserRouter>
    </Provider>
  );
};

export default App;
