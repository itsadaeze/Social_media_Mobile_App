import {StyleSheet} from 'react-native';
import { getFontFamily } from '../../assets/fonts/helper';
import { horizontalScale, scaleFontSize, verticalScale } from '../../assets/styles/scaling';

const style = StyleSheet.create({
  wrapper: {
    marginTop: 35,
    borderBottomWidth: 1,
    paddingBottom: 20,
    borderColor: '#EFF2F6',
  },
  userPostContainer: {
    flexDirection: 'row',
    margin: 10,
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  userDetailsContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  userDetails: {
    flexDirection: 'column',
    justifyContent: 'center',
    marginLeft: horizontalScale(10),
  },
  postImageContainer: {
    alignItems: 'center',
    marginTop: verticalScale(10),
    marginBottom: verticalScale(10),
  },
  IconsWrapper: {
    flexDirection: 'row',
    width: 50,
    justifyContent: 'space-between',
  },
  iconsTextContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: verticalScale(10),
  },
  iconText: {
    color: '#79869F',
    marginLeft: horizontalScale(3) ,
  },
  location: {
    color: '#79869f',
    fontFamily: getFontFamily('Montserrat', 400),
    fontSize: scaleFontSize(12),
    },
});

export default style;
