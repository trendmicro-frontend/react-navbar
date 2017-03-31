import React, { Component, PropTypes } from 'react';
import Collapse from './Collapse';
import styles from './index.styl';

class NavbarCollapse extends Component {
    static contextTypes = {
        $tm_navbar: PropTypes.shape({
            expanded: PropTypes.bool
        })
    };

    render() {
        const { children, ...props } = this.props;
        const navbar = this.context.$tm_navbar;
        const expanded = navbar && navbar.expanded;

        return (
            <Collapse in={expanded} {...props}>
                <div className={styles.navbarCollapse}>
                    {children}
                </div>
            </Collapse>
        );
    }
}

export default NavbarCollapse;
