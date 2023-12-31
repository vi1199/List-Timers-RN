import {
  NativeStackNavigationOptions,
  createNativeStackNavigator,
} from '@react-navigation/native-stack';
import {Home} from '../screens/home/component/TimerInput.screen';
import {routes} from './screens';
import {TimerList} from '../screens/home/TimerList.screen';

export type RootStackParamList = {
  HOME: undefined;
  TimerList: undefined;
};

const navOptions: NativeStackNavigationOptions = {
  headerShown: false,
};
const HomeNavigator = () => {
  const Stack = createNativeStackNavigator<RootStackParamList>();
  return (
    <Stack.Navigator screenOptions={navOptions}>
      <Stack.Screen name={routes.HOME} component={Home} />
      <Stack.Screen name={routes.TimerList} component={TimerList} />
    </Stack.Navigator>
  );
};

export const AppNavigator = () => {
  return <HomeNavigator />;
};
