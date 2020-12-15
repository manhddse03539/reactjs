import React, { useState } from 'react';
import {
    Collapse,
    Navbar,
    NavbarToggler,
    NavbarBrand,
    Nav
} from 'reactstrap';
import { NavLink } from 'react-router-dom';
import './TopMenu.css'
import { CartContext } from '../contexts/Cart';

const TopMenu = (props) => {
    const [isOpen, setIsOpen] = useState(false);

    const toggle = () => setIsOpen(!isOpen);

    return (
        <Navbar color="light" light expand="md">
            <NavbarBrand href="/">reactstrap</NavbarBrand>
            <NavbarToggler onClick={toggle} />
            <Collapse isOpen={isOpen} navbar>
                <Nav className="mr-auto menu-bar" navbar>
                    <NavLink exact to="/">Home</NavLink>
                    <NavLink to="/products">Products</NavLink>
                    <CartContext.Consumer>
                        {({ cartItems }) => (
                            <NavLink to="/cart">Cart({cartItems.length})</NavLink>
                        )}
                    </CartContext.Consumer>
                </Nav>
            </Collapse>
        </Navbar>
    );
}

export default TopMenu;