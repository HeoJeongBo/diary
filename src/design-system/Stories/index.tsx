import { StyleSheet, View } from 'react-native';
import Animated from 'react-native-reanimated';
import Story from './Story';
import { ColorKey } from '../Color';

export type StoryModel = {
  id: number;
  color: ColorKey;
  user: string;
  avatar: string;
};

type StoriesProps = {
  stories: StoryModel[];
};

const Stories = (props: StoriesProps) => {
  const { stories } = props;

  return (
    <View style={styles.container}>
      {stories.map((story) => {
        return (
          <Animated.View style={StyleSheet.absoluteFill} key={story.id}>
            <Story story={story} />
          </Animated.View>
        );
      })}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
  },
});

export default Stories;
