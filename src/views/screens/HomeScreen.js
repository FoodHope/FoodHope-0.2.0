import React, { useState, useEffect } from 'react';
import { SafeAreaView, Text, View } from 'react-native';
import { useAuth } from '../../contexts/AuthContext';
import Button from '../components/Button';

const HomeScreen = ({ navigation }) => {
	const [userDetails, setUserDetails] = useState();
	const { getSnap, logout, currentUser } = useAuth();
	const fetchPost = async () => {

		try {

			const docSnap = await getSnap("users", currentUser && currentUser.email);

			setUserDetails(docSnap.data());

		} catch (e) {
			console.log(e);
		}
	}

	useEffect(() => {
		fetchPost();
	}, [])

	return (
		<View
			style={{
				flex: 1,
				alignItems: 'center',
				justifyContent: 'center',
				paddingHorizontal: 40,
			}}>
			<Text style={{ fontSize: 20, fontWeight: 'bold' }}>
				Username: {userDetails?.Name}
			</Text>
			<Text style={{ fontSize: 20, fontWeight: 'bold' }}>
				Email ID: {userDetails?.Email}
			</Text>
			<Text style={{ fontSize: 20, fontWeight: 'bold' }}>
				Phone Number: {userDetails?.Mobile}
			</Text>
			<Button title="Logout" onPress={async () => await logout()} />
		</View>
	);
};

export default HomeScreen;