
import React from 'react';
import { StyleSheet, Text, TouchableOpacity, View,Linking } from 'react-native';
import { useAuth } from '../../contexts/AuthContext';

const SettingsScreen = () => {

  const { logout } = useAuth();
  const handleProfilePress = () => {
    console.log('profile');
  };

  const handleUploadsPress = () => {
    console.log('Uploads');
  };


  const handleLogoutPress = async () => {
    await logout();
    console.log('logout');
  };

  const handleReachUsPress = () => {
    Linking.openURL('https://www.instagram.com/navin_krish03/');
  };
  {/* <View style={{ backgroundColor: '#5D5FEE', padding: 23 }}>
        <Text style={{ color: 'white', fontSize: 30, fontWeight: "bold" }}>Add Food Details</Text>
      </View> */}
  return (<>
    <View >
      <View style={{ backgroundColor: '#5D5FEE', padding: 23 }}>
        <Text style={{ color: 'white', fontSize: 30, fontWeight: "bold" }}>Settings</Text>
      </View>

      <TouchableOpacity onPress={handleProfilePress} style={styles.listItem}>
        <Text style={styles.listItemText}>Profile</Text>
      </TouchableOpacity>

      <TouchableOpacity onPress={handleUploadsPress} style={styles.listItem}>
        <Text style={styles.listItemText}>Uploads</Text>
      </TouchableOpacity>

      <TouchableOpacity onPress={handleLogoutPress} style={styles.listItem}>
        <Text style={styles.logout}>Logout</Text>
      </TouchableOpacity>


    </View>
    <View style={{marginTop: 500 , marginHorizontal: 100}}>
      <TouchableOpacity onPress={handleReachUsPress} style={styles.reachUsButton}>
        <Text style={styles.reachUsButtonText}>Reach Us Through Instagram</Text>
      </TouchableOpacity>
    </View>
  </>

  );
}



const styles = StyleSheet.create({
  listContainer: {
    backgroundColor: '5D5FE',
    borderTopColor: '#dbdbdb',
    borderTopWidth: StyleSheet.hairlineWidth,
    
    width: '100%',
  },
  listItem: {
    paddingHorizontal: 15,
    paddingVertical: 10,
    borderBottomColor: 'lightgrey',
    borderBottomWidth: 1,

  },
  listItemText: {
    fontSize: 23,
    fontWeight: '300',
  },

  logout:{
    color:'red',
    fontSize: 23,
    fontWeight: '400',
  },

  reachUsButtonText: {
    // color: '#fff',
    fontSize: 15,
    fontWeight: '300',
    // position: 'absolute',
    justifyContent: 'center',
    alignItems: 'center',

    width: '100%',
    paddingHorizontal: 15,
    paddingVertical: 10,
    borderBottomColor: 'lightgrey',
    borderTopColor:'lightgrey',
    borderBottomWidth: 1,
    borderTopWidth: 1,
  },
});

export default SettingsScreen;
