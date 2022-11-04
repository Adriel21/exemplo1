import {SafeAreaView, View, Text,  StatusBar, Button} from "react-native";
import estilos from "./estilos";

const App = () => {
  return (
    <SafeAreaView style={estilos.container}>
       <StatusBar barStyle="default"/> 
    <View style={estilos.um}> 
      <Text style={estilos.titulo}>React Native</Text>
      </View>
    
     
      <View style={estilos.dois}> 
        <Text style={estilos.subtitulo}>Trabalhando com desenvolvimento de apps</Text>
      </View>
      <Button title="Toca aqui!" />
    </SafeAreaView>
  );
}





export default App;
