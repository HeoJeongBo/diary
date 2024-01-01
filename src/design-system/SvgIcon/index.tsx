import { View } from 'react-native';
import { SvgXml } from 'react-native-svg';
import { IconNames } from './SvgIcon.types';
import Icons from './assets';

type SvgIconProps = {
  iconName: IconNames;
  size?: number;
};

const SvgICon = (props: SvgIconProps) => {
  const { iconName, size = 20 } = props;

  return (
    <View style={{ width: size, height: size }}>
      <SvgXml xml={Icons[iconName]} color={'black'} />
    </View>
  );
};

export default SvgICon;
