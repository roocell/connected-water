
import React from 'react';
import { GoogleMap, Marker, SearchBox } from "react-google-maps";

class GoogleMapComponent extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      markers: [{
      position: {
        lat: 45.4181729,
        lng: -75.7232758,
      },
      key: "Ottawa",
      defaultAnimation: 2,
      }],
       likesCount : 0

    };
//    this.onLike = this.onLike.bind(this);
  }
/*
  onLike () {
    let newLikesCount = this.state.likesCount + 1;
    this.setState({likesCount: newLikesCount});
  }
*/
  render() {
    return (
      <div>

    <section style={{height: "100%"}}>
      <GoogleMap containerProps={{
          style: {
            height: "100%",
          },
        }}
        defaultZoom={15}
        defaultCenter={{lat: 45.4181729, lng: -75.7232758 }}
      >
        {this.state.markers.map((marker, index) => {
          return (
            <Marker
              {...marker}
               />
          );
        })}
      </GoogleMap>
    </section>

      </div>
    );
  }

}

export default GoogleMapComponent;
