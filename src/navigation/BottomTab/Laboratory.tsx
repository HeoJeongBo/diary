import { DS_CONSTANTS, Font, SvgICon } from '@design-system';
import { useNavigationService } from '@hooks/navigation';
import { StyleSheet, TouchableOpacity, View } from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';

const LaboratoryTab = () => {
  const { top } = useSafeAreaInsets();

  const { navigate } = useNavigationService();

  return (
    <View
      style={StyleSheet.flatten([styles.container, { paddingTop: top || 8 }])}>
      <TouchableOpacity onPress={() => navigate('GlassmorphismScreen')}>
        <View style={styles.item}>
          <Font type="title_2_emphasized">Glassmorphism</Font>
          <SvgICon iconName="right" color="brown500" />
        </View>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: DS_CONSTANTS.DEFAULT_PADDING,
    flex: 1,
    backgroundColor: 'white',
  },
  item: {
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingVertical: 8,
  },
});

export default LaboratoryTab;
