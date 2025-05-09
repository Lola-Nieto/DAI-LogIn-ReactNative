import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import { TextInput, Button, StyleSheet, Text, View } from 'react-native';
import { StatusBar } from 'expo-status-bar';



  export default function App() {
    const handleVerificarLogIn = (mail, password) => {
    const nombre = conseguirNombre(mail);
      if(nombre == password) ? Alert.alert('Inicio de sesión exitoso') : Alert.alert('Contraseña incorrecta') 
    }
    const conseguirNombre = (text) => {
      const info = mail.split('@').map((word) => word);
      const nombre = info[0];
      return nombre
    }
  
    const [mail, setMail] = useState('');
    const [password, setPassword] = useState('');
    const imagenURL = ;
  return (

    <View style={styles.container}>
      
      <StatusBar style="auto" />


      <TextInput
        placeholder="Mail"
        onChangeText={setNombre}
        style={styles.input} 
      />
      <TextInput
        placeholder="Contraseña"
        onChangeText={setPassword}
        style={styles.input} 
      />
      <Button 
        style={styles.button} 
        title="Iniciar sesión" 
        onPress={handleVerificarLogIn} />
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  input: {
    borderBottomWidth: 1, 
    marginBottom: 10,
  }, 
  button: {

  }
});

