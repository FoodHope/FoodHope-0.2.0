// // import { View, Text } from 'react-native'
// // import React from 'react'

// // export default function SettingsScreen() {
// //   return (
// //     <View>
// //       <Text>SettingsScreen</Text>
// //     </View>
// //   )
// // }

// import React, { Component } from 'react';
// import { View, FlatList, TouchableOpacity, Text, StyleSheet } from 'react-native';

// export default class App extends Component {
//   constructor(props) {
//     super(props);
//     this.state = {
//       data: [
//         { id: 1, title: 'Button 1' },
//         { id: 2, title: 'Button 2' },
//         { id: 3, title: 'Button 3' },
//         { id: 4, title: 'Button 4' },
//         { id: 5, title: 'Button 5' },
//       ],
//     };
//   }

//   renderItem = ({ item }) => {
//     return (
//       <TouchableOpacity style={{ width: '100%' }}
//         onPress={() => navigation.navigate('LoginScreen')} >
//         <Text
//           style={styles.title}

//         >{item.title}</Text>
//       </TouchableOpacity>
//     );
//   };

//   render() {
//     return (

//       <View style={{flex: 1, display: 'flex'}}>
//         <View style={{ backgroundColor: '#5D5FEE', padding: 23 }}>
//           <Text style={{ color: 'white', fontSize: 30, fontWeight: "bold" }}>Add Food Details</Text>
//         </View>

//         <View style={styles.container}>

//           <FlatList
//             data={this.state.data}
//             renderItem={this.renderItem}
//             keyExtractor={(item) => item.id.toString()}
//             contentContainerStyle={styles.contentContainer}
//           />
//         </View>

//       </View>
//     );
//   }
// }

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     width: '100%',
//     alignItems: 'flex-start',
//     justifyContent: 'center',
//   },
//   contentContainer: {
//     alignSelf: 'stretch',
//     width: '100%'
//   },

//   title: {
//     color: 'black',
//     width: '100%',
//     fontSize: 16,
//     fontWeight: 'bold',
//     textAlign: 'center',
//   },
// });


import React from 'react';
import { StyleSheet, Text, TouchableOpacity, View,Linking } from 'react-native';
const List = () => {
  const handleProfilePress = () => {
    console.log('profile');
  };

  const handleUploadsPress = () => {
    console.log('Uploads');
  };


  const handleLogoutPress = () => {
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
    fontSize: 30,
    fontWeight: '300',
  },

  logout:{
    color:'red',
    fontSize: 30,
    fontWeight: '300',
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

export default List;