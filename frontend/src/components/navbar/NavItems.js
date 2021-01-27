import LockOpenIcon from '@material-ui/icons/LockOpen';
import PersonAddIcon from '@material-ui/icons/PersonAdd';
import AccountCircleIcon from '@material-ui/icons/AccountCircle';
import DashboardIcon from '@material-ui/icons/Dashboard';
import ExitToAppIcon from '@material-ui/icons/ExitToApp';
import HomeIcon from '@material-ui/icons/Home';
import InfoIcon from '@material-ui/icons/Info';
import BuildIcon from '@material-ui/icons/Build';
import PhotoIcon from '@material-ui/icons/Photo';
import CartIcon from '@material-ui/icons/AddShoppingCart';

export const getNavItems = (props) => ({
  common: [
    {
      label: 'Home',
      href: '/',
      type: 'button',
      icon: <HomeIcon />,
    },
    {
      label: 'About',
      href: '/about',
      type: 'button',
      icon: <InfoIcon />,
    },
    {
      label: 'Guidelines',
      href: '/guidelines',
      type: 'button',
      icon: <BuildIcon />,
    },
    {
      label: 'Gallery',
      href: '/gallery',
      type: 'button',
      icon: <PhotoIcon />,
    },
  ],
  noAuth: [
    {
      label: 'Login',
      href: '/signin',
      type: 'button',
      buttonType: 'outlined',
      class: props.classes.signInButton,
      icon: <LockOpenIcon />,
    },
    {
      label: 'Sign Up',
      href: '/signup',
      type: 'button',
      icon: <PersonAddIcon />,
      buttonType: 'contained',
      class: props.classes.signUpButton,
    },
  ],
  auth: [
    {
      label: (props.user && props.user.name) || 'User',
      icon: <AccountCircleIcon />,
      showInNavbar: false,
    },
    {
      label: 'Dashboard',
      icon: <DashboardIcon />,
      type: 'button',
      href: '/dashboard',
    },
    {
      label: 'Place Order',
      icon: <CartIcon />,
      type: 'button',
      href: '/order',
    },
    {
      label: 'Logout',
      icon: <ExitToAppIcon />,
      type: 'button',
      buttonType: 'contained',
      class: props.classes.signUpButton,
      onClick: () => props.dispatch(props.logout()),
    },
  ],
  admin: [
    {
      label: (props.user && props.user.name) || 'User',
      icon: <AccountCircleIcon />,
      showInNavbar: false,
    },
    {
      label: 'Users',
      icon: <DashboardIcon />,
      type: 'button',
      href: '/admin/users',
    },
    {
      label: 'Orders',
      icon: <CartIcon />,
      type: 'button',
      href: '/admin/orders',
    },
    {
      label: 'Logout',
      icon: <ExitToAppIcon />,
      type: 'button',
      buttonType: 'contained',
      class: props.classes.signUpButton,
      onClick: () => props.dispatch(props.logout()),
    },
  ],
});
