import { useState } from 'react';
import { Link } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import {
  AppBar,
  Toolbar,
  Container,
  Typography,
  Button,
  IconButton,
  Menu,
  MenuItem,
} from '@material-ui/core';
import {
  AiOutlineUnlock,
  AiOutlineUserAdd,
  AiOutlineLogout,
  AiOutlineUsergroupDelete,
  AiOutlineShoppingCart,
} from 'react-icons/ai';
import { RiDashboardLine } from 'react-icons/ri';
import { FaUserCircle } from 'react-icons/fa';
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
  const navItems = user
    ? user.isAdmin
      ? navItemsRaw.admin
      : navItemsRaw.auth
    : navItemsRaw.noAuth;
  const navCommon = navItemsRaw.common;

  return (
    <>
      <AppBar
        color="inherit"
        elevation={0}
        position="sticky"
        style={{ borderBottom: '1px ridge rgba(0,0,0,.05)' }}
      >
        <Container maxWidth={false}>
          <Toolbar className={classes.navbarWrapper}>
            <div style={{ display: 'flex', flex: 1 }}>
              <Link to="/">
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
                user={user}
                dispatch={dispatch}
                logout={logout}
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

const NavMenu = ({ classes, navItems, navCommon, user, dispatch, logout }) => {
  const [anchorEl, setAnchorEl] = useState(null);
  const open = Boolean(anchorEl);

  const handleMenu = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <div className={classes.navMenu}>
      {navCommon.map((item, key) => (
        <Button
          variant={item.buttonType}
          className={item.class}
          onClick={item.onClick}
          to={item.href}
          component={Link}
          key={key}
          disableTouchRipple
          disableRipple
          disableFocusRipple
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
                  component={Link}
                  disableTouchRipple
                  disableRipple
                  disableFocusRipple
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
      <IconButton onClick={handleMenu}>
        <FaUserCircle color="black" />
      </IconButton>
      <Menu
        anchorEl={anchorEl}
        anchorOrigin={{ vertical: 'top', horizontal: 'right' }}
        keepMounted
        transformOrigin={{
          vertical: 'top',
          horizontal: 'right',
        }}
        open={open}
        onClose={handleClose}
      >
        {!user ? (
          <>
            <Link to="/signup">
              <MenuItem onClick={handleClose}>
                <Button
                  fullWidth
                  disableRipple
                  disableTouchRipple
                  disableFocusRipple
                  startIcon={<AiOutlineUserAdd />}
                >
                  Sign Up
                </Button>
              </MenuItem>
            </Link>
            <Link to="/signin">
              <MenuItem onClick={handleClose}>
                <Button
                  fullWidth
                  disableRipple
                  disableTouchRipple
                  disableFocusRipple
                  startIcon={<AiOutlineUnlock />}
                >
                  Login
                </Button>
              </MenuItem>
            </Link>
          </>
        ) : user.isAdmin ? (
          <MenuItem onClick={handleClose}>
            <Button
              fullWidth
              disableRipple
              disableTouchRipple
              disableFocusRipple
              startIcon={<AiOutlineLogout />}
              onClick={() => dispatch(logout())}
            >
              Logout
            </Button>
          </MenuItem>
        ) : (
          <>
            <Link to="/dashboard">
              <MenuItem onClick={handleClose}>
                <Button
                  fullWidth
                  disableRipple
                  disableTouchRipple
                  disableFocusRipple
                  startIcon={<RiDashboardLine />}
                >
                  Account
                </Button>
              </MenuItem>
            </Link>
            <MenuItem onClick={handleClose}>
              <Button
                fullWidth
                disableRipple
                disableTouchRipple
                disableFocusRipple
                startIcon={<AiOutlineLogout />}
                onClick={() => dispatch(logout())}
              >
                Logout
              </Button>
            </MenuItem>
          </>
        )}
      </Menu>
    </div>
  );
};
