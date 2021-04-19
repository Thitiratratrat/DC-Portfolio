import React from 'react';
import 'react-native-gesture-handler';
import {PersistGate} from 'redux-persist/lib/integration/react';
import {Provider} from 'react-redux';
import {store, persistor} from './src/redux/store';
import AppNavigation from './AppNavigation';

const App: () => React$Node = () => {
  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <AppNavigation />
      </PersistGate>
    </Provider>
  );
};

export default App;
