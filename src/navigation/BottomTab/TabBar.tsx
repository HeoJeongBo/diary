import { DS_CONSTANTS, IconNames, SvgICon } from '@design-system';
import { BottomTabBarProps } from '@react-navigation/bottom-tabs';
import { StyleSheet, TouchableOpacity, View } from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { BottomTabList } from '.';
import { useNavigationService } from '@hooks/navigation';

type TabBarProps = BottomTabBarProps;

const BOTTOM_TAB_UI_INFOS: Record<
  keyof BottomTabList,
  {
    label: string;
    iconName: IconNames;
  }
> = {
  HomeTab: {
    iconName: 'book',
    label: '홈',
  },
  MyInformationTab: {
    iconName: 'pallette',
    label: '내 정보',
  },
};

const TabBar = (props: TabBarProps) => {
  const { bottom } = useSafeAreaInsets();

  const { navigate } = useNavigationService();

  const handlePress = (routeName: keyof BottomTabList) => {
    return navigate(routeName);
  };

  return (
    <View
      style={StyleSheet.flatten([
        styles.container,
        { paddingBottom: bottom || DS_CONSTANTS.DEFAULT_SCREEN_BOTTOM_PADDING },
      ])}>
      {props.state.routes.map((route, index) => {
        const isFocused = props.state.index === index;

        const routeName = route.name as keyof BottomTabList;

        return (
          <TouchableOpacity
            key={route.key}
            style={styles.item}
            onPress={() => handlePress(routeName)}>
            <SvgICon
              iconName={BOTTOM_TAB_UI_INFOS[routeName].iconName}
              color={isFocused ? 'black900' : 'black600'}
            />
          </TouchableOpacity>
        );
      })}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    width: '100%',
    flexDirection: 'row',
  },
  item: {
    flex: 1,
    height: 50,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default TabBar;
