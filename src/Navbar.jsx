import classNames from 'classnames';
import PropTypes from 'prop-types';
import React, { Component } from 'react';
import shallowCompare from 'react-addons-shallow-compare';
import uncontrollable from 'uncontrollable';
import NavbarBrand from './NavbarBrand';
import NavbarHeader from './NavbarHeader';
import NavbarToggle from './NavbarToggle';
import styles from './index.styl';

class Navbar extends Component {
    static propTypes = {
        // Set a custom element for this component.
        componentClass: PropTypes.oneOfType([
            PropTypes.string,
            PropTypes.func
        ]),

        // Create a fixed navbar along the top of the screen, that scrolls with the page.
        fixedTop: PropTypes.bool,

        // Create a full-width navbar that scrolls away the page.
        staticTop: PropTypes.bool,

        // Explicitly set the visibility of the navbar body.
        expanded: PropTypes.bool,

        // A callback fired when a descendant of a child `<Nav>` is selected.
        // The callback is called with an eventKey, which is a prop from the selected `<Nav>` descendant, and an event.
        // ```js
        // function (
        //   Any eventKey,
        //   SyntheticEvent event?
        // )
        // ```
        onSelect: PropTypes.func,

        // A callback fired when the `<Navbar>` body collapses or expands. Fired when a `<Navbar.Toggle` is clicked.
        onToggle: PropTypes.func,

        role: PropTypes.string
    };
    static defaultProps = {
        componentClass: 'nav',
        fixedTop: false,
        staticTop: false
    };
    static childContextTypes = {
        $tm_navbar: PropTypes.shape({
            navbarStyle: PropTypes.string,
            expanded: PropTypes.bool,
            onToggle: PropTypes.func.isRequired,
            onSelect: PropTypes.func
        })
    };

    actions = {
        handleToggle: () => {
            const { onToggle, expanded } = this.props;
            onToggle(!expanded);
        }
    };

    getChildContext() {
        const { expanded, onSelect } = this.props;

        return {
            $tm_navbar: {
                navbarStyle: 'default', // TODO: Make it configurable
                expanded,
                onSelect,
                onToggle: this.actions.handleToggle
            }
        };
    }
    shouldComponentUpdate(nextProps, nextState) {
        return shallowCompare(this, nextProps, nextState);
    }
    render() {
        const {
            componentClass: Nav,
            fixedTop,
            staticTop,
            role,
            className,
            children,
            ...props
        } = this.props;

        delete props.expanded;
        delete props.onSelect;
        delete props.onToggle;

        return (
            <Nav
                {...props}
                role={role}
                className={classNames(
                    className,
                    {
                        [styles.fixedTop]: fixedTop,
                        [styles.staticTop]: staticTop
                    },
                    styles.navbar,
                    styles.navbarDefault
                )}
            >
                {children}
            </Nav>
        );
    }
}

const UncontrollableNavbar = uncontrollable(Navbar, {
    // Define the pairs of prop/handlers you want to be uncontrollable
    open: 'onToggle'
});

UncontrollableNavbar.Brand = NavbarBrand;
UncontrollableNavbar.Header = NavbarHeader;
UncontrollableNavbar.Toggle = NavbarToggle;

export default UncontrollableNavbar;
