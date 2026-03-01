import { Link } from 'expo-router'
import React from 'react'
import { Text, TouchableOpacity, View } from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context'

const WelcomeScreen = () => {
  return (
    <SafeAreaView>
      <View className=" w-full h-full flex-column items-center justify-center">
        <Text className="text-[30px] mt-4">Welcome</Text>
        <View className="w-full h-[20%] justify-between mt-8 px-5">
          <TouchableOpacity className="w-full bg-[#1677FF] p-4 rounded-lg">
            <Link href="/(auth)/login" className="text-white text-center text-lg">
              Đăng nhập
            </Link>
          </TouchableOpacity>
          <TouchableOpacity className="w-full bg-[#1677FF] p-4 rounded-lg">
            <Link
              href={{ pathname: "/signup", params: { step: 1 } }}
              className="text-white text-center text-lg"
            >
              Đăng ký
            </Link>
          </TouchableOpacity>
        </View>
      </View>
    </SafeAreaView>
  )
}

export default WelcomeScreen