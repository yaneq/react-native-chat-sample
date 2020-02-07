import 'react-native-gesture-handler';
import React, {useState} from 'react';
import NavigationContainer from './navigation/navigation';
import {store} from './state/store';
import {Provider} from 'react-redux';
import * as Font from 'expo-font';
import {AppLoading} from 'expo';

const _cacheResourcesAsync = async () => {
  const cacheFonts = await Font.loadAsync({
    'quicksand': require('./assets/fonts/Quicksand-Regular.otf'),
    'quicksand-bold': require('./assets/fonts/Quicksand-Bold.otf'),
  });

  return Promise.all([cacheFonts]);
}
const AppContainer = () => {
  const [ready, setReady] = useState(false);
  if (!ready) {
    console.log('in render')
    return (
      <AppLoading
        startAsync={_cacheResourcesAsync}
        onFinish={() => {console.log('IM READY'); setReady(true)}}
        onError={console.warn}
      />
    );
  }

  console.log('should only be called if ready')
  return (
    <Provider store={store}>
      <NavigationContainer />
    </Provider>
  )
};

export default AppContainer;
