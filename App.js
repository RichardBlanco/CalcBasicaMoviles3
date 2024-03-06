import { useState, useEffect } from 'react';
import { Text, View, Image } from 'react-native';
import { styles, styleText, styleInput} from '../calcBasica/assets/styles/styles1.jsx';
import Footer from './components/footer.jsx';
import { TextInput } from 'react-native-web';


export default function App() {
  // Definir los estados para los datos capturados, con sus respectivos metodos de modificacion
  const [value1, setValue1] = useState('');
  const [value2, setValue2] = useState('');
  const [result, setResult] = useState('');
  const [operation, setOperation] = useState('');

  return (
    <View style={styles.containerMain}>
      <View style={[styles.container1, {flex:1,backgroundColor:'white'}]}> 
      <Text style={styleText.colora}>CALCULADORA</Text>
      </View>

    <View style={[styles.container1, {flex:2,backgroundColor:'white'}]}>
   
      <Image
      source={require('./assets/images/img/calc.jpg')}
      style={{width:'100%', height:'100%',resizeMode:'contain', borderRadius:10}}
      />

      </View>
    <View style={styles.container2}>
      <Text style={styleText.colora}>Valor 1</Text>
      <TextInput 
        placeholder='Ingrese valor 1'
        style={styleInput.input}
        onChangeText={value1 => setValue1(value1)}
        value={value1}
      />
      <Text style={styleText.colora}>Valor 2</Text>
        <TextInput 
        placeholder='Ingrese valor 2'
        style={styleInput.input}
        onChangeText={value2 => setValue1(value2)}
        value={value2}
      />
    </View>

    <View style={styles.container3}>
      <Footer/>
    </View>

    </View>
  );
}



