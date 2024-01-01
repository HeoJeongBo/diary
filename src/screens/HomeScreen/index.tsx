import { ScreenType } from '@types';
import { View } from 'react-native';

const HomeScreen = () => {
  return <View style={{ flex: 1, backgroundColor: 'white' }} />;
};

export default {
  Screen: HomeScreen,
} as ScreenType.ScreenType;
