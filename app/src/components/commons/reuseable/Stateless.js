import React from 'react';
import { View, Text} from "react-native";
import EStyleSheet from 'react-native-extended-stylesheet';

export default BottomButton = ({label}) => {
    return (
        <View>
            <Text>{label}</Text>
        </View>
    )
}

const styles = EStyleSheet.create({
    
});