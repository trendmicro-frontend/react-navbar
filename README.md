# react-navbar [![build status](https://travis-ci.org/trendmicro-frontend/react-navbar.svg?branch=master)](https://travis-ci.org/trendmicro-frontend/react-navbar) [![Coverage Status](https://coveralls.io/repos/github/trendmicro-frontend/react-navbar/badge.svg?branch=master)](https://coveralls.io/github/trendmicro-frontend/react-navbar?branch=master)

[![NPM](https://nodei.co/npm/@trendmicro/react-navbar.png?downloads=true&stars=true)](https://nodei.co/npm/@trendmicro/react-navbar/)

React Navbar

Demo: https://trendmicro-frontend.github.io/react-navbar

## Installation

1. Install the latest version of [react](https://github.com/facebook/react) and [react-navbar](https://github.com/trendmicro-frontend/react-navbar):

  ```
  npm install --save react @trendmicro/react-navbar
  ```

2. At this point you can import `@trendmicro/react-navbar` and its styles in your application as follows:

  ```js
  import Navbar from '@trendmicro/react-navbar';

  // Be sure to include styles at some point, probably during your bootstraping
  import '@trendmicro/react-dropdown/dist/react-dropdown.css';
  import '@trendmicro/react-navs/dist/react-navs.css';
  import '@trendmicro/react-navbar/dist/react-navbar.css';
  ```

## Usage

### Horizontal Navigation Bar

#### app.jsx
```js
import React, { PropTypes } from 'react';
import ReactDOM from 'react-dom';
import Anchor from '@trendmicro/react-anchor';
import Dropdown from '@trendmicro/react-dropdown';
import Navbar from '@trendmicro/react-navbar';
import { Nav, NavDropdown, NavItem, MenuItem } from '@trendmicro/react-navs';
import styles from './index.styl'; // CSS Modules

const HorizontalNavbar = ({ state, actions }) => {
    const { autoOpen } = state;

    return (
        <div>
            <header className={styles.siteHeader}>
                <Anchor>
                    <i className={styles.banner} />
                    <h1 className={styles.title}>Product Name</h1>
                </Anchor>
            </header>
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
                        <Dropdown.SubMenu
                            eventKey="administration.4"
                            title="Menu item 4"
                            onSelect={actions.selectTab}
                        >
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
                        <Dropdown.SubMenu
                            eventKey="help.4"
                            title="Menu item 4"
                            onSelect={actions.selectTab}
                        >
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

class App extends React.Component {
    state = {
        autoOpen: true,
        tab: ''
    };
    actions = {
        onToggle: (open) => {
            this.setState({ autoOpen: !open });
        },
        selectTab: (eventKey, event) => {
            if (!eventKey) {
                return;
            }

            const tab = eventKey.replace(/\..+/g, '');
            this.setState({ tab });
        }
    };

    render() {
        return (
            <HorizontalNavbar
                state={this.state}
                actions={this.actions}
            />
        )
    }
}

ReactDOM.render(<App />, document.getElementById('container'));
```

#### index.styl
```css
.site-header {
    position: relative;
    padding: 0 20px;
    height: 64px;
    margin-bottom: 0;
    background-color: #fff;

    a:link,
    a:hover,
    a:active,
    a:visited,
    a:focus {
        color: #222;
        text-decoration: none;
    }

    .banner {
        width: 32px;
        height: 32px;
        margin: 16px 0;
        margin-right: 10px;
        background: url("./tball.svg") center left no-repeat;
        float: left;
    }
    .title {
        padding: 16px 0;
        font-family: "Interstate-Light", Arial, "Helvetica Neue", Helvetica, sans-serif;
        font-size: 26px;
        font-weight: 200;
        letter-spacing: -.03em;
        white-space: nowrap;
    }
}
```

#### [tball.svg](examples/tball.svg?raw=true)

![image](https://cloud.githubusercontent.com/assets/447801/24544119/b27ce2ba-1634-11e7-984d-aa58ca6c5934.png)


## API

### Properties

Name | Type | Default | Description 
:--- | :--- | :------ | :----------

## License

MIT
