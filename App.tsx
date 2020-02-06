import 'react-native-gesture-handler';
import React from 'react';
import NavigationContainer from './navigation/navigation';
import {store} from './state/store';
import {Provider} from 'react-redux';

const AppContainer = () => (
  <Provider store={store}>
    <NavigationContainer />
  </Provider>
);

export default AppContainer;
