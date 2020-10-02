import React from 'react';
import { View } from 'react-native';
import { Text, Button, TextInput } from 'react-native-paper';
import { useDispatch, useSelector } from 'react-redux';

import * as loginActions from 'app/store/actions/loginActions';
import styles from './styles';
import { ILoginState } from 'app/models/reducers/login';
import NavigationService from 'app/navigation/NavigationService';

interface IState {
  loginReducer: ILoginState;
}

const Login: React.FC = () => {
  const [text, setText] = React.useState('');
  const id = useSelector((state: IState) => state.loginReducer.id);
  const dispatch = useDispatch();
  const onLogin = () => dispatch(loginActions.requestLogin('test', '1234'));
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
          value={text}
          onChangeText={(text) => setText(text)}
        />
      </View>
      <View style={{ width: '100%' }}>
        <TextInput
          mode="outlined"
          style={styles.inputContainerStyle}
          label="Password"
          placeholder="Enter Your Password"
          value={text}
          onChangeText={(text) => setText(text)}
          textContentType="password"
          secureTextEntry={true}
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
