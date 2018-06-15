import React, { Component } from 'react';
import './app.css';
import Users from './users/users.component';
import Loader from './shared/loader/loader.component';

class App extends Component {
  state = {
    loading: true,
  };

  componentDidMount() {
    setTimeout(() => this.setState({ loading: false }), 3000);
  }

  render() {
    return (
      <div className="app__container">
        {this.state.loading && <Loader />}
        <Users />
      </div>
    );
  }
}

export default App;
