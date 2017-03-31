import Anchor from '@trendmicro/react-anchor';
import Dropdown from '@trendmicro/react-dropdown';
import React, { PropTypes } from 'react';
import { Nav, NavDropdown, NavItem, MenuItem } from '@trendmicro/react-navs';
import Navbar, { SiteHeader, SiteBanner, SiteTitle } from '../src';

const HorizontalNavbar = ({ state, actions }) => {
    const { autoOpen } = state;

    return (
        <div>
            <SiteHeader>
                <Anchor>
                    <SiteBanner />
                    <SiteTitle>
                        Product Name
                    </SiteTitle>
                </Anchor>
            </SiteHeader>
            <Navbar>
                <Navbar.Header>
                    <Navbar.Toggle />
                </Navbar.Header>
                <Nav
                    navStyle="navbar"
                    activeKey={state.tab}
                    onSelect={actions.selectTab}
                >
                    <NavItem className="text-center" style={{ minWidth: 72 }}>
                        <i className="fa fa-star" style={{ color: '#fff' }} />
                    </NavItem>
                    <NavDropdown
                        autoOpen={autoOpen}
                        noCaret
                        eventKey="dashboard"
                        title="Dashboard"
                        onToggle={actions.onToggle}
                    >
                        <MenuItem eventKey="dashboard.1">Menu Item 1</MenuItem>
                        <MenuItem eventKey="dashboard.2">Menu Item 2</MenuItem>
                        <MenuItem eventKey="dashboard.3">Menu Item 3</MenuItem>
                        <MenuItem eventKey="dashboard.4">Menu Item 4</MenuItem>
                    </NavDropdown>
                    <NavDropdown
                        autoOpen={autoOpen}
                        noCaret
                        eventKey="devices"
                        title="Devices"
                        onToggle={actions.onToggle}
                    >
                        <MenuItem eventKey="devices.1">Menu Item 1</MenuItem>
                        <MenuItem eventKey="devices.2">Menu Item 2</MenuItem>
                        <MenuItem eventKey="devices.3">Menu Item 3</MenuItem>
                        <MenuItem eventKey="devices.4">Menu Item 4</MenuItem>
                    </NavDropdown>
                    <NavDropdown
                        autoOpen={autoOpen}
                        noCaret
                        eventKey="reports"
                        title="Reports"
                        onToggle={actions.onToggle}
                    >
                        <MenuItem eventKey="reports.1">Menu Item 1</MenuItem>
                        <MenuItem eventKey="reports.2">Menu Item 2</MenuItem>
                        <MenuItem eventKey="reports.3">Menu Item 3</MenuItem>
                        <MenuItem eventKey="reports.4">Menu Item 4</MenuItem>
                    </NavDropdown>
                    <NavDropdown
                        autoOpen={autoOpen}
                        noCaret
                        eventKey="administration"
                        title="Administration"
                        onToggle={actions.onToggle}
                    >
                        <MenuItem eventKey="administration.1">Menu Item 1</MenuItem>
                        <MenuItem eventKey="administration.2">Menu Item 2</MenuItem>
                        <MenuItem eventKey="administration.3">Menu Item 3</MenuItem>
                        <Dropdown.SubMenu eventKey="administration.4" title="Menu item 4" onSelect={actions.selectTab}>
                            <MenuItem eventKey="administration.4.1">
                                Second level item one
                            </MenuItem>
                            <MenuItem eventKey="administration.4.2">
                                Second level item two
                            </MenuItem>
                        </Dropdown.SubMenu>
                    </NavDropdown>
                    <NavDropdown
                        autoOpen={autoOpen}
                        noCaret
                        eventKey="help"
                        title="Help"
                        onToggle={actions.onToggle}
                    >
                        <MenuItem eventKey="help.1">Menu Item 1</MenuItem>
                        <MenuItem eventKey="help.2">Menu Item 2</MenuItem>
                        <MenuItem eventKey="help.3">Menu Item 3</MenuItem>
                        <Dropdown.SubMenu eventKey="help.4" title="Menu item 4" onSelect={actions.selectTab}>
                            <MenuItem eventKey="help.4.1">
                                Second level item one
                            </MenuItem>
                            <MenuItem eventKey="help.4.2">
                                Second level item two
                            </MenuItem>
                        </Dropdown.SubMenu>
                    </NavDropdown>
                </Nav>
            </Navbar>
        </div>
    );
};

HorizontalNavbar.propTypes = {
    state: PropTypes.object,
    actions: PropTypes.object
};

export default HorizontalNavbar;
