import React, { Component, useEffect } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Header from './Header';
import { connect } from 'react-redux';
import * as actions from '../actions';

const Landing = () => {
  return <h2>Landing Component</h2>;
};
const Dashboard = () => {
  return <h2>Dashboard Component</h2>;
};

class App extends Component {
  // useEffect(() => {
  //   actions.fetchUser();
  // }, []);
  componentDidMount() {
    this.props.fetchUser();
  }
  render() {
    return (
      <div className="container">
        <BrowserRouter>
          <div>
            <Header />
            <Routes>
              <Route path="/" element={<Landing />} />
              <Route path="/dashboard" element={<Dashboard />} />
            </Routes>
          </div>
        </BrowserRouter>
      </div>
    );
  }
}

export default connect(null, actions)(App);
