import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, Image, StyleSheet } from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';
import axios from 'axios';

const SignUpPage = ({ navigation }) => {
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [firstname, setFirstName] = useState('');
  const [lastname, setLastName] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [isPasswordVisible, setPasswordVisible] = useState(false);

  const togglePasswordVisibility = () => {
    setPasswordVisible(!isPasswordVisible);
  };

  const handleSignUp = () => {
    // Basic validation to ensure passwords match
    if (password !== confirmPassword) {
      alert("Passwords do not match");
      return;
    }

    axios.post('http://10.0.2.2:3000/users', {
        "username": username,
        "password": password,
        "first_name": firstname,
        "last_name": lastname,
        "email": email
    })
    .then(function (response) {
      // handle success
      console.log("Post status" + response.status);
      if (response.status === 200) {
        navigation.navigate('Home');
      } else {
        // TODO: What should happen if there's an error
      }
    })
    .catch(function (error) {
      // handle error
      console.log(error);
    })
    .finally(function () {
      // always executed
    });
    // Implement sign-up functionality here
    // Navigate to HomePage or another screen on successful sign-up
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
          <Text style={styles.heading}>Create an Account</Text>
          <View style={styles.inputContainer}>
            <TextInput
              style={styles.input}
              placeholder="First name:"
              placeholderTextColor="gray"
              value={firstname}
              onChangeText={setFirstName}
            />
          </View>
          <View style={styles.inputContainer}>
            <TextInput
              style={styles.input}
              placeholder="Last name:"
              placeholderTextColor="gray"
              value={lastname}
              onChangeText={setLastName}
            />
          </View>

          <View style={styles.inputContainer}>
            <TextInput
              style={styles.input}
              placeholder="Username"
              placeholderTextColor="gray"
              value={username}
              onChangeText={setUsername}
            />
          </View>

          <View style={styles.inputContainer}>
            <View style={styles.passwordContainer}>
              <TextInput
                style={styles.input}
                placeholder="Password"
                placeholderTextColor="gray"
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
            </View>
          </View>
          <View style={styles.inputContainer}>
            <View style={styles.passwordContainer}>
              <TextInput
                style={styles.input}
                placeholder="Confirm Password:"
                placeholderTextColor="gray"
                secureTextEntry={!isPasswordVisible}
                value={confirmPassword}
                onChangeText={setConfirmPassword}
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
            </View>
          </View>

          <View style={styles.inputContainer}>
            <TextInput
              style={styles.input}
              placeholder="Email"
              placeholderTextColor="gray"
              value={email}
              onChangeText={setEmail}
              keyboardType="email-address"
            />
          </View>

          <TouchableOpacity
            style={styles.signUpButton}
            onPress={handleSignUp}
          >
            <Text style={styles.signUpButtonText}>Sign Up</Text>
          </TouchableOpacity>
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
    padding: 20,
  },
  innerContainer: {
    flex: 1,
    justifyContent: 'center',
  },
  logo: {
    width: 210,
    height: 210,
    alignSelf: 'center',
    marginBottom: 5,
    resizeMode: 'contain',
  },
  inputContainer: {
    backgroundColor: '#EFF8FF',
    borderRadius: 10,
    padding: 2,
    color: 'black',
    fontFamily: 'Poppins-Regular', // Use the Poppins font
    fontSize: 16,
    fontWeight: '100',
    marginBottom: 15,
  },
  input: {
    padding: 10,
    color: 'black',
    fontSize: 16,
  },
  passwordContainer: {
    position: 'relative',
    flexDirection: 'row',
    alignItems: 'center',
  },
  eyeIcon: {
    position: 'absolute',
    right: 10,
    top: 5,
  },
  eyeIconImage: {
    width: 24,
    height: 24,
  },
  signUpButton: {
    backgroundColor: 'white',
    borderRadius: 10,
    padding: 15,
    alignItems: 'center',
    marginTop: 20,
    marginBottom: 15,
    shadowColor: 'black',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 5,
    elevation: 8,
  },
  signUpButtonText: {
    color: '#372248',
    fontSize: 18,
    fontWeight: '600',
  },
  footerContainer: {
    alignItems: 'center',
    justifyContent: 'center',
  },
  footerText: {
    color: '#141E46',
    fontSize: 14,
    marginBottom: 10,
  },
  createAccountText: {
    fontSize: 16,
    color: '#7FC780',
  },
  createAccountIntro: {
    color: '#009688',
    fontWeight: '500',
  },
  heading: {
    color: '#43A047',
    fontSize: 20,
    fontWeight: '600', // Semi-bold
    textAlign: 'left',
    marginBottom: 20,
  }
});

export default SignUpPage;
