import React from 'react';
import StackNavigationList from './src/Navigation/StackNavigationList';
import store from './src/Redux/store';
import {Provider} from 'react-redux';

const App = () => {
  return (
    <Provider store={store}>
      <StackNavigationList />
    </Provider>
  );
};

export default App;
