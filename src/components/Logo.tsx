import { View, Text, StyleSheet, Image } from 'react-native';
import React from 'react';
import MappiyaIcon from '../../assets/mappiya_logo.png';
import MappiyaTxt from '../../assets/mappiya_txt.png';

const Logo = () => {
  return (
    <View style={styles.logoContainer}>
      <Image style={styles.logo} source={MappiyaIcon} />
      <Image style={styles.logoTxt} source={MappiyaTxt} />
    </View>
  );
};

const styles = StyleSheet.create({
  logoContainer: {
    alignItems: 'center',
    paddingBottom: 32,
  },
  logo: {
    width: 150,
    height: 150,
  },
  logoTxt: {
    width: '50%',
    height: 50,
  },
});

export default Logo;
