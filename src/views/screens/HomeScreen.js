
import React, { useState, useEffect } from 'react';
import { SafeAreaView, Text, View, Image, FlatList } from 'react-native';
import { useAuth } from '../../contexts/AuthContext';
// import { Button as Butt } from 'react-native-paper';
import { Card, ListItem, Icon, Button } from 'react-native-elements'
import COLORS from '../../conts/colors';
// import { collection, DocumentSnapshot, getDocs, QueryDocumentSnapshot } from 'firebase/firestore';
// import { db } from '../../../firebase';
// import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

// const Tab = createBottomTabNavigator();


const HomeScreen = ({ navigation }) => {

	const { getSnap, fetchFood } = useAuth();
	const [FoodData, setFoodData] = useState([]);
	const { images, capitalize } = useAuth();


	useEffect(() => {
		getFoodData();
	}, [])


	async function getFoodData() {
		setFoodData([]);

		const querySnapshot = await fetchFood();
		querySnapshot && querySnapshot.forEach((doc) => {
			console.log(`${doc.id} => ${doc.data()}`);
			setFoodData(prev => [...prev, doc]);
		});
	}

	// useEffect(() => {
	// 	if (FoodData.length > 0)
	// 		console.log("home", FoodData[0].data());
	// }, [FoodData])

	// const onPress = () => {
	// 	props.navigation.navigate('AddScreen');
	//   };

	const renderFoodList = ({ item }) => (

		<Card>
			
			<Card.Title >
			
					
					<Text style={{ fontSize: 25, alignContent: 'center'}}>{capitalize(item.name)}</Text>

			</Card.Title>

			<Card.Divider />

			<Card.Image source={images[item.imageID]} />

			<View style={{ display: 'flex', flexDirection: 'row', marginVertical: 5 }}>
				<Text style={{ fontWeight: 'bold' }}>Description: </Text><Text >
					{item.description}
				</Text>
			</View>
			<View style={{ display: 'flex', flexDirection: 'row', marginVertical: 5 }}>
				<Text style={{ fontWeight: 'bold' }}>Serves: </Text><Text >
					{item.serves}
				</Text>
			</View>
			<View style={{ display: 'flex', flexDirection: 'row', marginVertical: 5 }}>
				<Text style={{ fontWeight: 'bold' }}>address: </Text><Text >
					{console.log(item)}
				</Text>
			</View>
			<Card.Divider />
			<Button
				// onPress={onPress}
				buttonStyle={{ backgroundColor: COLORS.blue }}
				onPress={() => {
					navigation.navigate('AddScreen');
					console.log('AddScreen pressed');
				}}
				// icon={<Icon name='code' color='#ffffff' />}
				// buttonStyle={{borderRadius: 0, marginLeft: 0, marginRight: 0, marginBottom: 0}}

				title='VIEW Details' />

		</Card>
	)
	return (
		<>
			<View style={{ backgroundColor: '#5D5FEE', padding: 20 }}>
				<Text style={{ color: 'white', fontSize: 30, fontWeight: "bold" }}>FoodHope</Text>
			</View>
			<FlatList
				data={FoodData && FoodData.flatMap(doc => doc.data().foods.map(food => food))}
				renderItem={renderFoodList}
			/>
		</>
	);
};

export default HomeScreen;







































