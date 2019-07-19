// All Utility functions must be listed here
import AsyncStorage from "@react-native-community/async-storage";

export const clipText=(text, limit)=>{
    if(text.length>=limit) {
         text = text.substring(0, limit - 2).concat('. . .')
    }
    return text
}

export const isEmailValid = (email) => {
    let pattern = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
    return pattern.test(String(email).toLowerCase())
}

export const isStringValid = (string) => {
    let pattern = /[^a-zA-Z]/
    return pattern.test(String(string))
}

export const isNumberValid = (num) => {
    let pattern =  /^[0-9]+\d*$/
    return pattern.test(num)
}

export const getToken = async () => {
try {
    const value = await  AsyncStorage.getItem('token')
    console.log(value)
    if(value !== null) {
    return value
    }
} catch(e) {
    return null
}
return null
}

export const setToken = async (token) => {
    try {
        await AsyncStorage.setItem('token', token)
    } catch (e) {
        console.log(e)
    }
}
