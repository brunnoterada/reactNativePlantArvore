import React,{ useState } from 'react';
import {
  SafeAreaView, 
  Text, 
  Image, 
  View,
  TouchableOpacity, 
  StyleSheet,
  Dimensions
} from 'react-native';

import {Feather} from '@expo/vector-icons';
import wateringImg from '../assets/watering.png';
import fonts from '../styles/fonts';
import colors from '../styles/colors';
import { useNavigation } from '@react-navigation/native';

export function Welcome(){
  const navigation = useNavigation();

  function handleStart(){
    navigation.navigate('UserIdentification')

  }

  return (
    <SafeAreaView style={styles.container}>
      <View style = {styles.wrapper}>
        <Text style={styles.title}>
          Abra seus  {'\n'}chamados de forma {'\n'}  mais intuitiva
        </Text>
      
        <Image source={wateringImg} style={styles.image} resizeMode = "contain"/>

            
        <Text style={styles.subtitle}>
          Com esse app conseguimos solucionar seus problemas com mais agilidade.
        </Text>
        <TouchableOpacity 
        style={styles.button}
        onPress={handleStart}
        >
          <Feather 
            name="chevron-right"
            style={styles.buttonIcon}
          />
        </TouchableOpacity> 
      </View>
    </SafeAreaView>
  )
} 
const styles = StyleSheet.create({
  container: {
    flex: 1,
    
  },
  wrapper:{
    flex:1,
    alignItems: 'center',
    justifyContent: 'space-around',
    paddingHorizontal:20,
  },
  title: {
    fontSize: 28,
    textAlign: 'center',
    color: colors.heading,
    marginTop:38,
    fontFamily: fonts.heading,
    lineHeight:34,

  },
  subtitle: {
    textAlign: 'center',
    fontSize:18,
    paddingHorizontal:20,
    color: colors.heading,
    fontFamily:fonts.text,
  },

  image: {
    height: Dimensions.get('window').width * 0.7
  },
  button:{
    backgroundColor: colors.green,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius:16,
    marginBottom:10,
    height: 56,
    width:56,

  },
  buttonIcon:{
    color:colors.white,
    fontSize: 32,
  },


})