import React from 'react';
import {Link} from 'react-router';

class App extends React.Component {
  componentWillMount() {
    console.log('fuck berlin');
  }
  render() {
    return (
      <div>
        <h1>Wellcome to Dagdy</h1>
        <ul>
          <li><Link to="/">Home</Link></li>
          <li><Link to="/about">About</Link></li>
          <li><Link to="/hola">Hola express</Link></li>
        </ul>
        {this.props.children}
      </div>
    );
  }
}

export default App;
