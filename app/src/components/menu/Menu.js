import React, {Component} from 'react';
import {Text, View} from 'react-native';
import EStyleSheet from 'react-native-extended-stylesheet';
import { Colors } from '../../../utils/values/Colors';

export default class Menu extends Component{

constructor(props) {
    super(props);
        this.state = {
            name: 'Kiran',
        }
    }

  render() {
    return (
      <View style={styles.container}>
        <Text>Welcome! {this.state.name}</Text>
      </View>
    );
  }
}

const styles = EStyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 39,
    backgroundColor: Colors.primary,
    paddingHorizontal: 25,
  },

});