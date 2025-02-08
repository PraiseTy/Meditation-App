import React from 'react'
import {SafeAreaView} from 'react-native'
import {LinearGradient} from "expo-linear-gradient";

const AppGradient = ({ children, colors} : {children:any; colors: [string, string, ...string[]] }) => {
    return (
    <LinearGradient style={{ flex: 1 }} colors={colors}>
        <SafeAreaView className="flex-1 mx-5 my-12">
            {children}
        </SafeAreaView>
    </LinearGradient>
    )
}
export default AppGradient;
