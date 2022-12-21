import {TailwindProvider, useTailwind} from 'tailwind-rn';
import CustomerScreen from './screens/CustomerScreen';
import utilities from './tailwind.json';
import { NavigationContainer } from '@react-navigation/native';
import RootNavigator from './Navigator/RootNavigator';
export default function App() {
  return (
    //@ts-ignore - TailwindProvider is missing a type definition 
    <TailwindProvider utilities={utilities}>
      <NavigationContainer>
        <RootNavigator/>
      </NavigationContainer>
    </TailwindProvider>
  );
}



