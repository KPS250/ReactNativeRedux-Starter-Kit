import React, {Component, Fragment} from 'react'
import {SafeAreaView, StatusBar, Text, View, TouchableOpacity} from 'react-native'
import { Actions } from 'react-native-router-flux'
import { Strings } from '../../../utils/values/Strings'
import { Colors } from '../../../utils/values/Colors'
import commonStyles from '../../components/commons/styles/commonStyles'
import  styles  from './styles/authLoadingStyles'
import AppBar from '../commons/AppBar';
import SafeArea from '../commons/SafeArea';

export default class AuthLoading extends Component{

  render() {
    return (
      <SafeArea>
          <View style={styles.container}>
          <AppBar 
              mode={1}
              title={'Home'}
              hideOptions={false}
              leftClick={()=>alert('Left')}
              rightClick={()=>alert('Right')}
            />
            <Text>React Native</Text>
            <Text>Starter Kit</Text>
            <TouchableOpacity onPress={()=>Actions.login()}>
              <Text>Next</Text>
            </TouchableOpacity>
          </View>
      </SafeArea>
    )
  }
}