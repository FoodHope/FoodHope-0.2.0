import { View, Text, FlatList, Linking, StyleSheet, ScrollView } from 'react-native'
// import { useAuth } from '../../contexts/AuthContext';
import React, { useState, useEffect } from 'react';
import { Card, ListItem, Icon, Button } from 'react-native-elements'
import { Colors } from 'react-native/Libraries/NewAppScreen';
import COLORS from '../../conts/colors';
// import COLORS from '../../conts/colors';




const ViewDetailsScreen = ({ navigation, route }) => {
    const { item } = route.params;

    const handlePhonePress = () => {
        Linking.openURL('tel: +91' + item.phNum);
    };

    return (
        <View >
            {/* <Loader visible={loading} />  */}

            <View style={{ backgroundColor: '#5D5FEE', padding: 20 }}>
                <Text style={{ color: 'white', fontSize: 30, fontWeight: "bold" }}>View Food Details</Text>
            </View>

            <ScrollView style={{ paddingHorizontal: 20, backgroundColor: '#fff' }}>


                <Text style={styles.text}>
                    <Text style={{ fontWeight: 'bold' }}>
                        Provider Name :
                    </Text>
                    {" " + item.providerName}
                </Text>

                <Text style={styles.text}>
                    <Text style={{ fontWeight: 'bold' }}>
                        Food Name :
                    </Text>
                    {" " + item.name}
                </Text>



                <Text style={styles.text}>
                    <Text style={{ fontWeight: 'bold', }}>
                        Description :
                    </Text>
                    {" " + item.description}
                </Text>

                <Text style={styles.text}>
                    <Text style={{ fontWeight: 'bold', }}>
                        Veg / Non-Veg :
                    </Text>
                    {item.veg ? " Veg" : " Non-Veg"}
                </Text>

                <Text style={styles.text}>
                    <Text style={{ fontWeight: 'bold', }}>
                        No of serves :
                    </Text>
                    {" " + item.serves}
                </Text>

                <Text style={styles.text}>
                    <Text style={{ fontWeight: 'bold', }}>
                        Expires in :
                    </Text>
                    {" " + item.expiresIn + " hours"}
                </Text>

                <Text style={styles.text}>
                    <Text style={{ fontWeight: 'bold', }}>
                        Area :
                    </Text>
                    {" " + item.area}
                </Text>

                <Text style={[styles.text,]}>
                    <Text style={{ fontWeight: 'bold', }}>
                        Address :
                    </Text>
                    {" " + item.address}
                </Text>

                <Text style={[styles.text,]}>
                    <Text style={{ fontWeight: 'bold', }}>
                        Landmark :
                    </Text>
                    {" " + item.landmark}
                </Text>

                <Text onPress={handlePhonePress}
                    style={[styles.text]}>
                    <Text style={{ fontWeight: 'bold', }}>
                        Contact Number :
                    </Text>
                    <Text style={{ color: '#1a73e8' }}>
                        {" " + item.phNum}
                    </Text>
                </Text>
            </ScrollView>
        </View>
    )
}

export default ViewDetailsScreen;

const styles = StyleSheet.create({
    text: {
        color: 'black',
        fontSize: 18,
        marginVertical: 10,
        backgroundColor: '#F3F4FB',
        padding: 10,
        flexGrow: 1,
        flexShrink: 1,
        textAlignVertical: 'center',
        textAlign: "justify",
        lineHeight: 24
    }
});


