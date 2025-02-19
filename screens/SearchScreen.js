import { useState, useEffect } from 'react';
import {Image, StyleSheet, TextInput, Button, Text, View} from 'react-native';
import { SafeAreaProvider, SafeAreaView } from 'react-native-safe-area-context';

export default function SearchScreen (){
    const [pokeimage, setpokeimage] = useState("");
    const [pokemonName, setpokemonName] = useState("");
    const [Name, setName] = useState("");

    const getPokemon = async() =>{
    try{
        const response = await fetch(process.env.EXPO_PUBLIC_API_KEY+Name);
        const json= await response.json();
        setpokeimage(json.sprites.front_default)
        setpokemonName(json.name)
        console.log(json.sprites.front_default)
    }catch(error){
        console.log(error)
    }
    };
    
    return(
        
            <View style={styles.container}>
            <Image
                src={pokeimage}
                style={{width: 300, height: 300}}
                />
                <Text>{pokemonName}</Text>
                <TextInput
                placeholder="Search pokemon..."
                value={setName}
                onChangeText={setName}
                />
                <Image
                source={pokeimage}
                />
                <Button
                onPress={getPokemon}
                title="get pokemon"
                />
        </View>
        
    )
}
const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#fff',
      alignItems: 'center',
      justifyContent: 'center',
    },
  });
  /*
    <SafeAreaProvider>
            <SafeAreaView style={styles.container}>
            <Image
                src={pokeimage}
                style={{width: 300, height: 300}}
                />
                <Text>{pokemonName}</Text>
                <TextInput
                placeholder="Search pokemon..."
                value={setName}
                onChangeText={setName}
                />
                <Image
                source={pokeimage}
                />
                <Button
                onPress={getPokemon}
                title="get pokemon"
                />
        </SafeAreaView>
        </SafeAreaProvider>
  */