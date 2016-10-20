import React from 'react';
import styles from './mainmap.css';

class MainMap extends React.Component {
  componentDidMount() {
    this.map = new google.maps.Map(
      this.container,
      {
        center: {lat: -34.397, lng: 150.644},
        scrollwheel: false,
        zoom: 8
      }
    );
    // google.maps.event.trigger(this.map, "resize");
  }
  render() {
    return (
      <div className={styles.container}>
        <div className={styles.map} ref={(ref) => this.container = ref}></div>
      </div>
    )
  }
}

export default MainMap;
