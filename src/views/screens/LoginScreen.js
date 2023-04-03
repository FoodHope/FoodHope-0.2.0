import React from 'react';
import { View, Text, SafeAreaView, Keyboard, Alert, ScrollView } from 'react-native';
import { useAuth } from '../../contexts/AuthContext';
import COLORS from '../../conts/colors';
import Button from '../components/Button';
import Input from '../components/Input';
import Loader from '../components/Loader';

const LoginScreen = ({ navigation }) => {
	const [inputs, setInputs] = React.useState({ email: "svasanth712@gmail.com", password: '123123' });
	const [errors, setErrors] = React.useState({});
	const [loading, setLoading] = React.useState(false);

	const { login } = useAuth()

	const validate = async () => {
		Keyboard.dismiss();
		let isValid = true;
		if (!inputs.email) {
			handleError('Please input email', 'email');
			isValid = false;
		}
		if (!inputs.password) {
			handleError('Please input password', 'password');
			isValid = false;
		}
		if (isValid) {
			logIn();
		}
	};

	const logIn = async () => {
		try {

			setLoading(true);
			await login(inputs.email, inputs.password);
		} catch (error) {
			Alert.alert('Error', 'Invalid username or password :(');
			console.log(error)
		}
		setLoading(false)
	};

	const handleOnchange = (text, input) => {
		setInputs(prevState => ({ ...prevState, [input]: text }));
	};

	const handleError = (error, input) => {
		setErrors(prevState => ({ ...prevState, [input]: error }));
	};
	return (
		<SafeAreaView style={{ flex: 1, justifyContent: 'center', backgroundColor: COLORS.white }}>
			<Loader visible={loading} />
			<ScrollView contentContainerStyle={{ paddingHorizontal: 20, flex: 1, justifyContent: 'center' }}>
				{/* <View style={{ justifyContent: 'center'}}> */}
					<Text style={{ color: '#5D5FEE', fontSize: 40, fontWeight: 'bold' }}>
						Log In
					</Text>
					<Text style={{ color: COLORS.grey, fontSize: 18, marginVertical: 10 }}>
						Enter Your Details to Login
					</Text>
					<View style={{ marginVertical: 20 }}>
						<Input
							onChangeText={text => handleOnchange(text, 'email')}
							onFocus={() => handleError(null, 'email')}
							iconName="email-outline"
							label="Email ID"
							placeholder="Enter your Email ID"
							error={errors.email}
						/>
						<Input
							onChangeText={text => handleOnchange(text, 'password')}
							onFocus={() => handleError(null, 'password')}
							iconName="lock-outline"
							label="Password"
							placeholder="Enter your password"
							error={errors.password}
							password
						/>
						<Text
							onPress={() => navigation.navigate('ForgotPasswordScreen')}
							style={{
								color: '#5D5FEE',
								fontWeight: 'bold',
								textAlign: 'center',
								fontSize: 16,
							}}>
							Forgot Password?
						</Text>
						<Button title="Log In" onPress={validate} />
						<Text
							onPress={() => navigation.navigate('RegistrationScreen')}
							style={{
								color: '#5D5FEE',
								fontWeight: 'bold',
								textAlign: 'center',
								fontSize: 16,
							}}>
							Don't have account ?Register
						</Text>
					</View>
				{/* </View> */}

			</ScrollView>
		</SafeAreaView>
	);
};

export default LoginScreen;