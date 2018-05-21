import React, {Component} from 'react';
import styles from './services/mapStyle';

class Map extends Component{
	constructor(props){
		super(props);
		this.state = {
			map: {},
			deliveryMarker: {},
			pickUpMarker: {},
			markers: []
		}
		this.map = {};
		this.marker = {};
		this.markers = [];
		this.deliveryPath = {};
	}

	componentDidMount() {
	    let map = new window.google.maps.Map(document.getElementById('map'), {
	      center: {lat: 6.4372272, lng: 3.4660645999999815},
	      zoom: 15,
	      styles: styles,
	      mapTypeId: 'roadmap',
	      gestureHandling: 'none',
          zoomControl: false
    	});

    	var position = {lat: 6.4372272, lng: 3.4660645999999815}

    	let marker = new window.google.maps.Marker({
    		map: map,
    		position: position,
    		title: 'Initial Position',
    		animation: window.google.maps.Animation.DROP
    	});

    	this.map = map;
    	this.marker = marker;
    }

    componentDidUpdate(){
    	let self = this;
    	if(this.props.changeMapViewPort){
    		//Clear previous markers and polyline path
    		this.marker.setMap(null);
		 	for (var i = 0; i < this.markers.length; i++) {
		 		console.log(this.markers);
          		this.markers[i].setMap(null);
        	}
        	if(Object.keys(this.deliveryPath).length >=1){
	        	this.deliveryPath.setMap(null);
        		
        	}

    		//Set Delivery Marker
    		var deliveryMarker = new window.google.maps.Marker({
    			map: self.map,
    			position: {
	    			lat: this.props.deliveryDetails.lat,
	    			lng: this.props.deliveryDetails.lng
    			},
    			title: 'Delivery',
    			label: 'D',
    			animation: window.google.maps.Animation.DROP
    		});

    		//Set Pickup marker
    		var pickUpMarker = new window.google.maps.Marker({
    			map: self.map,
    			position: {
	    			lat: this.props.pickUpDetails.lat,
	    			lng: this.props.pickUpDetails.lng
    			},
    			title: 'Pickup',
    			label: 'P',
    			animation: window.google.maps.Animation.DROP
    		});

    		//Set Polyline co-ordinates
    		var deliveryCoordinates = [
    			{lat: this.props.pickUpDetails.lat, lng: this.props.pickUpDetails.lng},
    			{lat: this.props.deliveryDetails.lat, lng: this.props.deliveryDetails.lng}
    		];

    		// Define a symbol using SVG path notation, with an opacity of 1.
	        var lineSymbol = {
	          path: 'M 0,-1 0,1',
	          strokeOpacity: 1,
	          scale: 4
	        };

    		var deliveryPath = new window.google.maps.Polyline({
    			path: deliveryCoordinates,
				strokeColor: '#daa520',
				strokeOpacity: 0.5,
				strokeWeight: 0.5,
				icons: [{
					icon: lineSymbol,
					offset: '0',
					repeat: '20px'
				}],
    		});

    		deliveryPath.setMap(this.map);


    		var markers = [deliveryMarker, pickUpMarker];
			var bounds = new window.google.maps.LatLngBounds();
			for (i = 0; i < markers.length; i++) {
			 bounds.extend(markers[i].getPosition());
			}

			this.map.setZoom(this.map.getZoom() - 5); 

    		// this.map.setCenter(bounds.getCenter());

			this.map.fitBounds(bounds);

			this.markers = markers;

			this.deliveryPath = deliveryPath;
    	}
    }

	render(){
		return(
			<div>
				<div className="row map-box" id="overlay">
					<div className="col" style={{height: '65vh'}}>
				        <div id='map'>

				        </div>
					</div>
		      	</div>

		      	<div className="row mobile-hero" style={{backgroundColor: '#333333', height: '24rem'}}>
				        <nav className="navbar navbar-expand-lg navbar-light text-white">
						  <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
						    <span className="navbar-toggler-icon"></span>
						  </button>
						  <a className="navbar-brand" href="/">
						  	<img src={require("./styles/logo_white.png")} alt="logo white" width="45.5rem"/>
						  </a>
						</nav>
					<div className="col p-5">
				        <h1 className="text-white text-center helvetica-n display-5">Get your delivery fee </h1>
					</div>
		      	</div>
			</div>
		)
	}
}

export default Map;