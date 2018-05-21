import React from 'react';

const navBar = (props)=>(
	<div className="desktop-nav fixed-top">
		<nav className="navbar navbar-expand-lg navbar-light p-2" style={{backgroundColor: '#e4b849'}}>
			<span className="navbar-text ml-5 text-white mb-2">
				Beat traffic in Lagos with MAX Go
			</span>

			<button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
				<span className="navbar-toggler-icon"></span>
			</button>

			<div className="collapse navbar-collapse" id="navbarSupportedContent">
				<ul className="navbar-nav ml-auto">
					<li className="nav-item mr-md-5">
						<a href="https://play.google.com/store/apps/details?id=ng.max.go" className="btn btn-outline-light rounded">Download the app</a>
					</li>
				</ul>
			</div>
		</nav>

		<div className="row shadow-sm" style={{backgroundColor: '#fff'}}>
			<div className="col" style={{color: "black"}}>
				<div className="container">
					<nav className="navbar navbar-expand-lg navbar-light p-1">
						<div className="collapse navbar-collapse" id="navbarSupportedContent">
							<ul className="navbar-nav mr-auto">
								<li className="nav-item ml-5">
							        <a className="nav-link" href="/">Business</a>
								</li>
								<li className="nav-item ml-5">
							        <a className="nav-link" href="/">About</a>
								</li>
								<li className="nav-item ml-5">
							        <a className="nav-link" href="/">Pricing</a>
								</li>
								<li className="nav-item ml-5">
							        <a className="nav-link" href="/">Partners</a>
								</li>
							</ul>

							<a className="navbar-brand mx-5" href="/">
								<img src={require("../styles/logo_gold.png")} alt="logo white" width="54.5rem"/>
							</a>

							<ul className="navbar-nav ml-auto">
								<li className="nav-item ml-5">
							        <a className="nav-link" href="/">MAX Go</a>
								</li>
								<li className="nav-item ml-5">
							        <a className="nav-link" href="/">Blog</a>
								</li>
								<li className="nav-item ml-5">
							        <a className="nav-link" href="/">Login</a>
								</li>
								<li className="nav-item ml-5">
							        <a className="nav-link btn btn-outline-light sign-up" href="/">Sign Up</a>
								</li>
							</ul>
						</div>
					</nav>	
				</div>
			</div>
		</div>
	</div>


);

export default navBar;