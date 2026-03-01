import React, { useState } from 'react'
import { Text, View } from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context'
import { Button, Input, Paragraph } from 'tamagui'

export default function SignupScreen() {

  const [fullName, setFullName] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [retypePassword, setRetypePassword] = useState('')


  // const router = useRouter()

  return (
      <SafeAreaView className="flex-1 bg-white px-4">
          <View className="flex-1 pb-5">
              <Text className="text-[40px] font-bold leading-[42px] mb-10">
                  Đăng ký tài khoản mới
              </Text>
              <View className="h-[40vh] flex flex-col justify-between">
                  <Paragraph fontWeight='bold'>Tên đầy đủ</Paragraph>
                  <Input
                      theme="surface1"
                      flex={1}
                      marginTop={5}
                      marginBottom={10}
                      placeholder={'Nhập tên đầy đủ'}
                      value={fullName}
                      onChange={(e) => setFullName(e.target.value)}
                  />
                  <Paragraph fontWeight='bold'>Email</Paragraph>
                  <Input
                      theme="surface1"
                      flex={1}
                      marginTop={5}
                      marginBottom={10}
                      placeholder={'Nhập email'}
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                  />
                  <Paragraph fontWeight='bold'>Mật khẩu</Paragraph>
                  <Input
                      theme="surface1"
                      flex={1}
                      marginTop={5}
                      marginBottom={10}
                      type='password'
                      placeholder={'Nhập mật khẩu'}
                      value={password}
                      onChange={(e) => setPassword(e.target.value)}
                  />
                  <Paragraph fontWeight='bold'>Nhập lại mật khẩu</Paragraph>
                  <Input
                      theme="surface1"
                      flex={1}
                      marginTop={5}
                      type='password'
                      placeholder={'Nhập lại mật khẩu'}
                      value={retypePassword}
                      onChange={(e) => setRetypePassword(e.target.value)}
                  />
              </View>
              <Button backgroundColor='#1677FF' marginTop={30}>
                  <Button.Text color='#fff' fontWeight={700} $group-btn-hover={{ color: 'red'}}>
                      Đăng ký
                  </Button.Text>
              </Button>
          </View>
      </SafeAreaView>
)
}