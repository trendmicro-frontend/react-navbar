import classNames from 'classnames';
import React, { Component } from 'react';
import styles from './index.styl';

class SiteHeader extends Component {
    render() {
        const { className, children, ...props } = this.props;

        return (
            <header
                {...props}
                className={classNames(className, styles.siteHeader)}
            >
                {children}
            </header>
        );
    }
}

export default SiteHeader;
