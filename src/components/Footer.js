import React from 'react';

const footer = ()=>(
	<div className="footer">
		<div className="container">
			<div className="row">
				<div className="col mt-5">
					<img src={require("../styles/logo_gold.png")} className="img-fluid max-logo" alt="gold logo"/>
				</div>

				<div className="w-100 break"></div>

				<div className="col mt-3 mt-md-5">
					<h1 className="display-3 footer-title max-gold helvetica-n">About</h1>
					<ul className="list-unstyled text-white footer-list">
						<li className="my-3">Who We Are</li>
						<li className="my-3">Pricing</li>
						<li className="my-3">FAQS</li>
						<li className="my-3">Terms</li>
						<li className="my-3">Privacy Policy</li>
						<li className="my-3">Shipping Policy</li>
					</ul>
				</div>

				<div className="w-100 break"></div>

				<div className="col mt-3 mt-md-5">
					<h1 className="display-3 footer-title max-gold helvetica-n">Company</h1>
					<ul className="list-unstyled text-white footer-list">
						<li className="my-3">Become a champion</li>
						<li className="my-3">Become a partner</li>
						<li className="my-3">Blog</li>
						<li className="my-3">Media & Press</li>
					</ul>
				</div>

				<div className="w-100 break"></div>

				<div className="col mt-3 mt-md-5">
					<h1 className="display-3 footer-title max-gold helvetica-n">Contact Us</h1>
					<ul className="list-unstyled text-white footer-list">
						<li className="my-3">0700MAXDOTNG (070062936864)</li>
						<li className="my-3">info@max.ng</li>
						<li className="my-3">success@max.ng</li>
					</ul>
				</div>

				<div className="w-100 break"></div>

				<div className="col mt-3 mt-md-5">
					<h1 className="display-3 footer-title max-gold helvetica-n">Say Hello</h1>
					<ul className="list-inline ml-md-5">
						<li className="list-inline-item mr-4">
							<i className="fa fa-twitter"></i>
						</li>

						<li className="list-inline-item mr-4">
							<i className="fa fa-facebook"></i>
						</li>

						<li className="list-inline-item">
							<i className="fa fa-instagram"></i>
						</li>
					</ul>
				</div>
			</div>

			<div className="row">
				<div className="col">
					<h1 className="text-center copyright text-white mb-5 mt-4 mt-md-3 ">© 2018. MAX</h1>
				</div>
			</div>
		</div>
	</div>
)

export default footer;