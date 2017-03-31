import classNames from 'classnames';
import React, { Component } from 'react';
import styles from './index.styl';

class SiteBanner extends Component {
    render() {
        const { className, ...props } = this.props;

        return (
            <i {...props} className={classNames(className, styles.banner)} />
        );
    }
}

export default SiteBanner;
