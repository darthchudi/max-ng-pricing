import React from 'react';

const information = ()=>(
	<div>
		<div className="row mt-5">
			<div className="col">
				<div className="container">
					<h2 className="display-4 text-center helvetica-n">Cash On Delivery</h2>
					<p className="lead text-center">
						We accept cash on delivery on your behalf from your customers and remit to your specified bank account. 
						<br/>
						Collections are remitted twice a week, on Wednesday and Friday.
						<br/>
						Please note we charge a transaction fee for cash handling and remittance, see our rates below.
					</p>
				</div>
			</div>
		</div>

		<div className="container">
			<div className="row mt-2">
				<div className="col mb-4">
					<div className="card mx-auto shadow border-0">
						<div className="card-body">
							<h1 className="display-3 text-center price helvetica-n card-prices">1.5%</h1>
							<p className="lead text-center">
								For cash collections above <span style={{color: "#daa520"}}>₦12,000 </span>
							</p>
						</div>
					</div>
				</div>

				<div className="col">
					<div className="card mx-auto shadow border-0">
						<div className="card-body">
							<h1 className="display-3 text-center price helvetica-n card-prices"><span className="naira"> ₦ </span>  200</h1>
							<p className="lead text-center">
								For cash collections below <span style={{color: "#daa520"}}>₦12,000 </span>
							</p>
						</div>
					</div>
				</div>
			</div>
		</div>

		<div className="row mt-5">
			<div className="col">
				<div className="container">
					<h2 className="display-4 text-center helvetica-n">Frequently Asked Questions</h2>

					<div className="mt-4">
						<div className="row">
							<div className="col-md-6">
								<h1 className="faq-q helvetica-n">
									<i className="fa fa-question-circle mr-2"></i>
									How are delivery fees calculated?
									
								</h1>
								<p className="lead faq-a mb-4">
									Delivery fees are calculated using the distance between the pickup point and delivery point. We charge <span className="max-gold">₦65/KM</span> , which translates to a minimum delivery fee of <span> ₦650</span> .
								</p>

								<h1 className="faq-q helvetica-n">
									<i className="fa fa-question-circle mr-2"></i>
									Do you collect Cash on Delivery (COD)?
									
								</h1>
								<p className="lead faq-a mb-4">
									Yes, we do. Please note that COD refers to our Champions collecting cash on your behalf at delivery and not delivery fees at pickup or delivery.
								</p>
							</div>

							<div className="col-md-6">
								<h1 className="faq-q helvetica-n">
									<i className="fa fa-question-circle mr-2"></i>
									I have a lot of deliveries and distance based pricing isn't a good fit?
									
								</h1>
								<p className="lead faq-a">
									If you run a business with high volumes of deliveries weekly, please contact us at <a href="mailto:success@max.ng" className="max-gold max-link">success@max.ng</a>, we would love to discuss a solution that works for your business.
								</p>

							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	</div>
)

export default information;