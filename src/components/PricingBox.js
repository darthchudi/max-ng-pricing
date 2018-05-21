import React, {Component} from 'react';
class PricingBox extends Component{
	render(){
		return(
			<div className="row">
				<div className="col">
					<div className="card mx-auto shadow-lg border-0 pricing-box" style={{width: "40%"}}>
						<div className="card-body">
							<h1 className="display-1 text-center">
								<span style={{fontSize: '3rem'}} className="naira naira-alt">₦ </span>   
								<span className="helvetica-n">	
									{`${this.props.deliveryFee.toLocaleString(undefined, {minimumFractionDigits: 2})}`} 
								</span>
							</h1>
							
							{
								this.props.error ?  (
									<div className="alert alert-danger" role="alert">
									  The distance of your order exceeds the maximum distance that can be travelled by a champion. Consider entering a shorter pickup or delivery address.
									</div>
								) : ''
							}
							
							<form className="text-center ml-3 mt-4" onSubmit={this.props.handleSubmit} action="POST">
								<input type="text" name="pickUp" placeholder="Pickup Address" className="p-1 w-100 mb-4" value={this.props.pickUp} onChange={this.props.handleChange} id="input"/>

								<input type="text" name="delivery" placeholder="Delivery Address" className="p-1 w-100" value={this.props.delivery} onChange={this.props.handleChange} />

								<input type="submit" placeholder="Delivery Address" className="p-2 mt-4 w-100 btn btn-primary mb-2" value={this.props.loading ? "Calculating...": "Get Pricing"} disabled={this.props.notComplete()} onClick={this.props.handleSubmit}/>
								<small className="mt-2">Estimates are only valid for Lagos addresses.</small>
							</form>
						</div>
					</div>
				</div>
			</div>
		)
	}
}

export default PricingBox;