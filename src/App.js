import React, { Component } from 'react';
import axios from 'axios';
import NavBar from './components/NavBar';
import PricingBox from './components/PricingBox';	
import Information from './components/Information';	
import Footer from './components/Footer';	
import Map from './Map';

class App extends Component {
	constructor(props){
		super(props);
		this.state = {
			pickUp: '',
			delivery: '',
			loading: false,
			deliveryFee: 0.00,
			pickUpDetails: {},
			deliveryDetails: {},
			changeMapViewPort: false,
			error: false,
			bypass: false
		}

		this.handleChange = this.handleChange.bind(this);
		this.notComplete = this.notComplete.bind(this);
		this.getCoordinates = this.getCoordinates.bind(this);
		this.getEstimate = this.getEstimate.bind(this);
		this.handleSubmit = this.handleSubmit.bind(this);
	}

	handleChange(e){
		this.setState({[e.target.name]: e.target.value});
		this.getCoordinates(e);
	}

	handleSubmit(e){
		e.preventDefault();
		if(this.state.pickUp !== '' && this.state.delivery !==''){
			this.setState({loading: true});
			this.getEstimate();
		}
	}

	notComplete(){
		if(this.state.pickUp==='' || this.state.delivery===''){
			return true;
		}

		if(this.state.loading===true){
			return true;
		}

		return false;
	}

	getCoordinates({target}){
		var options = {
			componentRestrictions: {country: 'ng'}
		};

		const dropdown = new window.google.maps.places.Autocomplete(target, options);

		dropdown.addListener('place_changed', (event)=>{
			const place = dropdown.getPlace();
			const lat = place.geometry.location.lat();
			const lng = place.geometry.location.lng();

			var location = place.geometry.location.toString();

			if(target.name==='pickUp'){
				this.setState({
					pickUpDetails: {
						lat: lat,
						lng: lng,
						place_id: place.place_id,
						location: location,
						viewport: place.geometry.viewport
					},
					[target.name]: place.formatted_address
				});
				return;
			}

			if(target.name==='delivery'){
				this.setState({
					deliveryDetails: {
						lat: lat,
						lng: lng,
						place_id: place.place_id,
						location: location,
						viewport: place.geometry.viewport
					},
					[target.name]: place.formatted_address
				});
			}
		});
	}
	
	getEstimate(){
		this.setState({changeMapViewPort: false});
		this.setState({error: false});

		axios.post('https://sandbox.max.ng/v1/pricings/estimate', 
			{
				pickup: {
					lat: this.state.pickUpDetails.lat,
					lng: this.state.pickUpDetails.lng
				},
				delivery: {
					lat: this.state.deliveryDetails.lat,
					lng: this.state.deliveryDetails.lng
				},
				service_id: 'e6f9a0b7-8f03-431f-a3da-7fbc914bbb72'
			},
			{
				headers: {
					'Content-Type': 'application/json',
					'Authorization': 'pk_0908a79845631514605dec9eaf0457c2d99454cba239610e1c7527a20b1a9c9f'
				}
			},
		)
		.then((response)=>{
			this.setState({loading: false});
			this.setState({deliveryFee: response.data.data.delivery_fee});
			this.setState({changeMapViewPort: true});
			setTimeout(()=>{
				this.setState({changeMapViewPort: false})
			}, 1000)
		})
		.catch((e)=>{
			this.setState({loading: false});
			this.setState({error: true});
			console.log(e.response);
		})
	}

	render(){
		return(
			<div>
				<NavBar/>
				<Map deliveryDetails={this.state.deliveryDetails} pickUpDetails={this.state.pickUpDetails} changeMapViewPort={this.state.changeMapViewPort}/>
				<PricingBox handleChange={this.handleChange} pickUp={this.state.pickUp} delivery={this.state.delivery} notComplete={this.notComplete} handleSubmit={this.handleSubmit} loading={this.state.loading} deliveryFee={this.state.deliveryFee} error={this.state.error}/>
				<div className="wrapper">
					<Information/>
				</div>
				
				<Footer/>
			</div>
		)
	}
}

export default App;
