import {createNativeStackNavigator} from '@react-navigation/native-stack';
import React from 'react';
import {SafeAreaView, StyleSheet} from 'react-native';
import HomeScreen from './../screens/HomeScreen';

const Stack = createNativeStackNavigator();

const MainStack: React.FC = () => {
  return (
    <SafeAreaView style={styles.safeArea}>
      <Stack.Navigator screenOptions={{headerShown: false}}>
        <Stack.Screen name="Home" component={HomeScreen} />
      </Stack.Navigator>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
  },
});

export default MainStack;
