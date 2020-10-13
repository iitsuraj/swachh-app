/**
 * Show TaskScreen List
 * 1. From Submission
 * 2. Image Submission
 */

import React, { useEffect } from 'react';
import { SafeAreaView, View, ToastAndroid } from 'react-native';
// import { useDispatch, useSelector } from 'react-redux';
import { Title } from 'react-native-paper';

const FormSubmission: React.FC = ({ route }) => {
  return (
    <SafeAreaView>
      <View
        style={{
          width: '100%',
          height: '100%',
        }}>
        <Title>Hello</Title>
      </View>
    </SafeAreaView>
  );
};

export default FormSubmission;
