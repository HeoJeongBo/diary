import { DS_CONSTANTS, IconNames, SvgICon } from '@design-system';
import { BottomTabBarProps } from '@react-navigation/bottom-tabs';
import { StyleSheet, TouchableOpacity, View } from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { BottomTabList } from '.';

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
    iconName: 'person',
    label: '내 정보',
  },
};

const TabBar = (props: TabBarProps) => {
  const { bottom } = useSafeAreaInsets();

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
          <TouchableOpacity key={route.key} style={styles.item}>
            <SvgICon iconName={BOTTOM_TAB_UI_INFOS[routeName].iconName} />
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
