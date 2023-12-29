import { RootNavigation } from '@navigation';
import { NavigationContainer } from '@react-navigation/native';
import { GestureHandlerRootView } from 'react-native-gesture-handler';

const App = () => {
  return (
    <GestureHandlerRootView style={{ flex: 1 }}>
      <NavigationContainer>
        <RootNavigation />
      </NavigationContainer>
    </GestureHandlerRootView>
  );
};

export default App;
