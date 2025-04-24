import {StyleSheet} from 'react-native';
import {getFontFamily} from '../../assets/fonts/helper';
import { horizontalScale, scaleFontSize, verticalScale } from '../../assets/styles/scaling';

const style = StyleSheet.create({
  header: {
    marginTop:verticalScale(30),
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    // marginHorizontal: 30,
  },
  envelopIcon: {
    padding: horizontalScale(14),
    backgroundColor: '#F9FAFB',
    borderRadius: horizontalScale(100),
  },
  messageNumberContainer: {
    backgroundColor: '#F35BAC',
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'row',
    position: 'absolute',
    width: horizontalScale(10),
    height: horizontalScale(10),
    borderRadius: horizontalScale(100),
    right: horizontalScale(10),
    top: verticalScale(10),
  },
  messageNumber: {
    color: 'white',
    fontFamily: getFontFamily('Montserrat', '600'),
    fontSize:scaleFontSize(6),
  },
  userStoryContainer: {
    marginTop: verticalScale(20),
    // marginHorizontal: 28,
  },
  userPostContainer: {
    marginHorizontal:horizontalScale(24),
  },
});

export default style;
