import { Text, View, Image, TextInput, Button } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import cr7 from './assets/cr7.jpg'
import scoobyDoo from './assets/scooby-doo-movie.jpg'

export default function App() {
  return (
    // <SafeAreaView style={{display: 'flex', justifyContent: 'center', alignItems: 'center', gap: 30, padding: 16}}>
    //   <View>
    //     <Text>CR7</Text>
    //     <Image source={cr7} style={{width: '300', height: '300'}}/>
    //     <Text>personagem daquele jogo de luta </Text>
    //   </View>

    //   <View>
    //     <Text>Scooby Doo 2</Text>
    //     <Image source={scoobyDoo} style={{width: '300', height: '300'}}/>
    //     <Text>Filme onde o Fred é um homem de conteúdo </Text>
    //   </View>

    // </SafeAreaView>
    <SafeAreaView style={{padding: 16}}>
      <View>
        <Text>Nome:</Text>
        <TextInput placeholder='informe seu nome' keyboardType='default'/>
      </View>
      
      <View>
        <Text>Sobrenome:</Text>
        <TextInput placeholder='informe seu nome' keyboardType='default'/>
      </View>
      
      <View>
        <Text>E-mail:</Text>
        <TextInput placeholder='informe seu email' keyboardType='email-address'/>
      </View>
      
      <View>
        <Text>CPF:</Text>
        <TextInput placeholder='informe seu CPF' keyboardType='number-pad'/>
      </View>
      
      <View>
        <Text>Senha:</Text>
        <TextInput placeholder='informe sua senha' secureTextEntry={true}/>
      </View>
      <Button title='Teste' color='green'/>
    </SafeAreaView>
  );
}
