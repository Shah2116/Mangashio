import {Button, Image, StyleSheet, Text, TextInput, TouchableOpacity, View} from 'react-native';
import React, { useState } from 'react';


const Register = () => {

const [username, setUsername] = useState("")
const [email, setEmail] = useState("")
const [password, setPassword] = useState("")
const [confirmPassword, setConfirmPassword] = useState("")

  return (
    <View style={styles.mainContainer}>
      <View style={[styles.topBar, styles.logoLayout]}>
        <View style={[styles.logo, styles.logoLayout]}>
          <Image
            source={require('../assests/images/Logo.png')}
            style={[styles.logoIcon, styles.logoLayout]}
          />
          <Text style={[styles.mangaShio, styles.mangaShioFlexBox]}>
            MangaShio
          </Text>
        </View>
      </View>
      <View style={[styles.register, styles.registerContainer]}>
        <Text style={[styles.registerText, styles.registerTypo]}>Register</Text>
      </View>
      <View style={[styles.usernameBox, styles.boxLayout]}>
        <Text style={[styles.usernameText, styles.mangaShioFlexBox]}>Username</Text>
        <TextInput
        style={[styles.inputBox, styles.inputLayout]}
        value='username'
        onChangeText={setUsername}
        autoComplete='off'
         />
      </View>
      <View style={[styles.emailBox, styles.boxLayout]}>
        <Text style={[styles.usernameText, styles.mangaShioFlexBox]}>Email</Text>
        <TextInput
        style={[styles.inputBox, styles.inputLayout]}
        value='email'
        onChangeText={setEmail}
        keyboardType='email-address'
        textContentType='emailAddress'
         />
      </View>
      <View style={[styles.passwordBox, styles.boxLayout]}>
        <Text style={[styles.usernameText, styles.mangaShioFlexBox]}>Password</Text>
        <TextInput
        style={[styles.inputBox, styles.inputLayout]}
        value='password'
        onChangeText={setPassword}
        textContentType='password'
        secureTextEntry={true}
         />
      </View>
      <View style={[styles.confirmPasswordBox, styles.boxLayout]}>
        <Text style={[styles.usernameText, styles.mangaShioFlexBox]}>Confirm Password</Text>
        <TextInput
        style={[styles.inputBox, styles.inputLayout]}
        value='confirmPassword'
        onChangeText={setConfirmPassword}
        secureTextEntry={true}
         />
      </View>
      <View style={styles.button}>
        <View style={styles.registerBtn, styles.inputLayout}>
        <Button 
        title='Register'
        color={'#002a97'}
        // onPress={() =>()}
         />
        </View>
        <TouchableOpacity >
          <Text>Login Page</Text>
        </TouchableOpacity>
      </View>

    </View>
  );
};

export default Register;

const styles = StyleSheet.create({
  mainContainer:{},
  topBar:{},
  logoLayout:{},
  logo:{},
  logoIcon:{},
  mangaShio:{},
  mangaShioFlexBox:{},
  register:{},
  registerContainer:{},
  registerText:{},
  registerTypo:{},
  usernameBox:{},
  boxLayout:{},
  usernameText:{},
  inputBox:{},
  inputLayout:{},
  confirmPasswordBox:{},
  emailBox:{},
  passwordBox:{},
  button:{},
  registerBtn:{},
});
