import { View, Text, ScrollView, StyleSheet, Animated, Image } from 'react-native'
import React, { useState } from 'react'
import Input from '../components/Input';
import { PanGestureHandler } from 'react-native-gesture-handler';
import Swiper from 'react-native-swiper';


export default function AddScreen() {

  const [selectedIndex, setSelectedIndex] = useState(0);
  const images = [
    require('../../conts/images/biryani.png'),
    require('../../conts/images/sambar.png'),
    require('../../conts/images/biryani.png'),
    require('../../conts/images/sambar.png'),
    require('../../conts/images/biryani.png'),
  ];


  onIndexChanged = (index) => {
    setSelectedIndex(index);
  };
  return (
    <>
      <View style={{ backgroundColor: '#5D5FEE', padding: 23 }}>
        <Text style={{ color: 'white', fontSize: 30, fontWeight: "bold" }}>Add Food Details</Text>
      </View>
      <ScrollView>
        <View>
          <View style={{height: 220}}>
            <Swiper onIndexChanged={onIndexChanged}>
              {images.map((image, index) => (
                <View key={index}>
                  <Image source={image} style={{width: "100%", height: 180}} />
                </View>
              ))}
            </Swiper>
          </View>

          <View style={{ marginVertical: 20 }}>
            <Input
              onChangeText={text => handleOnchange(text, 'email')}
              onFocus={() => handleError(null, 'email')}
              iconName="email-outline"
              label="Email ID"
              placeholder="Enter your email address"
            />
            <Input
              onChangeText={text => handleOnchange(text, 'email')}
              onFocus={() => handleError(null, 'email')}
              iconName="email-outline"
              label="Email ID"
              placeholder="Enter your email address"
            />
            <Input
              onChangeText={text => handleOnchange(text, 'email')}
              onFocus={() => handleError(null, 'email')}
              iconName="email-outline"
              label="Email ID"
              placeholder="Enter your email address"
            />
            <Input
              onChangeText={text => handleOnchange(text, 'email')}
              onFocus={() => handleError(null, 'email')}
              iconName="email-outline"
              label="Email ID"
              placeholder="Enter your email address"
            />

          </View>
        </View>
      </ScrollView>
    </>
  )
  const summa = StyleSheet.create({
    card: {
      backgroundColor: "rgb(230,230,230)",
      width: "100%",
      height: "100%",
      borderRadius: 5,
      position: 'absolute',
      borderWidth: 1.5,
      borderColor: 'black',
      alignItems: 'center',
      justifyContent: 'center'

    }
  });
}
