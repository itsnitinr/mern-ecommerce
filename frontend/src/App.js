import { BrowserRouter, Switch, Route } from 'react-router-dom';
import { ThemeProvider } from '@material-ui/core';
import { Provider } from 'react-redux';

import SignupPage from './pages/sign-up/SignupPage.component';
import SigninPage from './pages/sign-in/SigninPage.component';
import store from './redux/store';
import theme from './theme';

const App = () => {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <ThemeProvider theme={theme}>
          <Switch>
            <Route path="/signup" component={SignupPage} />
            <Route path="/signin" component={SigninPage} />
          </Switch>
        </ThemeProvider>
      </BrowserRouter>
    </Provider>
  );
};

export default App;
