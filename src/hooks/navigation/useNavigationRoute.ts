import { RouteProp, useRoute } from '@react-navigation/native';
import { RouteType } from '@types';

const useNavigationRoute = () => {
  const route = useRoute<RouteProp<RouteType.AllRouteList>>();

  return route;
};

export default useNavigationRoute;
