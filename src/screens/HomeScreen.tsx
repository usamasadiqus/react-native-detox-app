import React from 'react';
import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import {useAuth} from './../context/AuthContext';
import Colors from './../utils/colors';
import {FONTSCALE} from './../utils/constants';

const HomeScreen: React.FC = (): React.JSX.Element => {
  const {logout, name} = useAuth();

  return (
    <View style={styles.container} testID="home">
      <Text style={styles.text}>Welcome {name ?? 'User'}</Text>
      <TouchableOpacity onPress={() => logout()}>
        <Text style={styles.logout}>Logout</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: Colors.white,
  },
  text: {
    color: Colors.black,
    fontFamily: 'Inter-Regular',
    fontSize: FONTSCALE * 18,
    lineHeight: FONTSCALE * 24,
  },
  logout: {
    fontSize: FONTSCALE * 18,
    marginTop: 20,
  },
});

export default HomeScreen;
