import {View, Text, Pressable} from 'react-native'
import React, {useContext} from 'react'
import AppGradient from "@/components/AppGradient";
import {AntDesign} from "@expo/vector-icons";
import {router} from "expo-router";
import CustomButton from "@/components/CustomButton";
import {TimerContext} from "@/context/TimerContext";

const AdjustMeditationDuration = () => {
    const { setDuration } = useContext(TimerContext)
    const handlePress = (duration: number) => {
        setDuration(duration);
        router.back();
    }
    return (
        <View className='flex-1'>
            <AppGradient colors={['#161b2e', '#0a4d4a', '#766e67']}>
                <Pressable onPress={() => router.back()} className='absolute top-5 left-2 z-10'>
                    <AntDesign name="leftcircleo" size={50} color="white"/>
                </Pressable>
                <View className='justify-center h-4/5'>
                    <Text className='text-center font-bold text-3xl text-white mb-8'>Adjust your meditation duration</Text>
                    <View>
                        <CustomButton onPress={()=> handlePress(10)} title='10 seconds' containerStyle='mb-5'/>
                        <CustomButton onPress={()=> handlePress(5 * 60)} title='5 minutes' containerStyle='mb-5'/>
                        <CustomButton onPress={()=> handlePress(10 * 60)} title='10 minutes' containerStyle='mb-5'/>
                        <CustomButton onPress={()=> handlePress(15 * 60)} title='15 minutes' containerStyle='mb-5'/>
                    </View>
                </View>
            </AppGradient>

        </View>)
}
export default AdjustMeditationDuration;
