import { ScreenType } from '@types';
import { View } from 'react-native';

const StoryScreen = () => {
  return <View></View>;
};

export type StoryScreenParams = {
  StoryScreen: undefined;
};

export default {
  Screen: StoryScreen,
} as ScreenType.ScreenType;
