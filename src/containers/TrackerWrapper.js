import React, { Component, Fragment } from 'react';
import { withRouter } from 'react-router-dom';
import Helmet from 'react-helmet';
import Header from '../components/Header';
import Footer from '../components/Footer';

class TrackerWrapper extends Component {
	render() {
		return (
			<Fragment>
				<Helmet
					title="Calculator"
					meta={[
						{property: 'og:title', content: 'Calculator'},
						{name: 'description', content: 'Calculator Demo'},
						{property:'og:description', content: 'Calculator Demo'},
					]}
				/>
				<Header />
				{this.props.children}
				<Footer />
			</Fragment>
		);
	}
}

export default withRouter(TrackerWrapper);
