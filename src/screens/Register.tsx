import { StyleSheet, View, Text, Button } from 'react-native';
import React from 'react';
import { TextInput, TouchableOpacity } from 'react-native-gesture-handler';
import { SafeAreaView } from 'react-native-safe-area-context';
import colors from '../constants/colors';
import { Zocial } from '@expo/vector-icons';
import Logo from '../components/Logo';

const Register = ({ navigation }: any) => {
  const handleLogin = (event: any) => {
    navigation.navigate('Home');
  };

  return (
    <SafeAreaView style={{ flex: 1 }}>
      <View style={styles.container}>
        <View style={styles.wFull}>
          <Logo />
          <TextInput style={styles.input} placeholder='Username' />
          <TextInput style={styles.input} placeholder='Password' />
          <TextInput style={styles.input} placeholder='Confirm Password' />
          <Button
            title='Sign Up'
            onPress={handleLogin}
            color={colors.primary}
          />
        </View>

        <View style={{ alignItems: 'center' }}>
          <Text>or</Text>
          <Text>Continue with</Text>
          <View style={styles.iconContainer}>
            <Zocial name='google' size={32} />
            <View style={styles.fbBtn}>
              <Zocial name='facebook' size={32} color={'white'} />
            </View>
          </View>
        </View>

        <View style={styles.footer}>
          <Text style={styles.footerText}>Already a user? Click </Text>
          <TouchableOpacity onPress={() => navigation.navigate('Login')}>
            <Text style={styles.signupBtn}>here</Text>
          </TouchableOpacity>
        </View>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  main: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 16,
  },
  iconContainer: {
    display: 'flex',
    flexDirection: 'row',
    gap: 4,
  },
  fbBtn: {
    borderRadius: 4,
    padding: 2,
    backgroundColor: '#3B5998',
  },
  container: {
    padding: 15,
    width: '100%',
    position: 'relative',
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  brandName: {
    fontSize: 42,
    textAlign: 'center',
    fontWeight: 'bold',
    // color: colors.primary,
    opacity: 0.9,
  },
  loginContinueTxt: {
    fontSize: 21,
    textAlign: 'center',
    color: colors.gray,
    marginBottom: 16,
    fontWeight: 'bold',
  },
  input: {
    borderWidth: 1,
    borderColor: colors.grayLight,
    padding: 15,
    marginVertical: 10,
    borderRadius: 5,
    height: 55,
    paddingVertical: 0,
  },
  // Register Btn Styles
  loginBtnWrapper: {
    height: 55,
    marginTop: 12,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.4,
    shadowRadius: 3,
    elevation: 5,
  },
  linearGradient: {
    width: '100%',
    borderRadius: 50,
  },
  loginBtn: {
    textAlign: 'center',
    justifyContent: 'center',
    alignItems: 'center',
    width: '100%',
    height: 55,
    color: colors.primary,
  },
  loginText: {
    color: colors.white,
    fontSize: 16,
    fontWeight: '400',
  },
  forgotPassText: {
    color: colors.primary,
    textAlign: 'center',
    fontWeight: 'bold',
    marginTop: 15,
  },
  // footer
  footer: {
    position: 'absolute',
    bottom: 20,
    textAlign: 'center',
    flexDirection: 'row',
  },
  footerText: {
    color: colors.gray,
    fontWeight: 'bold',
  },
  signupBtn: {
    color: colors.activeTxt,
    fontWeight: 'bold',
  },
  // utils
  wFull: {
    width: '100%',
  },
  row: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 20,
  },
  mr7: {
    marginRight: 7,
  },
});

export default Register;
