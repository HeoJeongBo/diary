import { View } from 'react-native';
import { SvgXml } from 'react-native-svg';
import { IconNames } from './SvgIcon.types';
import Icons from './assets';
import Colors, { ColorKey } from '../Color';

type SvgIconProps = {
  iconName: IconNames;
  size?: number;
  color?: ColorKey;
};

const SvgICon = (props: SvgIconProps) => {
  const { iconName, size = 20, color = 'black900' } = props;

  return (
    <View style={{ width: size, height: size }}>
      <SvgXml xml={Icons[iconName]} color={Colors[color]} />
    </View>
  );
};

export default SvgICon;
