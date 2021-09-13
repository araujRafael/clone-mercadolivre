import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import GlobalStyles from './styles/GlobalStyles'
// COmponents
import ProductContainer from './components/ProductContainer/ProductContainer';
import Header from './components/Header';
import Footer from './components/Footer';

export default function App() {
	return (
		<Router>
			<Header />
			<Switch>
				<Route path='/' component={ProductContainer} />

			</Switch>
			{/* <Footer /> */}
			<GlobalStyles />
		</Router>
	);
}
