import React, { PropTypes } from 'react';
import { Nav, NavDropdown, NavItem, MenuItem } from '@trendmicro/react-navs';
import Navbar from '../src';

const VerticalNavbar = ({ state, actions }) => {
    return (
        <Navbar>
            <Navbar.Header>
                <Navbar.Brand>
                    Product Name
                </Navbar.Brand>
                <Navbar.Toggle />
            </Navbar.Header>
            <Navbar.Collapse>
                <Nav
                    navStyle="navbar"
                    activeKey={state.tab}
                    onSelect={actions.selectTab}
                >
                    <NavItem eventKey="1">Home</NavItem>
                    <NavDropdown eventKey="2" title="Styles">
                        <MenuItem eventKey="2.1">Color</MenuItem>
                        <MenuItem eventKey="2.2">Layout</MenuItem>
                        <MenuItem eventKey="2.3">Typography</MenuItem>
                        <MenuItem eventKey="2.4">Icons</MenuItem>
                    </NavDropdown>
                </Nav>
            </Navbar.Collapse>
        </Navbar>
    );
};

VerticalNavbar.propTypes = {
    state: PropTypes.object,
    actions: PropTypes.object
};

export default VerticalNavbar;
