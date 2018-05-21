import React from 'react';
import ReactDOM from 'react-dom';
import {HashRouter, Route, Switch} from 'react-router-dom';
import App from './App';
import registerServiceWorker from './registerServiceWorker';

import './includes/bootstrap';
import './styles/pricing.css';

ReactDOM.render((
	<HashRouter>
		<div>
			<Switch>
				<Route exact path="/" component={App}/>
			</Switch>
		</div>
	</HashRouter>
	), document.getElementById('root'));
registerServiceWorker();
