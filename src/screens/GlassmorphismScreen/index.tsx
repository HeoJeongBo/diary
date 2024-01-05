import { DS_CONSTANTS } from '@design-system';
import { useLoop } from '@hooks/animation';
import {
  BackdropBlur,
  Canvas,
  Circle,
  Fill,
  LinearGradient,
  add,
  mix,
  sub,
  vec,
} from '@shopify/react-native-skia';
import { ScreenType } from '@types';
import { useMemo } from 'react';
import { View } from 'react-native';
import { useDerivedValue } from 'react-native-reanimated';

const GlassmorphismScreen = () => {
  const c = vec(DS_CONSTANTS.SCREEN_WIDTH / 2, DS_CONSTANTS.SCREEN_HEIGHT / 2);

  const rect = useMemo(
    () => ({ x: 0, y: c.y, width: DS_CONSTANTS.SCREEN_WIDTH, height: c.y }),
    [c.y, DS_CONSTANTS.SCREEN_WIDTH],
  );

  const r = c.x - 32;

  const progress = useLoop({ duration: 2000 });

  const start = useDerivedValue(
    () => sub(c, vec(0, mix(progress.value, r, r / 2))),
    [progress],
  );
  const end = useDerivedValue(
    () => add(c, vec(0, mix(progress.value, r, r / 2))),
    [],
  );

  const radius = useDerivedValue(
    () => mix(progress.value, r, r / 2),
    [progress],
  );

  return (
    <View style={{ flex: 1 }}>
      <Canvas style={{ flex: 1 }}>
        <Fill color="white" />
        <LinearGradient
          start={start}
          end={end}
          colors={['#FFF723', '#E70696']}
        />
        <Circle c={c} r={radius} />
        <BackdropBlur blur={10} clip={rect} />
      </Canvas>
    </View>
  );
};

export type GlassmorphismScreenParams = {
  GlassmorphismScreen: undefined;
};

export default {
  Screen: GlassmorphismScreen,
} as ScreenType.ScreenType;
