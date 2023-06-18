import {configureStore} from '@reduxjs/toolkit';
import {Provider} from 'react-redux';
import store from './redux/store';
import {NavigationContainer} from '@react-navigation/native';
import {AppNavigator} from './nav';

export const App = () => {
  return (
    <Provider store={store}>
      <NavigationContainer>
        <AppNavigator />
      </NavigationContainer>
    </Provider>
  );
};
