import React, {Component} from 'react'
import {View, Text} from 'react-native'
import {connect} from 'react-redux'

class Cart extends Component{
    render(){
        return(
            <View style={commonStyles.container}>
              <Text></Text>
            </View>
        )
    }
}

const mapStateToProps = state =>{
    console.log('State', state.countReducer.count)
      return {
          count : state.countReducer.count
      }
  }
  
  const mapDispatchToProps = {
         increase,
         decrease
  }

  export default connect(mapStateToProps, mapDispatchToProps)(Cart)