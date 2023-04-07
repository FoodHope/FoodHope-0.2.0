import React, { useEffect, useState } from 'react';
import Loader from '../../components/Loader';
import {
    View,
    Text,
    SafeAreaView,
    StyleSheet,
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


    const [user, setUser] = useState({});



    const [inputs, setInputs] = useState({
        // email: '',
        fullname: '',
        phone: '',
        address: ''
    });

    const [errors, setErrors] = useState({});
    const [loading, setLoading] = useState(false);

    const { updateProfile, currentUser, getUserDetails } = useAuth();


    useEffect(() => {
        get();
    }, [])

    useEffect(() => {
        setInputs({
            // email: user.Email,
            fullname: user.Name,
            address: user.Address,
            phone: user.Mobile
        });
        setLoading(false)
    }, [user])

    async function get() {
        setLoading(true)
        const docRef = await getUserDetails();
        setUser(docRef.data())
        console.log("user", docRef.data());
    }

    const validate = () => {
        Keyboard.dismiss();
        let isValid = true;

        // if (!inputs.email) {
        //     handleError('Please input email', 'email');
        //     isValid = false;
        // } else if (!inputs.email.match(/\S+@\S+\.\S+/)) {
        //     handleError('Please input a valid email', 'email');
        //     isValid = false;
        // }

        if (!inputs.fullname) {
            handleError('Please input fullname', 'fullname');
            isValid = false;
        }

        if (!inputs.phone) {
            handleError('Please input phone number', 'phone');
            isValid = false;
        }

        if (!inputs.address) {
            handleError('Please input address', 'address');
            isValid = false;
        }



        if (isValid) {
            Alert.alert(
                'Save Changes?',
                'Are you sure you want to update the changes?',
                [
                    {
                        text: 'No',
                        onPress: () => console.log('Cancel Pressed'),
                        style: 'cancel'
                    },
                    {
                        text: 'Yes',
                        onPress: () => update(),
                        style: 'destructive'
                    }
                ],
                { cancelable: false }
            );
        }
    };


    const update = async () => {

        try {
            setLoading(true);
            await updateProfile(inputs.fullname, inputs.phone, inputs.address);
            setLoading(false)
            navigation.navigate("SettingsScreen")
            // await signup(inputs.email, inputs.password, inputs.fullname, inputs.phone);
        } catch (error) {
            Alert.alert('Error', 'Please Enter Valid User Credentials');
            console.log(error)
        }
       
    };


    const handleOnchange = (text, input) => {
        setInputs(prevState => ({ ...prevState, [input]: text }));
    };
    const handleError = (error, input) => {
        setErrors(prevState => ({ ...prevState, [input]: error }));
    };



    return (
        <View style={{ backgroundColor: 'white', flex: 1 }}>
            <Loader visible={loading} />
            <View style={{ backgroundColor: '#5D5FEE', padding: 20 }}>
                <Text style={{ color: 'white', fontSize: 30, fontWeight: "bold" }}>Profile</Text>
            </View>
            <ScrollView style={{ padding: 20, }}>
                <View >
                    <Text style={{ color: '#BABBC3', fontSize: 30, fontWeight: "bold" }}>Edit your Profile</Text>
                </View>


                <View style={{ marginVertical: 20, paddingBottom: 20 }}>

                    {/* <Input
                        onChangeText={text => handleOnchange(text, 'email')}
                        onFocus={() => handleError(null, 'email')}
                        iconName="email-outline"
                        label="Email ID"
                        placeholder="Enter your email address"
                        error={errors.email}
                        value={inputs.email}
                    /> */}

                    <Input
                        onChangeText={text => handleOnchange(text, 'fullname')}
                        onFocus={() => handleError(null, 'fullname')}
                        iconName="account-outline"
                        label="User Name"
                        placeholder="Enter your full name"
                        error={errors.fullname}
                        value={inputs.fullname}
                    />

                    <Input
                        keyboardType="numeric"
                        onChangeText={text => handleOnchange(text, 'phone')}
                        onFocus={() => handleError(null, 'phone')}
                        iconName="phone-outline"
                        label="Phone Number"
                        placeholder="Enter your phone number"
                        error={errors.phone}
                        value={inputs.phone}
                    />

                    <Input
                        onChangeText={text => handleOnchange(text, 'address')}
                        label="Address"
                        onFocus={() => handleError(null, 'address')}
                        placeholder="Enter the address"
                        error={errors.address}
                        multiline={true}
                        style={styles.input}
                        value={inputs.address}
                        numberOfLines={4}
                    />

                    <Button

                        buttonStyle={{ backgroundColor: COLORS.blue, width: 120, alignSelf: 'center' }}
                        onPress={() => {
                            validate();
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
        color: '#5D5FEE',


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



export default ProfileScreen