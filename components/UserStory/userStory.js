import React from 'react';
import PropTypes from 'prop-types';
import { View, Text } from 'react-native';
import style from './style';
import UserProfileImage from '../UserProfileImage/userProfileImage';
import { horizontalScale } from '../../assets/styles/scaling';

const UserStory = (props) => {
    return <View style={style.storyContainer}>
        <UserProfileImage profileImage={props.profileImage} imageDimensions={horizontalScale(65)}/>
        <Text style={style.firstName}>{props.firstName}</Text>
    </View>;
};


UserStory.PropTypes = {
    firstName: PropTypes.string.isRequired,
    profileImage: PropTypes.string.isRequired,
};
export default UserStory;
