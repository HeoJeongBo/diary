import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Screens from '@screens';
import { ScreenType } from '@types';
import { tsUtils } from '@utils';
import BottomTabNavigation from './BottomTab';

const RootStack = createNativeStackNavigator();

const defaultScreenOptions: ScreenType.ScreenType['options'] = {
  headerShown: false,
};

const RootNavigation = () => {
  const allScreens = tsUtils.typedObjectKeys(Screens).map((screenName) => ({
    key: screenName,
    ...Screens[screenName],
  }));

  return (
    <RootStack.Navigator>
      <RootStack.Screen
        name="BottomTab"
        component={BottomTabNavigation}
        options={defaultScreenOptions}
      />
      {allScreens.map((screen) => (
        <RootStack.Screen
          key={screen.key}
          name={screen.key}
          component={screen.Screen}
          options={{
            ...defaultScreenOptions,
            ...screen.options,
          }}
        />
      ))}
    </RootStack.Navigator>
  );
};

export default RootNavigation;
