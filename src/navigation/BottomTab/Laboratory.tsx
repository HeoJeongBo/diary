import { Colors, DS_CONSTANTS, Font, SvgICon } from '@design-system';
import { RouteType } from '@types';
import { StyleSheet, TouchableOpacity, View } from 'react-native';

type Item = {
  screen: keyof RouteType.AllRouteList;
  text: string;
};

const items: Item[] = [
  {
    screen: 'StoryScreen',
    text: '스토리',
  },
];

const LaboratoryTab = () => {
  return (
    <View style={styles.container}>
      {items.map((item) => {
        return (
          <TouchableOpacity key={item.screen}>
            <View style={styles.item}>
              <Font type="body_3_emphasized">{item.text}</Font>
              <SvgICon iconName="right" />
            </View>
          </TouchableOpacity>
        );
      })}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.black100,
  },
  item: {
    width: '100%',
    padding: DS_CONSTANTS.DEFAULT_PADDING,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    backgroundColor: 'red',
  },
});

export default LaboratoryTab;
