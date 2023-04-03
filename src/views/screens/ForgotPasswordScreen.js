import React from 'react';
import {
	View,
	Text,
	SafeAreaView,
	Keyboard,
	ScrollView,
	Alert,
} from 'react-native';
import { useAuth } from '../../contexts/AuthContext';

import COLORS from '../../conts/colors';
import Button from '../components/Button';
import Input from '../components/Input';
import Loader from '../components/Loader';

const ForgotPasswordScreen = ({ navigation }) => {
	const [inputs, setInputs] = React.useState({
		email: '',
	});
	const [errors, setErrors] = React.useState({});
	const [loading, setLoading] = React.useState(false);

	const { resetPassword } = useAuth();

	const validate = () => {
		Keyboard.dismiss();
		let isValid = true;

		if (!inputs.email) {
			handleError('Please input email', 'email');
			isValid = false;
		} else if (!inputs.email.match(/\S+@\S+\.\S+/)) {
			handleError('Please input a valid email', 'email');
			isValid = false;
		}


		if (isValid) {
			forgot();
		}
	};
	const forgot = () => {
		try {
			setLoading(true);
			resetPassword(inputs.email);
		} catch (error) {
			Alert.alert('Error', 'Something went wrong');
		}
		setLoading(false);

	};
	const handleOnchange = (text, input) => {
		setInputs(prevState => ({ ...prevState, [input]: text }));
	};
	const handleError = (error, input) => {
		setErrors(prevState => ({ ...prevState, [input]: error }));
	};
	return (
		<SafeAreaView style={{ backgroundColor: COLORS.white, flex: 1 }}>
			<Loader visible={loading} />
			<ScrollView
				contentContainerStyle={{ paddingTop: 50, paddingHorizontal: 20, flex: 1, justifyContent: 'center' }}>
				<Text style={{ color: '#5D5FEE', fontSize: 35, fontWeight: 'bold' }}>
					Forget Password
				</Text>
				<Text style={{ color: COLORS.grey, fontSize: 16, marginVertical: 10 }}>
					Enter Your Email ID to Reset Password
				</Text>
				<View style={{ marginVertical: 20 }}>
					<Input
						onChangeText={text => handleOnchange(text, 'email')}
						onFocus={() => handleError(null, 'email')}
						iconName="email-outline"
						label="Email ID"
						placeholder="Enter your email address"
						error={errors.email}
					/>

					<Button title="Forgot Password" onPress={validate} />

					<Text
						onPress={() => navigation.navigate("LoginScreen")}
						style={{
							color: '#5D5FEE',
							fontWeight: 'bold',
							textAlign: 'center',
							fontSize: 16,
						}}>
						Go back to Login?
					</Text>

				</View>
			</ScrollView>
		</SafeAreaView>
	);
};

export default ForgotPasswordScreen;