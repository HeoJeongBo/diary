import { StyleSheet, View } from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { TOP_NAV_HEIGHT } from './TopNav.constants';
import { ReactElement } from 'react';
import TopNavText from './TopNavText';

type TopNavProps = {
  title?: string;
  left?: ReactElement;
  right?: ReactElement;
};

const TopNav = (props: TopNavProps) => {
  const { left, right, title } = props;
  const { top } = useSafeAreaInsets();

  return (
    <View style={StyleSheet.flatten([styles.wrapper, { paddingTop: top }])}>
      <View style={styles.container}>
        {left && left}
        {title && <TopNavText title={title} />}
        {right && right}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  wrapper: {
    width: '100%',
  },
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    width: '100%',
    height: TOP_NAV_HEIGHT,
  },
});

export default TopNav;
