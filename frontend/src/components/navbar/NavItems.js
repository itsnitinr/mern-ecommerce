import {
  AiOutlineHome,
  AiOutlineInfoCircle,
  AiOutlineUnlock,
  AiOutlineUserAdd,
  AiOutlineUser,
  AiOutlineShoppingCart,
  AiOutlineLogout,
  AiOutlineUsergroupDelete,
} from 'react-icons/ai';
import { VscCircuitBoard } from 'react-icons/vsc';
import { HiOutlinePhotograph } from 'react-icons/hi';
import { RiDashboardLine } from 'react-icons/ri';

export const getNavItems = (props) => ({
  common: [
    {
      label: 'Home',
      href: '/',
      type: 'button',
      icon: <AiOutlineHome fontSize={28} />,
    },
    {
      label: 'About',
      href: '/about',
      type: 'button',
      icon: <AiOutlineInfoCircle fontSize={28} />,
    },
    {
      label: 'Guidelines',
      href: '/guidelines',
      type: 'button',
      icon: <VscCircuitBoard fontSize={28} />,
    },
    {
      label: 'Gallery',
      href: '/gallery',
      type: 'button',
      icon: <HiOutlinePhotograph fontSize={28} />,
    },
  ],
  noAuth: [
    {
      label: 'Login',
      href: '/signin',
      type: 'button',
      buttonType: 'outlined',
      class: props.classes.signInButton,
      icon: <AiOutlineUnlock fontSize={28} />,
      showInNavbar: false,
    },
    {
      label: 'Sign Up',
      href: '/signup',
      type: 'button',
      icon: <AiOutlineUserAdd fontSize={28} />,
      buttonType: 'contained',
      class: props.classes.signUpButton,
      showInNavbar: false,
    },
  ],
  auth: [
    {
      label: (props.user && props.user.name) || 'User',
      icon: <AiOutlineUser fontSize={28} />,
      showInNavbar: false,
    },
    {
      label: 'Dashboard',
      icon: <RiDashboardLine fontSize={28} />,
      type: 'button',
      href: '/dashboard',
      showInNavbar: false,
    },
    {
      label: 'Place Order',
      icon: <AiOutlineShoppingCart fontSize={28} />,
      type: 'button',
      href: '/order',
    },
    {
      label: 'Logout',
      icon: <AiOutlineLogout fontSize={28} />,
      type: 'button',
      buttonType: 'contained',
      class: props.classes.signUpButton,
      onClick: () => props.dispatch(props.logout()),
      showInNavbar: false,
    },
  ],
  admin: [
    {
      label: (props.user && props.user.name) || 'User',
      icon: <AiOutlineUser fontSize={28} />,
      showInNavbar: false,
    },
    {
      label: 'Users',
      icon: <AiOutlineUsergroupDelete fontSize={28} />,
      type: 'button',
      href: '/admin/users',
    },
    {
      label: 'Orders',
      icon: <AiOutlineShoppingCart fontSize={28} />,
      type: 'button',
      href: '/admin/orders',
    },
    {
      label: 'Logout',
      icon: <AiOutlineLogout fontSize={28} />,
      type: 'button',
      buttonType: 'contained',
      class: props.classes.signUpButton,
      onClick: () => props.dispatch(props.logout()),
      showInNavbar: false,
    },
  ],
});
