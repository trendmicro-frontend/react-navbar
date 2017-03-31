import classNames from 'classnames';
import React, { Component } from 'react';
import styles from './index.styl';

class SiteTitle extends Component {
    render() {
        const { className, children, ...props } = this.props;

        return (
            <h1 {...props} className={classNames(className, styles.siteTitle)}>
                {children}
            </h1>
        );
    }
}

export default SiteTitle;
