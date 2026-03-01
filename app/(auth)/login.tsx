import { Link, useRouter } from 'expo-router'
import React, { useState } from 'react'
import { Text, View } from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context'
import { Button, Input, Paragraph } from 'tamagui'

export default function LoginScreen() {
    const [email, setEmail] = useState<string>('')
    const [password, setPassword] = useState('')

    const router = useRouter()

    return (
        <SafeAreaView className="flex-1 bg-white px-4">
            <View className="flex-1 pb-5">
                <Text className="text-[40px] font-bold leading-[42px] mb-10">
                    Đăng nhập vào tài khoản của bạn
                </Text>
                <View className="h-[40vw] flex flex-col justify-between">
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
                </View>
                <Paragraph size="$3" fontWeight="800" color='#1677FF' textAlign='right' marginTop={5} marginBottom={5}> 
                    <Link href='/(auth)/forgotpasword' className="font-bold text-[#1677FF]">
                        Quên mật khẩu?
                    </Link>
                </Paragraph>
                <Button backgroundColor='#1677FF' marginTop={20} marginBottom={20}>
                    <Button.Text color='#fff' $group-btn-hover={{ color: 'red' }} fontWeight='bold'>
                        Đăng nhập
                    </Button.Text>
                </Button>
                <View className="flex-row justify-center">
                    <Text>Bạn chưa có tài khoản?</Text>
                    <Link
                        href='/(auth)/signup'
                        className="font-bold text-[#1677FF]"
                    >
                        {' '}Tạo tài khoản ngay!
                    </Link>
                </View>
            </View>
        </SafeAreaView>
    )
}