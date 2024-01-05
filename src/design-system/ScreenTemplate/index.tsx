import { PropsWithChildren } from 'react';
import { StyleSheet, View } from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';

type ScreenTemplateProps = PropsWithChildren & {
  usePaddingTop?: boolean;
  usePaddingBottom?: boolean;
};

const ScreenTemplate = (props: ScreenTemplateProps) => {
  const { usePaddingTop = false, usePaddingBottom = false, children } = props;

  const { top, bottom } = useSafeAreaInsets();

  return (
    <View
      style={StyleSheet.flatten([
        styles.container,
        {
          paddingTop: usePaddingTop ? top : 0,
          paddingBottom: usePaddingBottom ? bottom : 0,
        },
      ])}>
      {children}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: '100%',
    backgroundColor: 'white',
  },
});

export default ScreenTemplate;
