import React, {Component} from 'react'
import {Text, View, TouchableOpacity} from 'react-native'
import {connect} from 'react-redux'
import { increase, decrease, toggleLoading, toggleInternet, toggleApiError } from '../../../src/actions/Actions'
import commonStyles from '../commons/styles/commonStyles'
import  styles  from './styles/loginStyles'
import { Strings } from '../../../utils/values/Strings'
import { Colors } from '../../../utils/values/Colors'
import AppBar from '../commons/AppBar'
import { Actions } from 'react-native-router-flux'
import BusyError from '../commons/errors/BusyError';
import SafeArea from '../commons/SafeArea';

class Login extends Component{

constructor(props) {
    super(props)
}
    
  render() {
    return (
        <SafeArea>
          <View style={styles.container}>
            <AppBar
              mode={2}
              title={'Login'}
              hideOptions={false}
              leftClick={()=>Actions.pop()}
              rightClick={()=>alert('Right')}
            />
            <BusyError />

            <Text>Count : {this.props.countReducer.count}</Text>
            <TouchableOpacity onPress={this.props.increase }>
                <Text>Increase</Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={this.props.decrease }>
                <Text>Decrease</Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={this.props.toggleApiError }>
                <Text>Toggle</Text>
            </TouchableOpacity>
          </View>
            
        </SafeArea>
    )
  }
}

const mapStateToProps = state =>{
    return {
      countReducer : state.countReducer,
      //busyErrorReducer: state.busyErrorReducer,
    }
}

const mapDispatchToProps = {
  increase,
  decrease,
  toggleLoading,
  toggleInternet,
  toggleApiError
}

export default connect(mapStateToProps, mapDispatchToProps)(Login)