import {
  DS_CONSTANTS,
  Font,
  ScreenTemplate,
  SvgICon,
  TopNav,
} from '@design-system';
import { useNavigationService } from '@hooks/navigation';
import { RouteType } from '@types';
import { ScrollView, StyleSheet, TouchableOpacity, View } from 'react-native';

type Item = {
  screen: keyof RouteType.AllRouteList;
  text: string;
};

const items: Item[] = [
  {
    screen: 'StoryScreen',
    text: '스토리',
  },
  {
    screen: 'GlassmorphismScreen',
    text: 'Glassmorphism',
  },
];

const LaboratoryTab = () => {
  const { navigate } = useNavigationService();

  return (
    <ScreenTemplate>
      <TopNav title="실험실" />
      <ScrollView style={styles.container}>
        {items.map((item) => {
          return (
            <TouchableOpacity
              onPress={() => navigate(item.screen)}
              key={item.text}>
              <View style={styles.item}>
                <Font type="title_2_emphasized">{item.text}</Font>
                <SvgICon iconName="right" color="brown500" />
              </View>
            </TouchableOpacity>
          );
        })}
      </ScrollView>
    </ScreenTemplate>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
  },
  item: {
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: DS_CONSTANTS.DEFAULT_PADDING,
  },
});

export default LaboratoryTab;
