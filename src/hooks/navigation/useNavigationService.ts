import { NavigationProp, useNavigation } from '@react-navigation/native';
import { RouteType } from '@types';

const useNavigationService = () => {
  const navigation = useNavigation<NavigationProp<RouteType.AllRouteList>>();

  return navigation;
};

export default useNavigationService;
