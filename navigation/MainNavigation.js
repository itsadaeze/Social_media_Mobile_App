import { createNativeStackNavigator } from '@react-navigation/native-stack';

import { Routes } from './Route';
import Home from '../screens/Home/home';

const Stack = createNativeStackNavigator();

const MainNavigation = () =>{
    return  <Stack.Navigator>
        <Stack.Screen name={Routes.Home} component={Home} />
    </Stack.Navigator>;
};

export default MainNavigation;
