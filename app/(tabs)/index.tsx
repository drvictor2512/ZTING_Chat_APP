import { useRouter } from 'expo-router';
import { Text, TouchableOpacity, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

export default function HomeScreen() {

  const router = useRouter()

  return (
    <SafeAreaView>
      <View className='flex flex-col'>
        <Text className='text-[20px] text-center'>Home screen</Text>
        <TouchableOpacity className='w-full bg-[#1677FF] p-4 rounded-lg'>
          <Text className='text-white text-center' onPress={() => router.push('/(auth)/login')}>
            Sign out
          </Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
}