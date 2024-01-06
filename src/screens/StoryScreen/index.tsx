import { ColorKey, Stories } from '@design-system';
import { ScreenType } from '@types';
import { StyleSheet, View } from 'react-native';

const colorKeyDump: ColorKey[] = [
  'black500',
  'brown500',
  'black900',
  'brown500',
];

const storyDump = Array.from({ length: 10 }).map((_, idx) => ({
  id: idx,
  color: colorKeyDump[idx % colorKeyDump.length],
  user: 'Test',
  avatar: 'Test',
}));

const StoryScreen = () => {
  return (
    <View style={styles.container}>
      <Stories stories={storyDump} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
  },
});

export type StoryScreenParams = {
  StoryScreen: undefined;
};

export default {
  Screen: StoryScreen,
} as ScreenType.ScreenType;
