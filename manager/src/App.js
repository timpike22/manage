import React, { Component } from 'react';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import firebase from 'firebase';
import ReduxThunk from 'redux-thunk';
import reducers from './reducers';
import Router from './Router';

class App extends Component {
  componentWillMount() {
    const config = {
      apiKey: 'AIzaSyAM0hZF6MPZBWlgDf43s_8P8Ay9qMhALxk',
      authDomain: 'manager-9bc09.firebaseapp.com',
      databaseURL: 'https://manager-9bc09.firebaseio.com',
      projectId: 'manager-9bc09',
      storageBucket: 'manager-9bc09.appspot.com',
      messagingSenderId: '1012977795199'
    };

  firebase.initializeApp(config);
  }

  render() {
    const store = createStore(reducers, {}, applyMiddleware(ReduxThunk));

    return (
      <Provider store={store}>
        <Router />
      </Provider>
    );
  }
}

export default App;
