/* eslint-disable react-native/no-inline-styles */

import React from 'react';
import PropTypes from 'prop-types';
import UserProfileImage from '../UserProfileImage/userProfileImage';
import {View, Text, Image} from 'react-native';
import style from './style';
import {FontAwesomeIcon} from '@fortawesome/react-native-fontawesome';
import {faEllipsisH} from '@fortawesome/free-solid-svg-icons';
import {
  faBookmark,
  faHeart,
  faMessage,
} from '@fortawesome/free-regular-svg-icons';
import { horizontalScale, verticalScale } from '../../assets/styles/scaling';

const UserPost = props => {
  return (
    <View style={style.wrapper}>
      <View style={style.userPostContainer}>
        <View style={style.userDetailsContainer}>
          <UserProfileImage
            profileImage={props.profileImage}
            imageDimensions={horizontalScale(48)}
          />

          <View style={style.userDetails}>
            <Text style={{marginBottom: verticalScale(5), flexDirection: 'row'}}>
              {props.firstName} {props.lastName}
            </Text>
            {props.location && <Text style={style.location}>{props.location}</Text>}
          </View>
        </View>
        <FontAwesomeIcon icon={faEllipsisH} />
      </View>
      <View style={style.postImageContainer}>
        <Image source={props.image} />
      </View>
      <View style={style.IconsWrapper}>
        <View style={style.iconsTextContainer}>
          <FontAwesomeIcon
            icon={faHeart}
            color="#79869F"
            style={{marginLeft: horizontalScale(20)}}
          />
          <Text style={style.iconText}>{props.likes}</Text>
        </View>
        <View style={style.iconsTextContainer}>
          <FontAwesomeIcon
            icon={faMessage}
            color="#79869F"
            style={{marginLeft: horizontalScale(20)}}
          />
          <Text style={style.iconText}>{props.likes}</Text>
        </View>
        <View style={style.iconsTextContainer}>
          <FontAwesomeIcon
            icon={faBookmark}
            color="#79869F"
            style={{marginLeft: horizontalScale(20)}}
          />
          <Text style={style.iconText}>{props.likes}</Text>
        </View>
      </View>
    </View>
  );
};

UserPost.propTypes = {
  firstName: PropTypes.string.isRequired,
  lastName: PropTypes.string.isRequired,
  location: PropTypes.string.isRequired,
  image: PropTypes.any.isRequired,
  profileImage: PropTypes.any.isRequired,
  likes: PropTypes.number.isRequired,
  comments: PropTypes.number.isRequired,
  bookmarks: PropTypes.number.isRequired,
};

export default UserPost;
