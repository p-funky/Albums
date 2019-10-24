/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React from 'react';
import {SafeAreaView} from 'react-native';
import Header from './src/components/Header';
import AlbumList from './src/components/AlbumList';
import {displayName} from './app.json';

const App = () => {
  return (
    <SafeAreaView style={styles.appStyle}>
      <Header headerText={displayName} />
      <AlbumList />
    </SafeAreaView>
  );
};

const styles = {
  appStyle: {
    flex: 1,
  },
};

export default App;
