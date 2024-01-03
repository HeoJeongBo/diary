import { Dimensions } from 'react-native';

export const DEFAULT_SCREEN_BOTTOM_PADDING = 8;
export const DEFAULT_PADDING = 20;

const { width: _SCREEN_WIDTH, height: _SCREEN_HEIGHT } =
  Dimensions.get('screen');

export const SCREEN_WIDTH = Math.min(_SCREEN_WIDTH, _SCREEN_HEIGHT);
export const SCREEN_HEIGHT = Math.max(_SCREEN_WIDTH, _SCREEN_HEIGHT);
