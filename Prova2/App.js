import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import HomeScreen from './screens/HomeScreen';
import DayList from './screens/DayList'
import WeekList from './screens/WeekList'

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Início" component={HomeScreen} />
        <Stack.Screen name="Compromissos do dia" component={DayList} />
        <Stack.Screen name="Compromissos da semana" component={WeekList} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}