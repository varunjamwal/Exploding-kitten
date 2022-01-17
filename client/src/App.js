import React, { Component } from 'react';
import { BrowserRouter as Router,Routes, Route } from 'react-router-dom';
import { Provider } from 'react-redux';

import configureStore from './redux/store';
import Login from './Components/Login';
import Home from './Components/HomePage';
import LeaderBoard from './Components/LeaderBoard';

const store = configureStore();

class App extends Component {
  render() {
    return (
      <Provider store={store}>
      <><Router>
        <Routes>
        <Route exact path='/' element={<Login />}></Route>
          <Route exact path='/home' element={<Home />}></Route>
          <Route exact path='/score' element={<LeaderBoard />}></Route>
        </Routes>
      </Router></>
      </Provider>
    );
  }
}

export default App;
