
import React, { useState, useEffect } from 'react';
import { SafeAreaView, Text, View, ScrollView, FlatList } from 'react-native';
import { useAuth } from '../../contexts/AuthContext';
import Button from '../components/Button';
// import { Button as Butt } from 'react-native-paper';
import { Card, ListItem, Icon } from 'react-native-elements'
// import { collection, DocumentSnapshot, getDocs, QueryDocumentSnapshot } from 'firebase/firestore';
// import { db } from '../../../firebase';
// import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

// const Tab = createBottomTabNavigator();


const HomeScreen = ({ navigation }) => {

	const { getSnap, fetchFood } = useAuth();
	const [FoodData, setFoodData] = useState([]);
	const {images} = useAuth();

	try {
		useEffect(async () => {
			setFoodData([]);

			const querySnapshot = await fetchFood();
			querySnapshot && querySnapshot.forEach((doc) => {
				console.log(`${doc.id} => ${doc.data()}`);
				setFoodData(prev => [...prev, doc]);
			});
			return querySnapshot;
		}, [])
	} catch (e) {
		console.log("hi", e);
	}


	// useEffect(() => {
	// 	if (FoodData.length > 0)
	// 		console.log("home", FoodData[0].data());
	// }, [FoodData])

	// const onPress = () => {
	// 	props.navigation.navigate('AddScreen');
	//   };
	function capitalize(s) {
		return s && s[0].toUpperCase() + s.slice(1);
	}

	const foodList = ({ item }) => (

		<Card>
			<Card.Title  style={{ fontSize: 25 }}>{capitalize(item.name)
			}</Card.Title>
			<Card.Divider />
			<Card.Image source={images[item.imageID]} />
			<Text style={{ marginVertical: 5 }}>
				{item.description}
			</Text>
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
	)
	return (
		<>
			<View style={{ backgroundColor: '#5D5FEE', padding: 20 }}>
				<Text style={{ color: 'white', fontSize: 30, fontWeight: "bold" }}>FoodHope</Text>
			</View>
			<FlatList
				data={FoodData && FoodData.flatMap(doc => doc.data().foods.map(food => food))}
				renderItem={foodList}
			/>
		</>
	);
};

export default HomeScreen;







































