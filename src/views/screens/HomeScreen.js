
import React, { useState, useEffect } from 'react';
import { SafeAreaView, Text, View, ScrollView } from 'react-native';
import { useAuth } from '../../contexts/AuthContext';
import Button from '../components/Button';
import { Button as Butt } from 'react-native-paper';
import { Card, ListItem, Icon } from 'react-native-elements'
import { collection, getDocs } from 'firebase/firestore';
import { db } from '../../../firebase';
// import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

// const Tab = createBottomTabNavigator();


const HomeScreen = ({ navigation }) => {

	const { getSnap, FoodData } = useAuth();

	useEffect(() => {
		console.log("home",FoodData && FoodData.doc );
	}, [])

	

	// const onPress = () => {
	// 	props.navigation.navigate('AddScreen');
	//   };
	return (
		<ScrollView>
			<View style={{ backgroundColor: '#5D5FEE', padding: 23 }}>
        <Text style={{ color: 'white', fontSize: 30, fontWeight: "bold" }}>Food Hope</Text>
      </View>
			<Card>
				<Card.Title>HELLO WORLD</Card.Title>
				<Card.Divider />
				<Card.Image source={require('../../conts/images/biryani.png')} />
				

				<Button
					onPress={() => {
						navigation.navigate('AddScreen');
						console.log('AddScreen pressed');
					}}
					// icon={<Icon name='code' color='#ffffff' />}
					// buttonStyle={{borderRadius: 0, marginLeft: 0, marginRight: 0, marginBottom: 0}}

					title='VIEW NOW' />
			</Card>
			<Card>
				<Card.Title>HELLO WORLD</Card.Title>
				<Card.Divider />
				<Card.Image source={require('../../conts/images/biryani.png')} />
				{/* <Text style={{marginBottom: 10}}>
      The idea with React Native Elements is more about component structure than actual design.
  </Text> */}

				<Button
					// onPress={onPress}
					onPress={() => {
						navigation.navigate('AddScreen');
						console.log('AddScreen pressed');
					}}
					// icon={<Icon name='code' color='#ffffff' />}
					// buttonStyle={{borderRadius: 0, marginLeft: 0, marginRight: 0, marginBottom: 0}}

					title='VIEW NOW' />
			</Card>
			<Card>
				<Card.Title>HELLO WORLD</Card.Title>
				<Card.Divider />
				<Card.Image source={require('../../conts/images/biryani.png')} />
				{/* <Text style={{marginBottom: 10}}>
      The idea with React Native Elements is more about component structure than actual design.
  </Text> */}

				<Button
					// onPress={onPress}
					onPress={() => {
						navigation.navigate('AddScreen');
						console.log('AddScreen pressed');
					}}
					// icon={<Icon name='code' color='#ffffff' />}
					// buttonStyle={{borderRadius: 0, marginLeft: 0, marginRight: 0, marginBottom: 0}}

					title='VIEW NOW' />
			</Card>
			<Card>
				<Card.Title>HELLO WORLD</Card.Title>
				<Card.Divider />
				<Card.Image source={require('../../conts/images/biryani.png')} />
				{/* <Text style={{marginBottom: 10}}>
      The idea with React Native Elements is more about component structure than actual design.
  </Text> */}
				<Button
					// onPress={onPress}
					onPress={() => {
						navigation.navigate('AddScreen');
						console.log('AddScreen pressed');
					}}
					// icon={<Icon name='code' color='#ffffff' />}
					// buttonStyle={{borderRadius: 0, marginLeft: 0, marginRight: 0, marginBottom: 0}}

					title='VIEW NOW' />


			</Card>



		</ScrollView>
	);
};

export default HomeScreen;







































