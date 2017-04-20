import chainedFunction from 'chained-function';
import classNames from 'classnames';
import PropTypes from 'prop-types';
import React, { PureComponent } from 'react';
import styles from './index.styl';

class NavbarToggle extends PureComponent {
    static propTypes = {
        onClick: PropTypes.func,

        // The toggle content, if left empty it will render the default toggle.
        children: PropTypes.node
    };
    static contextTypes = {
        $tm_navbar: PropTypes.shape({
            expanded: PropTypes.bool,
            onToggle: PropTypes.func.isRequired
        })
    };

    render() {
        const { onClick, className, children, ...props } = this.props;
        const navbar = this.context.$tm_navbar;

        const buttonProps = {
            type: 'button',
            ...props,
            onClick: chainedFunction(
                onClick,
                navbar && navbar.onToggle
            ),
            className: classNames(
                className,
                styles.navbarToggle,
                { [styles.collapsed]: navbar && !navbar.expanded }
            )
        };

        if (children) {
            return (
                <button {...buttonProps}>
                    {children}
                </button>
            );
        }

        return (
            <button {...buttonProps}>
                <span className={styles.srOnly}>Toggle navigation</span>
                <span className={styles.iconBar} />
                <span className={styles.iconBar} />
                <span className={styles.iconBar} />
            </button>
        );
    }
}

export default NavbarToggle;
