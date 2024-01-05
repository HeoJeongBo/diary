import { StyleSheet, Text, TextProps } from 'react-native';
import FONT_STYLE from './Font.constants';
import Colors, { ColorKey } from '../Color';
import { PropsWithChildren } from 'react';

export type FontProps = PropsWithChildren<
  TextProps & {
    type: keyof typeof FONT_STYLE;
    color?: ColorKey;
  }
>;

const Font = (props: FontProps) => {
  const { type, color = 'black900', style, children, ...textProps } = props;

  return (
    <Text
      {...textProps}
      allowFontScaling={false}
      style={StyleSheet.flatten([
        { color: Colors[color], ...FONT_STYLE[type] },
        style,
      ])}>
      {children}
    </Text>
  );
};

export default Font;
