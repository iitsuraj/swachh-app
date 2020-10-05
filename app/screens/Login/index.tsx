import React from 'react';
import { View } from 'react-native';
import { Button, TextInput } from 'react-native-paper';
import { useDispatch, useSelector } from 'react-redux';

import * as loginActions from 'app/store/actions/loginActions';
import styles from './styles';
import { ILoginState } from 'app/models/reducers/login';
import NavigationService from 'app/navigation/NavigationService';

interface IState {
  loginReducer: ILoginState;
}

const Login: React.FC = () => {
  const [email, setEmail] = React.useState('');
  const [password, setPassword] = React.useState('');
  const id = useSelector((state: any) => state);
  const [emailError, setEmailError] = React.useState(false);
  const [passwordError, setPasswordError] = React.useState(false);
  const dispatch = useDispatch();
  const onChangeEmail = (email: string) => setEmail(email);
  const onChangePassword = (password: string) => setPassword(password);
  const validateEmail = (email: string) => {
    var validEmailRegEx = /^[A-Z0-9_'%=+!`#~$*?^{}&|-]+([\.][A-Z0-9_'%=+!`#~$*?^{}&|-]+)*@[A-Z0-9-]+(\.[A-Z0-9-]+)+$/i;
    var isEmailValid = validEmailRegEx.test(email);
    return isEmailValid;
  };
  const onLogin = () => {
    const validEmail = validateEmail(email);
    if (validEmail) {
      return dispatch(loginActions.requestLogin(email, password));
    }
    setEmailError(true);
    setPasswordError(true);
  };
  const onForgot = () => NavigationService.navigate('ForgotPassword');
  return (
    <View style={styles.container}>
      {/* <View style={styles.container}>
        <Text style={styles.login}>Login Status : {id}</Text>
        <TextInput
          mode="outlined"
          style={styles.inputContainerStyle}
          label="Outlined input"
          placeholder="Type something"
          value={text}
          onChangeText={(text) => setText(text)}
        />
        <Button icon="login" mode="outlined" onPress={onLogin}>
          Login
        </Button>
        <Button
          mode="text"
          style={styles.forgot}
          labelStyle={styles.labelStyle}
          onPress={onForgot}>
          Forgot Password
        </Button>
      </View> */}
      <View style={{ width: '100%' }}>
        <TextInput
          mode="outlined"
          style={styles.inputContainerStyle}
          label="Email"
          placeholder="Enter your email"
          value={email}
          onChangeText={onChangeEmail}
          error={emailError}
        />
      </View>
      <View style={{ width: '100%' }}>
        <TextInput
          mode="outlined"
          style={styles.inputContainerStyle}
          label="Password"
          placeholder="Enter Your Password"
          value={password}
          onChangeText={onChangePassword}
          textContentType="password"
          secureTextEntry={true}
          error={passwordError}
        />
      </View>
      <View style={{ width: '100%' }}>
        <Button
          mode="outlined"
          onPress={onLogin}
          icon="login"
          style={styles.inputContainerStyle}>
          Login
        </Button>
        <Button
          mode="text"
          style={styles.forgot}
          labelStyle={styles.labelStyle}
          onPress={onForgot}>
          Forgot Password
        </Button>
      </View>
    </View>
  );
};

export default Login;
