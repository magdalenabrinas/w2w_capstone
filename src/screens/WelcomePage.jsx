import React, { useEffect } from 'react';
import { View, Image, StyleSheet } from 'react-native';
import LinearGradient from 'react-native-linear-gradient';

const WelcomePage = ({ navigation }) => {
  useEffect(() => {
    const timer = setTimeout(() => {
      navigation.navigate('Login');
    }, 3000); // Adjust the delay as needed

    return () => clearTimeout(timer);
  }, [navigation]);

  return (
    <LinearGradient
      colors={['#7FC780', '#7FC780']}
      style={styles.container}
    >
      <View style={styles.innerContainer}>
        <Image
          source={require('../assets/images/logo.png')} // Ensure this path is correct
          style={styles.logo}
        />
      </View>
    </LinearGradient>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  innerContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  logo: {
    width: 300, // Adjust size as needed
    height: 300, // Adjust size as needed
    resizeMode: 'contain', // Ensures the image scales proportionally
  },
});

export default WelcomePage;
