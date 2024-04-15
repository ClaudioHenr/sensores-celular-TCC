import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import AcceleratorTest from './src/components/Accelerator';
import GyroscopeTest from './src/components/Gyroscope';

export default function App() {
  return (
    <View style={styles.container}>
        {/* <GyroscopeTest/> */}
        <AcceleratorTest/>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'grey',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
