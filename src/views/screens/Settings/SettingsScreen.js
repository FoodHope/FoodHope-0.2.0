
import React from 'react';
import Loader from '../../components/Loader';
import { StyleSheet, Text, TouchableOpacity, View, Linking, ScrollView, SafeAreaView, Alert } from 'react-native';
import { useAuth } from '../../../contexts/AuthContext';

const SettingsScreen = ({ navigation }) => {

  // const [loading, setLoading] = React.useState(false);
  const { logout } = useAuth();

  const handleProfilePress = () => {
    navigation.navigate("ProfileScreen")
    console.log('profile');
  };

  const handleUploadsPress = () => {
    navigation.navigate("UploadsScreen")
    console.log('Uploads');
  };


  const handleLogoutPress = async () => {
    Alert.alert(
      'Logout?',
      'Are you sure you want to Logout?',
      [
        {
          text: 'No',
          onPress: () => console.log('Cancel Pressed'),
          style: 'cancel'
        },
        {
          text: 'Yes',
          onPress: async () => await logout(),
          style: 'destructive'
        }
      ],
      { cancelable: false }
    );
    console.log('logout');
  };

  const handleInstagramPress = () => {
    Linking.openURL('https://www.instagram.com/foodhope_offl/');
  }


  return (<>
    <SafeAreaView style={{ flex: 1 }}>
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

      <View style={styles.reachUs}>
        <TouchableOpacity onPress={handleInstagramPress} style={styles.reach}>
          <Text style={styles.reachUsList}>Reach us through instagram</Text>
        </TouchableOpacity>
      </View>

    </SafeAreaView>
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

  reach: {
    paddingHorizontal: 15,
    paddingVertical: 10,
    borderBottomColor: 'lightgrey',
    borderBottomWidth: 1,
    borderTopWidth: 1,
    borderTopColor: 'lightgrey',

  },
  listItemText: {
    fontSize: 23,
    fontWeight: '300',
  },

  reachUsList: {
    fontSize: 18,
    fontWeight: '300',

  },

  logout: {
    color: 'red',
    fontSize: 23,
    fontWeight: '300',
  },

  reachUs: {
    position: 'absolute',
    // height: 50, // Or any height you want
    justifyContent: 'center',
    alignItems: 'center',
    bottom: 10,
    left: 0,
    right: 0,

  }


});

export default SettingsScreen;
