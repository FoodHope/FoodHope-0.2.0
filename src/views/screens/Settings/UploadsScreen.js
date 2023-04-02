import { View, Text, FlatList } from 'react-native'
import React, { useEffect, useState } from 'react'
import { useAuth } from '../../../contexts/AuthContext';
import { query } from 'firebase/firestore';
import { Button, Card } from 'react-native-elements';
import COLORS from '../../../conts/colors';
import { Modal } from 'react-native-paper';

export default function UploadsScreen() {

    const [myFoods, setMyFoods] = useState([]);
    const { getSnap, currentUser, capitalize, images } = useAuth();

    useEffect(() => {
        getMyFoods();
    }, [])


    async function getMyFoods() {
        const querySnapshot = await getSnap("FoodData", currentUser && currentUser.email);
        setMyFoods(querySnapshot.data().foods);
    }


    const renderMyFoods = ({ item }) => (
        <Card>
            <Card.Title style={{ fontSize: 25 }}>{capitalize(item.name)
            }</Card.Title>
            <Card.Divider />
            <Card.Image source={images[item.imageID]} />
            <Text style={{ marginVertical: 5 }}>
                {item.description}
            </Text>
            <Button
                // onPress={onPress}
                buttonStyle={{ backgroundColor: COLORS.blue }}
                onPress={() => {
                    // navigation.navigate('AddScreen');
                    console.log('AddScreen pressed');
                }}
                // icon={<Icon name='code' color='#ffffff' />}
                // buttonStyle={{borderRadius: 0, marginLeft: 0, marginRight: 0, marginBottom: 0}}

                title='VIEW NOW' />

        </Card>
    )

    return (
        <View>  
            <View style={{ backgroundColor: '#5D5FEE', padding: 23 }}>
                <Text style={{ color: 'white', fontSize: 30, fontWeight: "bold" }}>Uploads</Text>
            </View>
            <FlatList data={myFoods && myFoods} renderItem={renderMyFoods} />
        </View>
    )
}