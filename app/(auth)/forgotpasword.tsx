import { useState } from 'react'
import { Text, View } from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context'
import { Button, Input, Paragraph } from 'tamagui'

export default function ForgotPasswordScreen() {
    const [email, setEmail] = useState<string>('')

    return (
        <SafeAreaView className='px-4'>
            <Text className="text-[40px] font-bold leading-[42px] mb-10">
                Quên mật khẩu
            </Text>
            <View className='w-full h-[10vh]'>
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
            </View>
            <Button backgroundColor='#1677FF' marginTop={20} marginBottom={20}>
                <Button.Text color='#fff' $group-btn-hover={{ color: 'red' }} fontWeight='bold'>
                    Gửi mã xác nhận về email
                </Button.Text>
            </Button>
        </SafeAreaView>
    )
}