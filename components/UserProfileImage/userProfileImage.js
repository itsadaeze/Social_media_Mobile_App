import React from 'react';
import PropTypes from 'prop-types';
import { View, Image } from 'react-native';
import style from '../UserStory/style';


const UserProfileImage = (props) => {
    return <View style={[style.ImageContainer, {borderRadius:props.imageDimensions}]}>
    <Image source={props.profileImage} style={{width:props.imageDimensions, height:props.imageDimensions}} />
    </View>;
}

UserProfileImage.propTypes = {
    profileImage: PropTypes.any.isRequired,
    ImageDimensions: PropTypes.number.isRequired,
}
export default UserProfileImage;
