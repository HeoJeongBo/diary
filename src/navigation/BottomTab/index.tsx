import {
  BottomTabNavigationOptions,
  createBottomTabNavigator,
} from '@react-navigation/bottom-tabs';
import HomeTab from './HomeTab';
import MyInformationTab from './MyInformationTab';

const BottomTab = createBottomTabNavigator();

const defaultOptions: BottomTabNavigationOptions = {
  headerShown: false,
};

const BottomTabNavigation = () => {
  return (
    <BottomTab.Navigator screenOptions={defaultOptions}>
      <BottomTab.Screen name="HomeTab" component={HomeTab} />
      <BottomTab.Screen name="MyInformationTab" component={MyInformationTab} />
    </BottomTab.Navigator>
  );
};

export default BottomTabNavigation;
