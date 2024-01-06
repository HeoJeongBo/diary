import { StyleSheet, View } from 'react-native';
import Font from '../Font';

type TopNavTextProps = {
  title: string;
};

const TopNavText = (props: TopNavTextProps) => {
  const { title } = props;

  return (
    <View style={styles.container}>
      <Font
        type="title_1_regular"
        numberOfLines={1}
        style={{ textAlign: 'center' }}>
        {title}
      </Font>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    position: 'absolute',
    left: '20%',
    width: '60%',
  },
});

export default TopNavText;
