import React, { Component } from 'react';
import AppNavbar from './AppNavbar';
import GoogleMapReact from 'google-map-react';
import FirebaseService from '../services/FirebaseService';
import Lottie from "lottie-react";
import loading from "../loading.json";
const AnyReactComponent = ({ name, id }) => <div align="center">
    <div align="center" ><img height="30" width="30" src="https://img.icons8.com/stickers/100/000000/marker.png" alt={name}/>
    </div>
  <div className='button' to={"/officers/" + id+"/"+name}>{name}</div>
</div>;

var k = 1234;

const defaultProps = {
  center: {
    lat: 23.7066214,
    lng: 90.4090226
  },
  zoom: 10
};


class Home extends Component {
    
  constructor(props){
    super(props);
    this.state = {officers: [], isLoading: true};
  }
  
  componentDidMount = () => {
    k = new URLSearchParams(this.props.location.search).get('key')
    FirebaseService.getAll(k).on("value", this.onDataChange);
  }
  
  componentWillUnmount = () => {
    k = new URLSearchParams(this.props.location.search).get('key')
    FirebaseService.getAll(k).off("value", this.onDataChange);
  }
  
  onDataChange = (items) => {
    console.log(items);
    let officers = [];
    items.forEach(item => {
      let data = item.val();
      officers.push({
        id: item.key,
        key: data.key,
        name: data.name,
        number: data.number,
        lat: data.lat,
        lon: data.lon
      });
    });
  
    this.setState({
      officers: officers,
      isLoading: false
    });
  }

  
  render() {
    const {officers, isLoading} = this.state;

    if (isLoading) {
      return <div height="100" width="100" align="center"><Lottie style={{
        width: 200,
        height: 200,
        marginLeft: - 5
      }}
       loop="true" autoPlay="true" animationData={loading} /></div>;
    }

    const officersList = officers.map(officer => {
      return <AnyReactComponent
      lat={officer.lat}
      lng={officer.lon}
      name={officer.name}
      id={officer.id}
    />
    });

    return (
      <div>
      <AppNavbar k={k}/>
      <div style={{ height: '100vh', width: '100%' }}>
      <GoogleMapReact
        bootstrapURLKeys={{ key: ""}}
        defaultCenter={defaultProps.center}
        defaultZoom={defaultProps.zoom}
      >
        {officersList}
      </GoogleMapReact>
    </div>
    </div>
    );
  }
}

export default Home;