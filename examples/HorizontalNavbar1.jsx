import Anchor from '@trendmicro/react-anchor';
import Dropdown from '@trendmicro/react-dropdown';
import PropTypes from 'prop-types';
import React from 'react';
import { StickyContainer, Sticky } from 'react-sticky';
import { Nav, NavDropdown, NavItem, MenuItem } from '@trendmicro/react-navs';
import Navbar from '../src';
import styles from './index.styl';

const noop = () => {};

const PageContent = () => (
    <div
        style={{
            border: '1px solid #ddd',
            backgroundColor: '#f5f5f5',
            height: 600,
            marginTop: 15
        }}
    >
        <div className="container-fluid">
            <h3>Page Content</h3>
        </div>
    </div>
);

const HorizontalNavbar = ({ state, actions }) => {
    return (
        <StickyContainer>
            <header className={styles.siteHeader}>
                <Anchor>
                    <i className={styles.banner} />
                    <h1 className={styles.title}>Product Name</h1>
                </Anchor>
            </header>
            <Sticky>
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
                            open={false}
                            onToggle={noop}
                            autoOpen
                            noCaret
                            eventKey="dashboard"
                            title="Dashboard"
                        >
                            <MenuItem eventKey="dashboard.1">Menu Item 1</MenuItem>
                            <MenuItem eventKey="dashboard.2">Menu Item 2</MenuItem>
                            <MenuItem eventKey="dashboard.3">Menu Item 3</MenuItem>
                            <MenuItem eventKey="dashboard.4">Menu Item 4</MenuItem>
                        </NavDropdown>
                        <NavDropdown
                            open={false}
                            onToggle={noop}
                            autoOpen
                            noCaret
                            eventKey="devices"
                            title="Devices"
                        >
                            <MenuItem eventKey="devices.1">Menu Item 1</MenuItem>
                            <MenuItem eventKey="devices.2">Menu Item 2</MenuItem>
                            <MenuItem eventKey="devices.3">Menu Item 3</MenuItem>
                            <MenuItem eventKey="devices.4">Menu Item 4</MenuItem>
                        </NavDropdown>
                        <NavDropdown
                            open={false}
                            onToggle={noop}
                            autoOpen
                            noCaret
                            eventKey="reports"
                            title="Reports"
                        >
                            <MenuItem eventKey="reports.1">Menu Item 1</MenuItem>
                            <MenuItem eventKey="reports.2">Menu Item 2</MenuItem>
                            <MenuItem eventKey="reports.3">Menu Item 3</MenuItem>
                            <MenuItem eventKey="reports.4">Menu Item 4</MenuItem>
                        </NavDropdown>
                        <NavDropdown
                            open={false}
                            onToggle={noop}
                            autoOpen
                            noCaret
                            eventKey="administration"
                            title="Administration"
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
                            open={false}
                            onToggle={noop}
                            autoOpen
                            noCaret
                            eventKey="help"
                            title="Help"
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
            </Sticky>
            <PageContent />
        </StickyContainer>
    );
};

HorizontalNavbar.propTypes = {
    state: PropTypes.object,
    actions: PropTypes.object
};

export default HorizontalNavbar;
