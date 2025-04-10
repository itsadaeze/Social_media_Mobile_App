/* eslint-disable react-native/no-inline-styles */

import React from 'react';
import {SafeAreaView, TouchableOpacity, View, Text, FlatList } from 'react-native';
// import { getFontFamily } from './assets/fonts/helper';
import Title from './components/Title/Title';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import globalStyle from './assets/styles/globalStyles';
import { faEnvelope } from '@fortawesome/free-regular-svg-icons';
import UserStory from './components/UserStory/userStory';




const App = () => {
  const userStories = [
    {
      firstName: 'Joesph',
      id: 1,
      profileImage: require('./assets/Images/avatar_default.png'),
    },
    {
      firstName: 'Oliva',
      id: 2,
      profileImage: require('./assets/Images/avatar_default.png'),
    },
    {
      firstName: 'Daniel',
      id: 3,
      profileImage: require('./assets/Images/avatar_default.png'),
    },
    {
      firstName: 'Amanda',
      id: 4,
      profileImage: require('./assets/Images/avatar_default.png'),
    },
    {
      firstName: 'Bella',
      id: 5,
      profileImage: require('./assets/Images/avatar_default.png'),
    },
    {
      firstName: 'Peace',
      id: 6,
      profileImage: require('./assets/Images/avatar_default.png'),
    },
    {
      firstName: 'Joesph',
      id: 7,
      profileImage: require('./assets/Images/avatar_default.png'),
    },
  ];
  return (
    <SafeAreaView>
      <View style={globalStyle.header}>
      <Title title={'Let\'s Explore'}/>
      <TouchableOpacity style={globalStyle.envelopIcon}>
      <FontAwesomeIcon icon={faEnvelope} color={'#898DAE'} size={20}/>
      <View style={globalStyle.messageNumberContainer}>
      <Text style={globalStyle.messageNumber}>2</Text>
      </View>
      </TouchableOpacity >
     </View>
     <View style={globalStyle.userStoryContainer}>
      <FlatList
      showsHorizontalScrollIndicator={false}
      horizontal={true}
      data={userStories}
      renderItem={({item}) => <UserStory firstName={item.firstName} profileImage={item.profileImage}/> }/>
     </View>
    </SafeAreaView>

  );
};


export default App;
