import { StyleSheet} from 'react-native';
import { getFontFamily } from '../../assets/fonts/helper';

const style = StyleSheet.create({
    storyContainer: {
        marginRight: 20,
    },
    ImageContainer:{
       borderColor:'#F35BAC',
       borderWidth: 1,
       padding:4,
       borderRadius: 65,
    },
    firstName: {
        textAlign: 'center',
        marginTop: 10,
        fontFamily: getFontFamily('Montserrat', '500'),
        fontSize: 14,
        color: '#022150',
    },
    image: {
        width: 65,
        height: 65,
    },
});
export default style;
