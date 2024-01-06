import { DS_CONSTANTS } from '@design-system';
import { useState } from 'react';
import { StyleSheet, TouchableOpacity, View } from 'react-native';
import { Gesture, GestureDetector } from 'react-native-gesture-handler';
import Animated, {
  runOnJS,
  useSharedValue,
  withSequence,
  withTiming,
} from 'react-native-reanimated';
import { ColorKey } from '../Color';
import Font from '../Font';
import Story from './Story';

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

  const pageIndexValue = useSharedValue(0);

  const gesturingValue = useSharedValue(0);

  const [gestureEnabled, setGestureEnabled] = useState(true);

  const handleIndexOnGestureEnd = (transitionX: number) => {
    const nextIndex =
      pageIndexValue.value +
      Math.round((transitionX / DS_CONSTANTS.SCREEN_WIDTH) * -1);

    pageIndexValue.value = withSequence(
      withTiming(gesturingValue.value, {}, () => {
        runOnJS(setGestureEnabled)(false);
      }),
      withTiming(nextIndex, { duration: 2000 }),
    );
  };

  const pan = Gesture.Pan()
    .onBegin(() => {
      gesturingValue.value = pageIndexValue.value;
      runOnJS(setGestureEnabled)(true);
    })
    .onChange((event) => {
      gesturingValue.value =
        pageIndexValue.value - event.translationX / DS_CONSTANTS.SCREEN_WIDTH;
    })
    .onFinalize((event) => {
      runOnJS(handleIndexOnGestureEnd)(event.translationX);
    });

  const goToNext = () => {
    pageIndexValue.value = withTiming(pageIndexValue.value + 1, {
      duration: 2000,
    });
  };

  const goToPrev = () => {
    pageIndexValue.value = withTiming(pageIndexValue.value - 1, {
      duration: 2000,
    });
  };

  return (
    <GestureDetector gesture={pan}>
      <View style={styles.container}>
        {stories.map((story, index) => {
          return (
            <Animated.View
              key={story.id}
              style={[
                StyleSheet.absoluteFill,
                {
                  justifyContent: 'center',
                  alignItems: 'center',
                },
              ]}>
              <Story
                story={story}
                pageIndexValue={
                  gestureEnabled ? gesturingValue : pageIndexValue
                }
                index={index}
              />
            </Animated.View>
          );
        })}
        <View
          style={{
            position: 'absolute',
            bottom: 200,
            flexDirection: 'row',
            gap: 40,
          }}>
          <TouchableOpacity onPress={goToPrev}>
            <View>
              <Font type="title_3_emphasized">이전</Font>
            </View>
          </TouchableOpacity>
          <TouchableOpacity onPress={goToNext}>
            <View>
              <Font type="title_3_emphasized">다음</Font>
            </View>
          </TouchableOpacity>
        </View>
      </View>
    </GestureDetector>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default Stories;
