import { useState } from 'react';
import { Link as RouterLink } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import {
  AppBar,
  Toolbar,
  Container,
  Typography,
  Button,
  InputBase,
  Link,
  IconButton,
} from '@material-ui/core';
import { ReactComponent as Logo } from '../../assets/firmLogo.svg';
import MenuIcon from '@material-ui/icons/Menu';
import SideDrawer from '../sidebar/Sidebar.component';
import useStyles from './Navbar.styles';
import { getNavItems } from './NavItems';

import { logout } from '../../redux/user/user.actions';

export default function Navigation() {
  const classes = useStyles();

  const { user } = useSelector((state) => state.userLogin);

  const dispatch = useDispatch();

  const [openDrawer, setDrawer] = useState(false);

  const toggleDrawer = (open) => (event) => {
    if (
      event &&
      event.type === 'keydown' &&
      (event.key === 'Tab' || event.key === 'Shift')
    ) {
      return;
    }
    setDrawer(open);
  };

  const navItemsRaw = getNavItems({ user, dispatch, logout, classes });
  const navItems = user ? navItemsRaw.auth : navItemsRaw.noAuth;
  const navCommon = navItemsRaw.common;

  return (
    <>
      <AppBar color="inherit" elevation={0} position="static">
        <Container maxWidth={false} disableGutters>
          <Toolbar className={classes.searchMobileRoot} disableGutters>
            <InputBase
              className={classes.searchMobileInput}
              placeholder="Search for courses..."
            />
          </Toolbar>
        </Container>
      </AppBar>
      <AppBar
        color="inherit"
        elevation={0}
        style={{ borderBottom: '1px ridge rgba(0,0,0,.05)' }}
      >
        <Container maxWidth={false}>
          <Toolbar className={classes.navbarWrapper}>
            <div style={{ display: 'flex', flex: 1 }}>
              <Link>
                <Logo className={classes.navbarIcon} />
              </Link>
            </div>
            <div
              style={{
                display: 'flex',
                flex: 2,
                justifyContent: 'flex-end',
              }}
            >
              <NavMenu
                classes={classes}
                navItems={navItems}
                navCommon={navCommon}
              />
              <IconButton
                color="inherit"
                onClick={toggleDrawer(true)}
                className={classes.menuButton}
              >
                <MenuIcon />
              </IconButton>
              <SideDrawer
                openDrawer={openDrawer}
                toggleDrawer={toggleDrawer}
                navItems={navItems}
                navCommon={navCommon}
              />
            </div>
          </Toolbar>
        </Container>
      </AppBar>
    </>
  );
}

const NavMenu = ({ classes, navItems, navCommon }) => (
  <div className={classes.navMenu}>
    {navCommon.map((item, key) => (
      <Button
        variant={item.buttonType}
        className={item.class}
        onClick={item.onClick}
        to={item.href}
        component={RouterLink}
        key={key}
      >
        {item.label}
      </Button>
    ))}
    {navItems
      .filter((item) => item.showInNavbar !== false)
      .map((item, key) => {
        let menuItem;
        switch (item.type) {
          case 'button':
            menuItem = (
              <Button
                variant={item.buttonType}
                className={item.class}
                onClick={item.onClick}
                to={item.href}
                component={RouterLink}
              >
                {item.label}
              </Button>
            );
            break;
          default:
            menuItem = (
              <Typography variant={item.textVariant}>{item.label}</Typography>
            );
        }
        return (
          <div className={classes.navItem} key={key}>
            {menuItem}
          </div>
        );
      })}
  </div>
);
