import { StyleSheet, View } from 'react-native';
import { StoryModel } from './';
import Colors from '../Color';

type StoryProps = {
  story: StoryModel;
};

const Story = (props: StoryProps) => {
  const { story } = props;
  return (
    <View
      style={StyleSheet.flatten([
        styles.image,
        { backgroundColor: Colors[story.color] },
      ])}
    />
  );
};

const styles = StyleSheet.create({
  image: {
    ...StyleSheet.absoluteFillObject,
    width: null,
    height: null,
  },
});

export default Story;
