import 'trendmicro-ui/dist/css/trendmicro-ui.css';
import '@trendmicro/react-buttons/dist/react-buttons.css';
import '@trendmicro/react-navs/dist/react-navs.css';
import '@trendmicro/react-dropdown/dist/react-dropdown.css';
import React from 'react';
import ReactDOM from 'react-dom';
import * as Layout from './layout';
import HorizontalNavbar1 from './HorizontalNavbar1';
import HorizontalNavbar2 from './HorizontalNavbar2';

class App extends React.Component {
    state = {
        tab: ''
    };
    actions = {
        selectTab: (eventKey, event) => {
            if (!eventKey) {
                return;
            }

            const tab = eventKey.replace(/\..+/g, '');
            this.setState({ tab });
        }
    };

    render() {
        const name = 'React Navbar';
        const url = 'https://github.com/trendmicro-frontend/react-navbar';

        return (
            <div>
                <Layout.Navbar name={name} url={url} />
                <div className="container-fluid" style={{ padding: '20px 20px 0' }}>
                    <div className="row">
                        <div className="col-md-12">
                            <Layout.Section className="row-md-5">
                                <h3>Horizontal Navigation Bar #1</h3>
                                <p>Do not use arrows if all nav dropdowns contain sub-items.</p>
                                <HorizontalNavbar1
                                    state={this.state}
                                    actions={this.actions}
                                />
                            </Layout.Section>
                        </div>
                        <div className="col-md-12">
                            <Layout.Section className="row-md-5">
                                <h3>Horizontal Navigation Bar #2</h3>
                                <p>Use arrows for the nav dropdown containing sub-items.</p>
                                <HorizontalNavbar2
                                    state={this.state}
                                    actions={this.actions}
                                />
                            </Layout.Section>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

ReactDOM.render(
    <App />,
    document.getElementById('container')
);
