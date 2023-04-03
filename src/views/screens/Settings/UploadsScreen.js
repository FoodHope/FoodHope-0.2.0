import { View, Text, FlatList, Alert } from 'react-native'
import React, { useCallback, useEffect, useState } from 'react'
import { useAuth } from '../../../contexts/AuthContext';
import { query } from 'firebase/firestore';
import { Button, Card } from 'react-native-elements';
import COLORS from '../../../conts/colors';
import { useFocusEffect } from '@react-navigation/native';

import { Modal } from 'react-native-paper';
// import Button from '../../components/Button';

export default function UploadsScreen({navigation}) {

    const [myFoods, setMyFoods] = useState([]);
    const { getSnap, currentUser, capitalize, images } = useAuth();
    const [isRefreshing, setIsRefreshing] = useState(false);
    const [showModal, setShowModal] = useState(false);
    const { deleteFood } = useAuth();

    useFocusEffect(
		useCallback(() => {
			getMyFoods();
		}, [])
	);

    // useEffect(() => {
    //     getMyFoods();
    // }, [navigation])

    const handleRefresh = () => {
        setIsRefreshing(true);
        getMyFoods();
        setIsRefreshing(false);
    };


    async function getMyFoods() {
        console.log("uploads refreshing");
        const querySnapshot = await getSnap("FoodData", currentUser && currentUser.email);
        setMyFoods(querySnapshot.data().foods);
    }

    async function handleDelete(index) {
        try {
            await deleteFood(index);
            handleRefresh();
        } catch (e) {
            console.log(e);
        }
    }


    const renderMyFoods = ({ item, index }) => (
        <Card>

            <Card.Title >


                <Text style={{ fontSize: 25, alignContent: 'center' }}>{capitalize(item.name)}</Text>

            </Card.Title>

            <Card.Divider />

            <Card.Image source={images[item.imageID]} />
            <Card.Divider />

            <View style={{ display: 'flex', flexDirection: 'row', marginVertical: 5 }}>
                <Text style={{ fontWeight: 'bold' }}>Area: </Text><Text >
                    {item.area}
                </Text>
            </View>
            <View style={{ display: 'flex', flexDirection: 'row', marginVertical: 5 }}>
                <Text style={{ fontWeight: 'bold' }}>Serves: </Text><Text >
                    {item.serves}
                </Text>
            </View>
            <View style={{ display: 'flex', flexDirection: 'row', marginVertical: 5 }}>
                <Text style={{ fontWeight: 'bold' }}>Description: </Text><Text >
                    {item.description}
                </Text>
            </View>
            <Card.Divider />
            <View style={{ flexDirection: 'row', display: 'flex', justifyContent: 'space-around' }}>
                <Button
                    // onPress={onPress}
                    // style={{width: "25%"}}
                    buttonStyle={{ backgroundColor: COLORS.blue, width: 150 }}
                    onPress={() => {
                        navigation.navigate("EditScreen",{item, index, myFoods});
                        console.log('AddScreen pressed');
                    }}
                    // icon={<Icon name='code' color='#ffffff' />}
                    // buttonStyle={{borderRadius: 0, marginLeft: 0, marginRight: 0, marginBottom: 0}}

                    title='Edit' />
                <Button
                    // onPress={onPress}
                    // style={{width: "25%"}}
                    buttonStyle={{ backgroundColor: '#da3928', width: 150 }}
                    onPress={() => {
                        Alert.alert(
                            'Confirm Delete',
                            'Are you sure you want to delete this data?',
                            [
                                {
                                    text: 'Cancel',
                                    onPress: () => console.log('Cancel Pressed'),
                                    style: 'cancel'
                                },
                                {
                                    text: 'Delete',
                                    onPress: () => handleDelete(item),
                                    style: 'destructive'
                                }
                            ],
                            { cancelable: false }
                        );
                        console.log('AddScreen pressed');
                    }}
                    // icon={<Icon name='code' color='#ffffff' />}
                    // buttonStyle={{borderRadius: 0, marginLeft: 0, marginRight: 0, marginBottom: 0}}

                    title='Delete' />
            </View>



        </Card>

    )
    const item = {}

    return (
        <>
            <View style={{ backgroundColor: '#5D5FEE', padding: 23 }}>
                <Text style={{ color: 'white', fontSize: 30, fontWeight: "bold" }}>Uploads</Text>
            </View>
            <FlatList
                data={myFoods && myFoods}
                renderItem={renderMyFoods}
                onRefresh={handleRefresh}
                refreshing={isRefreshing} />



        </>
    )
}