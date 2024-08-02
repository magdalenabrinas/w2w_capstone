import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, Image, StyleSheet } from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';
import axios from 'axios';

const LoginPage = ({ navigation }) => {  // Pass navigation prop for screen transitions
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [isPasswordVisible, setPasswordVisible] = useState(false);
  const [isRememberMe, setRememberMe] = useState(false);

  const togglePasswordVisibility = () => {
    setPasswordVisible(!isPasswordVisible);
  };

  const toggleRememberMe = () => {
    setRememberMe(!isRememberMe);
  };

  const handleLogin = () => {
    // Implement login functionality here
    // Navigate to HomePage on successful login

    axios.post('http://10.0.2.2:3000/login', {
      "username": username,
      "password": password,
     
    })
    .then(function (response) {
      // Navigate to the HomePage upon successful login
      navigation.navigate('Home');
    })
    .catch(function (error) {
      // handle error
      console.log('Errr' + error);
      alert('Invalid username or password');
    })
    .finally(function () {
      // always executed
    });


  };

  const handleForgotPassword = () => {
    // Implement forgot password functionality here
  };

  const handleCreateAccount = () => {
    // Navigate to the SignUpPage
    navigation.navigate('SignUp'); // Ensure 'SignUpPage' is correctly configured in your navigator
  };

  return (
    <LinearGradient
      colors={['rgba(255, 255, 255, 0.01)', '#7FC780']}
      style={styles.container}
    >
      <KeyboardAwareScrollView
        contentContainerStyle={styles.scrollContainer}
        keyboardShouldPersistTaps="handled"
      >
        <View style={styles.innerContainer}>
          <Image
            source={require('../assets/images/logo3.png')} // Replace with your logo path
            style={styles.logo}
          />
          <View style={styles.inputContainer}>
            <LinearGradient
              colors={['#FFFFFF', '#7FC780']}
              style={styles.gradientBackground}
            >
              <TextInput
                style={styles.input}
                placeholder="Username"
                placeholderTextColor='gray'
                value={username}
                onChangeText={setUsername}
              />
            </LinearGradient>
          </View>

          <View style={styles.inputContainer}>
            <LinearGradient
              colors={['#FFFFFF', '#7FC780']}
              style={styles.gradientBackground}
            >
              <TextInput
                style={styles.input}
                placeholder="Password"
                placeholderTextColor='gray'
                secureTextEntry={!isPasswordVisible}
                value={password}
                onChangeText={setPassword}
              />
              <TouchableOpacity
                onPress={togglePasswordVisibility}
                style={styles.eyeIcon}
                accessibilityLabel={isPasswordVisible ? "Hide password" : "Show password"}
                accessibilityHint="Toggles visibility of password"
              >
                <Image
                  source={
                    isPasswordVisible
                      ? require('../assets/images/hideicon.png')
                      : require('../assets/images/showicon.png')
                  }
                  style={styles.eyeIconImage}
                />
              </TouchableOpacity>
            </LinearGradient>
          </View>

          <View style={styles.rowContainer}>
            <TouchableOpacity
              style={styles.rememberMeContainer}
              onPress={toggleRememberMe}
            >
              <Image
                source={
                  isRememberMe
                    ? require('../assets/images/checkboxon.png') // Checked state
                    : require('../assets/images/checkboxoff.png') // Unchecked state
                }
                style={styles.checkboxIcon}
              />
              <Text style={styles.rememberMeText}>Remember me</Text>
            </TouchableOpacity>

            <TouchableOpacity
              style={styles.forgotPasswordButton}
              onPress={handleForgotPassword}
            >
              <Text style={styles.forgotPasswordText}>Forgot password?</Text>
            </TouchableOpacity>
          </View>

          <TouchableOpacity
            style={styles.loginButton}
            onPress={handleLogin}
          >
            <Text style={styles.loginButtonText}>Log In</Text>
          </TouchableOpacity>

          <View style={styles.footerContainer}>
            <Text style={styles.footerText}>Give your old items a second chance!</Text>
            <TouchableOpacity onPress={handleCreateAccount}>
              <Text style={styles.createAccountText}>
                <Text style={styles.createAccountIntro}>New User? </Text>
                <Text style={styles.createAccountLink}>Create an account.</Text>
              </Text>
            </TouchableOpacity>
          </View>
        </View>
      </KeyboardAwareScrollView>
    </LinearGradient>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  scrollContainer: {
    flexGrow: 1,
    justifyContent: 'center',
    padding: 10,
  },
  innerContainer: {
    flex: 1,
    justifyContent: 'center',
    padding: 20,
  },
  logo: {
    width: 210,
    height: 210,
    alignSelf: 'center',
    marginBottom: 40,
    resizeMode: 'contain', // Ensures the image scales proportionally
  },
  inputContainer: {
    marginBottom: 25,
    
  },
  gradientBackground: {
    borderRadius: 10,
    overflow: 'hidden',
  },
  input: {
    backgroundColor: '#EFF8FF',
    borderRadius: 10,
    padding: 10,
    color: 'black',
    fontFamily: 'Poppins-Regular', // Use the Poppins font
    fontSize: 16,
    fontWeight: '100',
  },
  passwordContainer: {
    position: 'relative',
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 15,
  },
  eyeIcon: {
    position: 'absolute',
    right: 10,
    top: 5,
  },
  eyeIconImage: {
    width: 40,
    height: 40,
  },
  rowContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 15,
  },
  rememberMeContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  checkboxIcon: {
    width: 24,
    height: 24,
    marginRight: 10,
  },
  rememberMeText: {
    color: '#141E46',
    fontSize: 14,
    fontFamily: 'Poppins-Regular', // Use the Poppins font
  },
  loginButton: {
    backgroundColor: 'white',
    borderRadius: 10,
    padding: 15,
    alignItems: 'center',
    marginBottom: 15,
    shadowColor: 'black',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 1,
    shadowRadius: 5,
    elevation: 8,
    marginTop: 20,
  },
  loginButtonText: {
    color: '#372248',
    fontSize: 18,
    fontWeight: '600',
    fontFamily: 'Poppins',
  },
  forgotPasswordButton: {
    alignItems: 'center',
  },
  forgotPasswordText: {
    fontSize: 14,
    color: '#141E46',
    fontFamily: 'Poppins-Regular', // Use the Poppins font
  },
  footerContainer: {
    marginTop: 20,
    alignItems: 'center',
    justifyContent: 'center',
    padding: 20,
  },
  footerText: {
    fontSize: 24,  // Adjusted for better visibility
    color: '#141E46',
    marginBottom: 10,
    fontFamily: 'PT Serif',
    fontStyle: 'italic',
    textAlign: 'center',
    fontWeight: 'normal',
  },
  createAccountText: {
    fontSize: 16,
    color: '#7FC780',  // Default color for the full text
    marginTop: 20,
  },
  createAccountIntro: {
    color: '#141E46',  // Color for "New User?"
    fontWeight: '400',
  },
  createAccountLink: {
    color: '#009688',  // Color for "Create an account."
    fontWeight: '400',
  },
});

export default LoginPage;
