import React from 'react';
import store from './_redux/store'
import { Provider } from 'react-redux';
import { StyleSheet, View, Dimensions } from 'react-native';
import Constants from 'expo-constants'
import { PortalProvider } from '@gorhom/portal';
import TestPage from './_components/TestPage/TestPage';
import AppLoading from 'expo-app-loading'
import { 
  useFonts, 
  Inter_400Regular, 
  Inter_500Medium, 
  Inter_600SemiBold, 
  Inter_700Bold 
} from '@expo-google-fonts/inter';

export const { height, width } = Dimensions.get('window')

export default function App() {
  // On start-up, app needs to load the fonts files first.
  const [isLoaded, error] = useFonts({
    Inter_400Regular, 
    Inter_500Medium, 
    Inter_600SemiBold,
    Inter_700Bold
  });

  if (!isLoaded) {
    if (error) {
      // shows error with loading fonts in the terminal, if any
      console.log(error)
      alert(error)
    } else {
      return <AppLoading />
    }
  }

  return (
    <Provider store={store}>
      <PortalProvider>
        <View style={styles.container}>
          <TestPage />
          {/* <View style={{ flex : 1 }} /> */}
        </View>
      </PortalProvider>
    </Provider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#DBEAFE',
    alignItems: 'center',
    justifyContent: 'flex-end',
    paddingTop: Constants.statusBarHeight,
  },
});
