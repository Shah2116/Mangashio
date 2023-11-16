import {
  TouchableOpacity,
  Image,
  TextInput,
  StyleSheet,
  Text,
  View,
} from 'react-native';
import React, { useState } from 'react';
import CheckBox from '@react-native-community/checkbox';
import Title from '../components/Title';

const SignIn = () => {
  const [checkboxIsChecked, setCheckboxIsChecked] = useState(false)
  return (
    <View style={styles.container}>
      <Title />
      <View style={styles.formContainer}>
        <Text style={styles.signInText}>Sign in</Text>
        <View style={styles.inputContainer}>
          <Text style={styles.inputLabel}>Username/Email</Text>
          <TextInput style={styles.input} placeholder="Enter your username" />
        </View>
        <View style={styles.newUserBox}>
          <Text>New user?</Text>
          <TouchableOpacity
          
          >
            <Text style={styles.registerHere}>Register here</Text>
          </TouchableOpacity>
        </View>

        <View style={styles.inputContainer}>
          <Text style={styles.inputLabel}>Password</Text>
          <TextInput
            style={styles.input}
            placeholder="Enter your password"
            secureTextEntry={true}
          />
        </View>
        <View style={styles.checkBoxContainer}>
          <View style={styles.rememberme}>
            <CheckBox
              disabled={false}
              value={checkboxIsChecked}
              onValueChange={() => setCheckboxIsChecked(!checkboxIsChecked)}
            />
            <Text>Remember me</Text>
          </View>
          <View>
            <TouchableOpacity>
              <Text>Forgot Password</Text>
            </TouchableOpacity>
          </View>
        </View>
        <TouchableOpacity style={styles.loginButtonContainer}
        // onPress={() =>()}
        >
          <Text style={[styles.loginButton, styles.loginText]} >Log in</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};
export default SignIn;

const styles = StyleSheet.create({
  container: {
    flex:1,
    backgroundColor:'#1f1f1f',
    justifyContent:'center',

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
    elevation:4,
    backgroundColor: '#434343',
    alignItems: 'center',
    marginVertical: 37,
    marginHorizontal: 21,
    paddingVertical: 25,
    paddingHorizontal: 0,
  },
  signInText: {
    color: '#FFF',
    fontWeight: '700',
    fontSize: 23,
    fontFamily: 'Roboto, sans-serif',
    marginBottom: 12,
  },
  inputContainer: {
    alignSelf: 'stretch',
    marginTop: 17,
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
  newUserBox: {
    flexDirection: 'row',
    alignSelf: 'flex-start',
    gap: 1,
    marginTop: 7,
    marginLeft: 13,
  },
  newUser: {},
  registerText: {},
  registerHere: {
    color: '#7daff9',
  },
  checkBoxContainer: {
    flexDirection:'row',
    alignItems:'center',
   alignSelf:'flex-start',
    marginTop: 26,
  },
  rememberme:{
    flexDirection:'row',
    marginLeft:18,
    alignItems:'center'
  
  },
  loginButtonContainer:{
    width:326,
    height:34,
    backgroundColor:'#002A97',
    borderRadius:4,
    marginTop:30,
  },

  loginButton: {
    color: '#7DAFF9',
    alignSelf: 'center',
    marginTop: 8,
    fontWeight: '400',
    fontSize: 12,
    fontFamily: 'Roboto, sans-serif',
  },
  loginText:{
    fontSize:20,
    fontWeight:'600',
    fontFamily:"Roboto-Bold",
    justifyContent:'center',
    alignItems:'center',
    color:"#fff"
  }
});
