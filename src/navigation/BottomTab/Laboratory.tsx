import {
  DS_CONSTANTS,
  Font,
  ScreenTemplate,
  SvgICon,
  TopNav,
} from '@design-system';
import { useNavigationService } from '@hooks/navigation';
import { ScrollView, StyleSheet, TouchableOpacity, View } from 'react-native';

const LaboratoryTab = () => {
  const { navigate } = useNavigationService();

  return (
    <ScreenTemplate>
      <TopNav title="실험실" />
      <ScrollView style={styles.container}>
        <TouchableOpacity onPress={() => navigate('GlassmorphismScreen')}>
          <View style={styles.item}>
            <Font type="title_2_emphasized">Glassmorphism</Font>
            <SvgICon iconName="right" color="brown500" />
          </View>
        </TouchableOpacity>
      </ScrollView>
    </ScreenTemplate>
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
