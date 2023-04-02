import React from 'react';
import {
    View,
    Text,
    SafeAreaView,
    Keyboard,
    ScrollView,
    Alert,
    TouchableOpacity,
} from 'react-native';
import { useAuth } from '../../../contexts/AuthContext';

import COLORS from '../../../conts/colors';
import { Button } from 'react-native-elements';
import Input from '../../components/Input';

const ProfileScreen = ({ navigation }) => {

    const [inputs, setInputs] = React.useState({
        email: '',
        fullname: '',
        phone: '',

    });

    const [errors, setErrors] = React.useState({});
    const [loading, setLoading] = React.useState(false);

    const { signup } = useAuth();

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

        if (!inputs.fullname) {
            handleError('Please input fullname', 'fullname');
            isValid = false;
        }

        if (!inputs.phone) {
            handleError('Please input phone number', 'phone');
            isValid = false;
        }



        if (isValid) {
            update();
        }
    };


    const update = async () => {

        try {
            setLoading(true);
            // await signup(inputs.email, inputs.password, inputs.fullname, inputs.phone);
        } catch (error) {
            Alert.alert('Error', 'Please Enter Valid User Credentials');
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

        <View style={{backgroundColor: 'white', flex: 1}}>
            <View style={{ backgroundColor: '#5D5FEE', padding: 20 }}>
                <Text style={{ color: 'white', fontSize: 30, fontWeight: "bold" }}>Profile</Text>
            </View>
            <ScrollView style={{ paddingHorizontal: 20,paddingTop: 20}}>
                <View >
                    <Text style={{ color: '#BABBC3', fontSize: 30, fontWeight: "bold" }}>Edit your Profile</Text>
                </View>


                <View style={{ marginVertical: 20 }}>

                    <Input
                        onChangeText={text => handleOnchange(text, 'email')}
                        onFocus={() => handleError(null, 'email')}
                        iconName="email-outline"
                        label="Email ID"
                        placeholder="Enter your email address"
                        error={errors.email}
                    />

                    <Input
                        onChangeText={text => handleOnchange(text, 'fullname')}
                        onFocus={() => handleError(null, 'fullname')}
                        iconName="account-outline"
                        label="User Name"
                        placeholder="Enter your full name"
                        error={errors.fullname}
                    />

                    <Input
                        keyboardType="numeric"
                        onChangeText={text => handleOnchange(text, 'phone')}
                        onFocus={() => handleError(null, 'phone')}
                        iconName="phone-outline"
                        label="Phone Number"
                        placeholder="Enter your phone number"
                        error={errors.phone}
                    />

                    <Button

                        buttonStyle={{ backgroundColor: COLORS.blue, width: 120, alignSelf: 'center' }}
                        onPress={() => {

                            console.log('Update pressed');
                        }}
                        // icon={<Icon name='code' color='#ffffff' />}
                        // buttonStyle={{borderRadius: 0, marginLeft: 0, marginRight: 0, marginBottom: 0}}

                        title='Update' />

                </View>
            </ScrollView>
        </View>
    )
}

export default ProfileScreen