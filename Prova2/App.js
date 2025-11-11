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
        <Stack.Screen name="Tarefas do Dia" component={DayList} />
        <Stack.Screen name="Tarefas da Semana" component={WeekList} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}