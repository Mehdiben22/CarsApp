
import { StyleSheet, View,  } from 'react-native';
import { StatusBar } from 'expo-status-bar';
import Carslist from './assets/Carslist';
import Header from './assets/Header';

export default function App() {
  
  return (
    <View style={styles.container}>
      <Header/>
      <Carslist/>
        <StatusBar style="auto"/>  
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
    
}
);
