import {
    Collapse,
    Navbar,
    NavbarToggler,
    NavbarBrand,
    Nav,
    NavItem,
    UncontrolledDropdown,
    DropdownToggle,
    DropdownMenu,
    DropdownItem
} from 'reactstrap';
import './Header.css';
import Logo from '../../images/favicon.png';
import { BrowserRouter as Router, NavLink } from 'react-router-dom';
import React, { useState } from 'react';

const Header = (props) => {
    const [isOpen, setIsOpen] = useState(false);

    const toggle = () => setIsOpen(!isOpen);

    return (
        <div>
            <Navbar navbar-light="true" expand="lg">
                <NavbarBrand to="/">
                    <img src={Logo} alt="" />
                    <p>Photo Perfect</p>
                </NavbarBrand>
                <NavbarToggler onClick={toggle} />
                <Collapse isOpen={isOpen} navbar>
                    <Router>
                        <Nav navbar>
                            <NavItem>
                                <NavLink exact to="/">Home</NavLink>
                            </NavItem>
                            <NavItem>
                                <NavLink to="/about">About</NavLink>
                            </NavItem>
                            <UncontrolledDropdown nav inNavbar>
                                <DropdownToggle nav caret>
                                    Blog
                                </DropdownToggle>
                                <DropdownMenu right>
                                    <DropdownItem>
                                        People
                                    </DropdownItem>
                                    <DropdownItem>
                                        Nature
                                    </DropdownItem>
                                    <DropdownItem divider />
                                    <DropdownItem>
                                        Computer
                                    </DropdownItem>
                                    <DropdownItem>
                                        Food
                                    </DropdownItem>
                                </DropdownMenu>
                            </UncontrolledDropdown>
                            {/* <NavItem>
                                <NavLink to="/blog">Blog</NavLink>
                            </NavItem> */}
                            <NavItem>
                                <NavLink to="/contact">Contact</NavLink>
                            </NavItem>
                        </Nav>
                    </Router>
                </Collapse>
            </Navbar>
        </div>
    );
}

export default Header;