import React from 'react';
import { Link } from 'react-navi';
import { Navbar, Nav, Image } from 'react-bootstrap';
import { useSelector, useDispatch } from 'react-redux';
import { User } from 'react-feather';
import Wrapper from './navbar.styles';
import { authData, logout } from '~/app/redux/auth/auth.slice';
import logo from '~/images/drug-logo.png';
import { authService } from '~/services/AuthService';

const navbar = () => {
  const { isLoggedIn } = useSelector(authData);
  const currentUser = authService.getCurrentUser();

  const dispatch = useDispatch();
  const handleLogout = () => {
    dispatch(logout());
  };

  return (
    <Wrapper>
      <div className="App">
        <Navbar className="navbar" collapseOnSelect expand="lg">
          <Navbar.Brand href="/">
            <Image src={logo} width="35" height="35" />
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="nav-items">
              <Link href="/">通知</Link>
              {isLoggedIn || currentUser ? (
                <>
                  <div className="user">
                    <User size={16} color="#fff" />
                    <span>{currentUser && currentUser.name}</span>
                  </div>
                  <Link href="/" onClick={handleLogout}>
                    サインアウト
                  </Link>
                </>
              ) : (
                <Link href="/sign-up">サインアップ</Link>
              )}
            </Nav>
          </Navbar.Collapse>
        </Navbar>
      </div>
    </Wrapper>
  );
};

export default navbar;
