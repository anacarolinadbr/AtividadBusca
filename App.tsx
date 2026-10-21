import { StyleSheet, View } from 'react-native';
import Busca from './components/Busca';

export default function App() {
  return (
    <View style={styles.container}>
     <Busca onComprar={() => alert("Produto comprado!")}/>    
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFFFFF',
    padding: 16,
  },
});