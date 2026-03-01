import { Text, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

export default function HomeScreen() {
  return (
    <SafeAreaView>
      <View>
        <Text className='text-[20px] text-center'>Home screen</Text>
      </View>
    </SafeAreaView>
  );
}