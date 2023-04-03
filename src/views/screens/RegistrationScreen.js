import React from 'react';
import {
	View,
	Text,
	SafeAreaView,
	StyleSheet,
	Keyboard,
	ScrollView,
	Alert,
} from 'react-native';
import { useAuth } from '../../contexts/AuthContext';

import COLORS from '../../conts/colors';
import Button from '../components/Button';
import Input from '../components/Input';
import Loader from '../components/Loader';

const RegistrationScreen = ({ navigation }) => {
	const [inputs, setInputs] = React.useState({
		email: '',
		fullname: '',
		phone: '',
		password: '',
		address: '',
	});
	const [errors, setErrors] = React.useState({});
	const [loading, setLoading] = React.useState(false);

	const { signup } = useAuth();

	const validate = () => {
		Keyboard.dismiss();
		let isValid = true;

		if (!inputs.name) {
			handleError('Please input email', 'email');
			isValid = false;
		} else if (!inputs.email.match(/\S+@\S+\.\S+/)) {
			handleError('Please input a valid email', 'email');
			isValid = false;
		}

		if (!inputs.fullname) {
			handleError('Please input fullname', 'fullname');
			isValid = false;
		}

		if (!inputs.phone) {
			handleError('Please input phone number', 'phone');
			isValid = false;
		}

		if (!inputs.address) {
			handleError('Please enter the address', 'address');
			isValid = false;
		}


		if (!inputs.password) {
			handleError('Please input password', 'password');
			isValid = false;
		} else if (inputs.password.length < 5) {
			handleError('Min password length of 5', 'password');
			isValid = false;
		} else if (inputs.password.length < 5) {
			handleError('Min password length of 5', 'password');
			isValid = false;
		}

		if (isValid) {
			register();
		}
	};

	const register = async () => {

		try {
			setLoading(true);
			await signup(inputs.email, inputs.password, inputs.fullname, inputs.phone, inputs.address);
		} catch (error) {
			Alert.alert('Error', 'Something went wrong',);
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
		<SafeAreaView style={{ backgroundColor: COLORS.white, flex: 1, justifyContent: 'center' }}>
			<Loader visible={loading} />
			<ScrollView
				contentContainerStyle={{ paddingTop: 50, paddingHorizontal: 20 }}>
				<Text style={{ color: '#5D5FEE', fontSize: 40, fontWeight: 'bold' }}>
					Sign Up
				</Text>
				<Text style={{ color: COLORS.grey, fontSize: 18, marginVertical: 10 }}>
					Enter Your Details to Sign Up
				</Text>
				<View style={{ marginVertical: 20 }}>
					<Input
						onChangeText={text => handleOnchange(text, 'email')}
						onFocus={() => handleError(null, 'email')}
						// iconName="email-outline"
						label="Email ID"
						placeholder="Enter your email address"
						error={errors.email}
					/>

					<Input
						onChangeText={text => handleOnchange(text, 'fullname')}
						onFocus={() => handleError(null, 'fullname')}
						// iconName="account-outline"
						label="User Name"
						placeholder="Enter your full name"
						error={errors.fullname}
					/>

					<Input
						keyboardType="numeric"
						onChangeText={text => handleOnchange(text, 'phone')}
						onFocus={() => handleError(null, 'phone')}
						// iconName="phone-outline"
						label="Phone Number"
						placeholder="Enter your phone number"
						error={errors.phone}
					/>
					<Input
						onChangeText={text => handleOnchange(text, 'password')}
						onFocus={() => handleError(null, 'password')}
						// iconName="lock-outline"
						label="Password"
						placeholder="Enter your password"
						error={errors.password}
						password
					/>
					<Input
						onChangeText={text => handleOnchange(text, 'password')}
						onFocus={() => handleError(null, 'password')}
						// iconName="lock-outline"
						label="Confirm Password"
						placeholder="Re-Enter password"
						error={errors.password}
						password
					/>

					<Input
						onChangeText={text => handleOnchange(text, 'address')}
						label="Address"
						onFocus={() => handleError(null, 'address')}
						placeholder="Enter the address"
						error={errors.address}
						multiline={true}
						style={styles.input}
						numberOfLines={4}
					/>

					<Button title="Register" onPress={validate} />
					<Text
						onPress={() => navigation.navigate("LoginScreen")}
						style={{
							color: '#5D5FEE',
							fontWeight: 'bold',
							textAlign: 'center',
							fontSize: 16,
						}}>
						Already have account ?Login
					</Text>
				</View>
			</ScrollView>
		</SafeAreaView>
	);
};



const styles = StyleSheet.create({


    input: {

        // width:'50%',

        // borderColor: '#dbdbdb',
        backgroundColor: '#F3F4FB',
        paddingHorizontal: 15,
        // borderWidth: 1,
        borderRadius: 5,
        padding: 10,
        fontSize: 14,
        textAlignVertical: 'top',

    },

    label: {
        // margin:10,
        fontSize: 18,
        color: '#5D5FEE',
        fontWeight: 'bold',
        paddingHorizontal: 10,
        marginBottom: 10,
    },

});
export default RegistrationScreen;