import { BrowserRouter, Switch, Route } from 'react-router-dom';
import { ThemeProvider } from '@material-ui/core';

import SignupPage from './pages/sign-up/SignupPage.component';
import SigninPage from './pages/sign-in/SigninPage.component';
import theme from './theme';

const App = () => {
  return (
    <BrowserRouter>
      <ThemeProvider theme={theme}>
        <Switch>
          <Route path="/signup" component={SignupPage} />
          <Route path="/signin" component={SigninPage} />
        </Switch>
      </ThemeProvider>
    </BrowserRouter>
  );
};

export default App;
