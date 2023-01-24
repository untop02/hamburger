import 'react-native-gesture-handler';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { NavigationContainer } from '@react-navigation/native';
import Profile from '../views/Profile';
import Upload from '../views/Upload';
import Home from '../views/Home';
import HamburgerIcon from '../components/HamburgerIcon';

const Drawer = createDrawerNavigator();

const Navigator = () => {
  return (
    <NavigationContainer>
      <Drawer.Navigator
        initialRouteName="Home"
        screenOptions={({ navigation }) => ({
          headerLeft: (props) => <HamburgerIcon navigation={navigation} />,
        })}
      >
        <Drawer.Screen name="Home" component={Home} />
        <Drawer.Screen name="Profile" component={Profile} />
        <Drawer.Screen name="Upload" component={Upload} />
      </Drawer.Navigator>
    </NavigationContainer>
  );
};

export default Navigator;
