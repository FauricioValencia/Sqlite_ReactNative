/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, { Component } from 'react';
import { Platform, StyleSheet, Text, View } from 'react-native';

var SQLite = require('react-native-sqlite-storage')

const instructions = Platform.select({
  ios: 'Press Cmd+R to reload,\n' + 'Cmd+D or shake for dev menu',
  android:
    'Double tap R on your keyboard to reload,\n' +
    'Shake or press menu button for dev menu',
});
export default class App extends Component {
  constructor(props) {
    super(props);
    console.log('contructor')
    dbMaster = SQLite.openDatabase({ name: 'my', createFromLocation: '~my.db' });

    dbMaster.transaction((db) => {

      db.executeSql(`insert into admisiones (id,name,consecutivo, prefijo,procedimiento, fechaYear, fechaMonth, fechaDay) values (2,"fauricio", "asd", "cp", "proceso", "2018", "08", "30");`)//realizar insersiones

      db.executeSql('SELECT * FROM "admisiones"', [], (db, results) => {
        console.log('exito')
        let len = results.rows.length;
        console.log(len)

        for (let i = 0; i < len; i++) {
          let row = results.rows.item(i);
          console.log(`Employee name: ${row.name} id: ${row.id}`);
        }
      })
    })


  
  }

componentDidMount() {
  console.log('didmount')
}
componentWillMount() {
  console.log('will')
}



render() {
  return (
    <View style={styles.container}>
      <Text style={styles.welcome}>Welcome to React Native!</Text>
      <Text style={styles.instructions}>To get started, edit App.js</Text>
      <Text style={styles.instructions}>{instructions}</Text>
    </View>
  );
}
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
});
