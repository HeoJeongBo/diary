import { useEffect } from 'react';
import {
  Easing,
  EasingFunction,
  cancelAnimation,
  useSharedValue,
  withRepeat,
  withTiming,
} from 'react-native-reanimated';

type UseLoopProps = {
  duration?: number;
  fromStart?: boolean;
  easing?: EasingFunction;
};

export const useLoop = (props: UseLoopProps) => {
  const {
    duration = 2 * 1000,
    fromStart = true,
    easing = Easing.inOut(Easing.ease),
  } = props;

  const progress = useSharedValue(fromStart ? 0 : 1);

  useEffect(() => {
    progress.value = withRepeat(
      withTiming(fromStart ? 1 : 0, {
        duration,
        easing,
      }),
      -1,
      true,
    );
    return () => {
      cancelAnimation(progress);
    };
  }, [duration, progress]);

  return progress;
};
