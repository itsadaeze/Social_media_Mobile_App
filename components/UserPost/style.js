import {StyleSheet} from 'react-native';

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
    marginLeft: 10,
  },
  postImageContainer: {
    alignItems: 'center',
    marginTop: 10,
    marginBottom: 10,
  },
  IconsWrapper: {
    flexDirection: 'row',
    width: 50,
    justifyContent: 'space-between',
  },
  iconsTextContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 10,
  },
  iconText: {
    color: '#79869F',
    marginLeft: 3,
  },
});

export default style;
