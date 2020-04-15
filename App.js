import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import MyNeighbour from './Components/MyNeighnour';


export default class App extends React.Component {
  render() {
    return (
      <MyNeighbour/>
     
    );
  }
}
/*
export default function App() {
  return (
    <View style={styles.container}>
      <MyNeighbour/>
    </View>
  );
}
*/
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
