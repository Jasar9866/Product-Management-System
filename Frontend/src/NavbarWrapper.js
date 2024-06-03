// NavbarWrapper.js
import React from 'react';
import { useAuth } from './context/AuthContext';
import Navbar from './navbar';

import Sidebar1 from './sidebar';

function NavbarWrapper() {
  const { isLoggedIn } = useAuth();

  return (
    isLoggedIn ? <Sidebar1 /> : <Navbar />
  );
}

export default NavbarWrapper;
