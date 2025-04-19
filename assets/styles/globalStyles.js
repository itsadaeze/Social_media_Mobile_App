import {StyleSheet} from 'react-native';
import {getFontFamily} from '../fonts/helper';

const globalStyle = StyleSheet.create({
  header: {
    marginTop: 30,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    // marginHorizontal: 30,
  },
  envelopIcon: {
    padding: 14,
    backgroundColor: '#F9FAFB',
    borderRadius: 100,
  },
  messageNumberContainer: {
    backgroundColor: '#F35BAC',
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'row',
    position: 'absolute',
    width: 12,
    height: 12,
    borderRadius: 100,
    right: 10,
  },
  messageNumber: {
    color: 'white',
    fontFamily: getFontFamily('Montserrat', '600'),
    fontSize: 6,
  },
  userStoryContainer: {
    marginTop: 20,
    // marginHorizontal: 28,
  },
  userPostContainer: {
    marginHorizontal: 24,
  },
});

export default globalStyle;
