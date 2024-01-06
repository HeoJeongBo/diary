import { StyleSheet, TouchableOpacity, View } from 'react-native';
import Animated, { useSharedValue, withTiming } from 'react-native-reanimated';
import Story from './Story';
import { ColorKey } from '../Color';
import Font from '../Font';

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
              pageIndexValue={pageIndexValue}
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
