import React from 'react';
import {View, StyleSheet, Dimensions} from 'react-native';

const Header = () => {
  return <View style={styles.header} />;
};

const windowHeight = Dimensions.get('window').height;
const headerHeight = windowHeight * 0.2;

const styles = StyleSheet.create({
  header: {
    height: headerHeight,
    backgroundColor: '#0DA54B',
  },
});

export default Header;
