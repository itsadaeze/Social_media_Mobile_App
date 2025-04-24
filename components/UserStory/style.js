import { StyleSheet} from 'react-native';
import { getFontFamily } from '../../assets/fonts/helper';
import { horizontalScale, scaleFontSize, verticalScale } from '../../assets/styles/scaling';

const style = StyleSheet.create({
    storyContainer: {
        marginRight: horizontalScale(20),
    },
    ImageContainer:{
       borderColor:'#F35BAC',
       borderWidth: 1,
       padding: horizontalScale(3),
       borderRadius: 65,
    },
    firstName: {
        textAlign: 'center',
        marginTop: verticalScale(10),
        fontFamily: getFontFamily('Montserrat', '500'),
        fontSize: scaleFontSize(14),
        color: '#022150',
    },
  
});
export default style;
