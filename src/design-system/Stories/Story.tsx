import { StyleSheet, View } from 'react-native';
import { StoryModel } from './';
import Animated, {
  Extrapolation,
  SharedValue,
  interpolate,
  useAnimatedStyle,
} from 'react-native-reanimated';
import Colors from '../Color';
import Font from '../Font';

type StoryProps = {
  story: StoryModel;
  pageIndexValue: SharedValue<number>;
  index: number;
};

const width = 200;

const Story = (props: StoryProps) => {
  const { story, pageIndexValue, index } = props;

  const animatedStyle = useAnimatedStyle(() => ({
    transform: [
      {
        perspective: 500,
      },
      {
        rotateY: `${interpolate(
          pageIndexValue.value,
          [index - 1, index, index + 1],
          [90, 0, -90],
          Extrapolation.CLAMP,
        )}deg`,
      },
    ],
  }));

  return (
    <Animated.View
      style={[
        styles.image,
        animatedStyle,
        { backgroundColor: Colors[story.color] },
      ]}>
      <Font type="large_title_regular">{index}</Font>
    </Animated.View>
  );
};

const styles = StyleSheet.create({
  image: {
    width,
    height: 300,
    backfaceVisibility: 'hidden',
    transformOrigin: ['50%', '50%', -width / 2],
    position: 'absolute',
  },
});

export default Story;
