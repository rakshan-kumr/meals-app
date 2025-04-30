import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { SafeAreaProvider, SafeAreaView } from 'react-native-safe-area-context';

import CategoriesScreen from './screens/CategoriesScreen';
import MealsOverviewScreen from './screens/MealsOverviewScreen';
import MealsDetailsScreen from './screens/MealsDetailsScreen';
import FavoritesScreen from './screens/FavoritesScreen';
import FavouriteContextProvider from './store/context/favourites-context';
// import { SafeAreaView } from 'react-native';

const Stack = createNativeStackNavigator();
const Drawer = createDrawerNavigator();

const DrawerScreen = () => {
  return (
    // <SafeAreaProvider style={styles.container}>
    <Drawer.Navigator
      screenOptions={{
        drawerActiveBackgroundColor: 'black',
        drawerActiveTintColor: 'white',
        drawerItemStyle: {
          borderRadius: 10,
        },
        drawerType: 'slide',
      }}
    >
      <Drawer.Screen
        name='MealsCategories'
        component={CategoriesScreen}
        options={{
          title: 'Meals Categories',
        }}
      />

      <Drawer.Screen
        name='Favourites'
        component={FavoritesScreen}
        options={{
          title: 'Favourite Meals',
        }}
      />
    </Drawer.Navigator>
    // </SafeAreaProvider>
  );
};

export default function App() {
  return (
    <SafeAreaProvider>
      {/* <SafeAreaView style={{ flex: 1 }}> */}
      <FavouriteContextProvider>
        <NavigationContainer>
          <Stack.Navigator>
            <Stack.Screen
              name='Drawer'
              component={DrawerScreen}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name='MealsOverview'
              component={MealsOverviewScreen}
            />
            <Stack.Screen name='MealsDetails' component={MealsDetailsScreen} />
          </Stack.Navigator>
        </NavigationContainer>
      </FavouriteContextProvider>
      {/* </SafeAreaView> */}
    </SafeAreaProvider>
  );
}
