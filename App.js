/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */
import 'react-native-gesture-handler';
import React from 'react';
import { ShowFriendsList } from './src';
import {store} from './src/redux/store';
import {Provider} from 'react-redux';


const App = () => {
  

  return (
    <Provider store={store}>
      <ShowFriendsList/>
    </Provider>
  );
}


     
 


 

export default App;
