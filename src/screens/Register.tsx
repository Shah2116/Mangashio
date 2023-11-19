import * as React from 'react';
import {
  View,
  StyleSheet,
  Image,
  Text,
  TextInput,
  TouchableOpacity,
} from 'react-native';
import {useState} from 'react';
import Title from '../components/Title';

function Register(navigation) {
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');

  return (
    <View style={styles.container}>
      <Title />
      <View style={styles.formContainer}>
        <Text style={styles.registerText}>Register</Text>
        <View style={styles.inputContainer}>
          <Text style={styles.inputLabel}>Username</Text>
          <TextInput
            style={styles.input}
            placeholder="Enter your username"
            onChangeText={text => setUsername(text)}
          />
        </View>
        <View style={styles.inputContainer}>
          <Text style={styles.inputLabel}>Email</Text>
          <TextInput
            style={styles.input}
            placeholder="Enter your email"
            onChangeText={text => setEmail(text)}
          />
        </View>
        <View style={styles.inputContainer}>
          <Text style={styles.inputLabel}>Password</Text>
          <TextInput
            style={styles.input}
            placeholder="Enter your password"
            onChangeText={(text) => setPassword(text)}
            secureTextEntry={true}
          />
        </View>
        <View style={styles.inputContainer}>
          <Text style={styles.inputLabel}>Confirm password</Text>
          <TextInput
            style={styles.input}
            placeholder="Confirm your password"
            onChangeText={(text) =>setConfirmPassword(text)}
            secureTextEntry={true}
          />
        </View>
        <TouchableOpacity style={styles.registerButton}>
          <Text style={styles.registerButtonText}>Register</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.loginButton}
         onPress={() => navigation.navigate("SignIn")}
        >
          <Text style={styles.loginButtonText}>Login page</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}
export default Register;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#1f1f1f',
    justifyContent: 'center',
  },
  logoContainer: {
    width: '100%',
    flexDirection: 'column',
    alignItems: 'center',
    padding: 20,
  },
  logo: {
    width: 49,
    height: 49,
  },
  logoText: {
    color: '#FFF',
    fontWeight: '800',
    fontSize: 24,
    fontFamily: 'Roboto, sans-serif',
  },
  formContainer: {
    borderRadius: 3,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowOpacity: 1,
    shadowRadius: 4,
    elevation: 4,
    backgroundColor: '#434343',
    alignItems: 'center',
    marginVertical: 37,
    marginHorizontal: 21,
    paddingVertical: 25,
    paddingHorizontal: 0,
  },
  registerText: {
    color: '#FFF',
    fontWeight: '700',
    fontSize: 23,
    fontFamily: 'Roboto, sans-serif',
    marginBottom: 20,
  },
  inputContainer: {
    alignSelf: 'stretch',
    marginBottom: 14,
    paddingHorizontal: 12,
  },
  inputLabel: {
    color: '#FFF',
    alignSelf: 'stretch',
    fontWeight: '400',
    fontSize: 13,
    fontFamily: 'Roboto, sans-serif',
  },
  input: {
    borderRadius: 4,
    backgroundColor: '#D9D9D9',
    alignSelf: 'stretch',
    marginTop: 10,
    height: 34,
    paddingHorizontal: 12,
  },
  registerButton: {
    color: '#FFF',
    alignSelf: 'stretch',
    marginTop: 16,
    marginHorizontal: 12,
    borderRadius: 4,
    backgroundColor: '#002A97',
    alignItems: 'center',
    paddingVertical: 8,
    fontWeight: '600',
    fontSize: 20,
    fontFamily: 'Roboto, sans-serif',
  },
  loginButton: {
    alignSelf: 'center',
    marginTop: 8,
  },
  loginButtonText: {
    color: '#7daff9',
    fontSize: 12,
    fontFamily: 'Roboto-Regular',
  },
  registerButtonText: {
    fontSize: 20,
    fontWeight: '600',
    fontFamily: 'Roboto-Bold',
    color: '#fff',
  },
});
