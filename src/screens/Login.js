import React from 'react';
import {
  Dimensions,
  KeyboardAvoidingView,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';

const width = Dimensions.get('window').width;
const height = Dimensions.get('window').height;

export default function Login() {
  return (
    <KeyboardAvoidingView style={styles.container}>
      <View style={styles.centerWrapper}>
        <Text style={styles.logo}>Kilogram</Text>
      </View>
      <View style={[styles.inputContainer, styles.centerWrapper]}>
        <TextInput
          style={styles.input}
          placeholder={'Email, phone, username'}
        />
      </View>
      <View style={[styles.inputContainer, styles.centerWrapper]}>
        <TextInput
          style={styles.input}
          placeholder={'Password'}
          secureTextEntry
        />
      </View>
      <View style={[styles.buttonContainer, styles.centerWrapper]}>
        <TouchableOpacity style={styles.button}>
          <Text style={styles.buttonText}>Login</Text>
        </TouchableOpacity>
        <TouchableOpacity style={[styles.button, styles.buttonOutline]}>
          <Text style={styles.buttonOutlineText}>Signup</Text>
        </TouchableOpacity>
      </View>
    </KeyboardAvoidingView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  centerWrapper: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  },
  logo: {
    fontSize: 40,
    fontStyle: 'italic',
  },
  inputContainer: {
    // width: width - 10,
  },
  input: {
    backgroundColor: 'white',
    paddingHorizontal: 15,
    paddingVertical: 10,
    borderRadius: 10,
    marginTop: 5,
    width: width - 20,
  },
  buttonContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 40,
  },
  button: {
    backgroundColor: '#0782F9',
    width: width - 20,
    padding: 15,
    borderRadius: 10,
    alignItems: 'center',
  },
  buttonOutline: {
    backgroundColor: 'white',
    marginTop: 5,
    borderColor: '#0782F9',
    borderWidth: 2,
  },
  buttonText: {
    color: 'white',
    fontWeight: '700',
    fontSize: 16,
  },
  buttonOutlineText: {
    color: '#0782F9',
    fontWeight: '700',
    fontSize: 16,
  },
});
