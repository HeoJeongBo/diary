import {
  BottomTabNavigationOptions,
  createBottomTabNavigator,
} from '@react-navigation/bottom-tabs';
import HomeTab from './HomeTab';
import MyInformationTab from './MyInformationTab';
import TabBar from './TabBar';
import LaboratoryTab from './Laboratory';
import Stories from './Stories';

const BottomTab = createBottomTabNavigator();

const defaultOptions: BottomTabNavigationOptions = {
  headerShown: false,
};

const BottomTabNavigation = () => {
  return (
    <BottomTab.Navigator
      screenOptions={defaultOptions}
      tabBar={(props) => <TabBar {...props} />}>
      <BottomTab.Screen name="HomeTab" component={HomeTab} />
      <BottomTab.Screen name="MyInformationTab" component={MyInformationTab} />
      <BottomTab.Screen name="LaboratoryTab" component={LaboratoryTab} />
      <BottomTab.Screen name="Stories" component={Stories} />
    </BottomTab.Navigator>
  );
};

export type BottomTabList = {
  HomeTab: undefined;
  MyInformationTab: undefined;
  LaboratoryTab: undefined;
  Stories: undefined;
};

export default BottomTabNavigation;
