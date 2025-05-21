import {useNavigation} from '@react-navigation/native';
import React, {useState} from 'react';
import {
  Alert,
  KeyboardAvoidingView,
  SafeAreaView,
  StatusBar,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import Logo from './../../assets/images/Logo';
import Button from './../components/Button';
import Input from './../components/Input';
import {useAuth} from './../context/AuthContext';
import Colors from './../utils/colors';
import {BEHAVIOR, FONTSCALE, HEIGHT, WIDTH} from './../utils/constants';

const LoginScreen = (): React.JSX.Element => {
  const {login} = useAuth();

  const navigation: any = useNavigation();

  const [email, setEmail] = useState<string>('');
  const [password, setPassword] = useState<string>('');

  const handleSignin = (): void => {
    if (!/^\S+@\S+\.\S+$/.test(email)) {
      Alert.alert(
        'Invalid Email',
        'Please enter a valid email address',
        [{text: 'OK'}],
        {cancelable: false},
      );
      return;
    }

    if (password.length < 6) {
      Alert.alert(
        'Weak Password',
        'Password should be at least 6 characters long',
        [{text: 'OK'}],
        {cancelable: false},
      );
      return;
    }

    login('');
  };

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar
        backgroundColor={Colors.reddishOrange}
        barStyle="light-content"
      />

      <KeyboardAvoidingView behavior={BEHAVIOR}>
        <View style={styles.logoContainer}>
          <Logo />
        </View>

        <View style={styles.mainContainer}>
          <View style={styles.inputContainer}>
            <Input
              testID="email"
              placeholder="name@work-email.com"
              placeholderTextColor={Colors.darkGrey}
              value={email}
              onChangeText={setEmail}
            />
            <Input
              testID="password"
              placeholder="***********"
              placeholderTextColor={Colors.darkGrey}
              value={password}
              onChangeText={setPassword}
              textContentType="password"
            />
          </View>

          <Button title="Sign In with Email" onPress={() => handleSignin()} />

          <TouchableOpacity
            testID="register_nav"
            onPress={() => navigation.navigate('Register')}>
            <Text
              style={[
                styles.descriptionText,
                {
                  paddingHorizontal: WIDTH * 0.11,
                },
              ]}>
              Don't have an account. Create new one.
            </Text>
          </TouchableOpacity>
        </View>
      </KeyboardAvoidingView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    backgroundColor: Colors.reddishOrange,
    padding: WIDTH * 0.02,
  },
  logoContainer: {
    flex: 0.8,
    justifyContent: 'center',
    alignItems: 'center',
  },
  mainContainer: {
    flex: 1,
    width: '90%',
  },
  inputContainer: {
    marginBottom: HEIGHT * 0.02,
    gap: 10,
  },
  descriptionText: {
    marginTop: HEIGHT * 0.04,
    fontFamily: 'Inter-Regular',
    fontSize: FONTSCALE * 16,
    lineHeight: FONTSCALE * 20,
    color: Colors.white,
    textAlign: 'center',
  },
});

export default LoginScreen;
