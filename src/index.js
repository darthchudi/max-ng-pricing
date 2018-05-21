import React from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter, Route, Switch} from 'react-router-dom';
import App from './App';
import registerServiceWorker from './registerServiceWorker';


import './includes/bootstrap';
import './styles/pricing.css';

ReactDOM.render((
	<BrowserRouter>
		<div>
			<Switch>
				<Route exact path="/" component={App}/>
			</Switch>
		</div>
	</BrowserRouter>
	), document.getElementById('root'));
registerServiceWorker();
