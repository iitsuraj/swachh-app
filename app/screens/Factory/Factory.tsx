/**
 * Show TaskScreen List
 * 1. From Submission
 * 2. Image Submission
 * 3. Give Camera option here
 */

import React, { useEffect, useState } from 'react';
import {
  SafeAreaView,
  View,
  Text,
  ToastAndroid,
  PermissionsAndroid,
  TouchableOpacity,
  StyleSheet,
  Image,
  FlatList,
  ScrollView,
  Modal,
} from 'react-native';
import FastImage from 'react-native-fast-image';
import { FAB, Button, Title, IconButton, Colors } from 'react-native-paper';
import { RNCamera } from 'react-native-camera';
import CameraRoll from '@react-native-community/cameraroll';
import NavigationService from 'app/navigation/NavigationService';
import DocumentPicker from 'react-native-document-picker';
const Factory: React.FC = ({ route }) => {
  const [open, setOpen] = React.useState(false);
  const onStateChange = () => setOpen(!open);
  // let [flash, setFlash] = useState('off')
  // let [zoom, setZoom] = useState(0)
  // let [autoFocus, setAutoFocus] = useState('on')
  // let [depth, setDepth] = useState(0)
  let [type, setType] = useState('back');
  // let [permission, setPermission] = useState('undetermined')
  let [openCamera, setOpenCamera] = useState(false);
  let [uri, setUri] = useState('');
  let [selfie, setSelfie] = useState([]);
  let [pictures, setPictures] = useState([]);
  const [imageuri, setImageuri] = useState('');
  const [modalVisibleStatus, setModalVisibleStatus] = useState(false);
  const showModalFunction = (visible, imageURL) => {
    //handler to handle the click on image of Grid
    //and close button on modal
    setImageuri(imageURL);
    setModalVisibleStatus(visible);
  };

  let cameraRef = React.useRef(null);
  const uploadFiles = async () => {
    try {
      const results = await DocumentPicker.pickMultiple({
        type: [DocumentPicker.types.images],
      });
      // setPictures(pictures.concat(results));
      // console.log(results);
      results.forEach((result) => setPictures(pictures.concat(result.uri)));
    } catch (err) {
      if (DocumentPicker.isCancel(err)) {
        // User cancelled the picker, exit any dialogs or menus and move on
      } else {
        ToastAndroid.show('Unable to pick image', ToastAndroid.SHORT);
      }
    }
  };
  const takePicture = async () => {
    if (cameraRef) {
      const options = {
        quality: 0.5,
        base64: true,
        fixOrientation: true,
        forceUpOrientation: true,
      };
      const data = await cameraRef.current.takePictureAsync(options);
      // console.log(data.uri);
      setUri(data.uri);
    }
  };
  const removeUri = () => setUri('');
  const closeCamera = () => setOpenCamera(false);
  const saveImage = async () => {
    const permission = PermissionsAndroid.PERMISSIONS.WRITE_EXTERNAL_STORAGE;
    await PermissionsAndroid.request(permission);
    CameraRoll.save(uri, {
      type: 'auto',
      album: 'factoryvisit',
    }).then((data) => {
      if (type === 'front') {
        setSelfie(selfie.concat(data));
        selfie.length === 1
          ? ToastAndroid.show('Data submitted to server', ToastAndroid.SHORT)
          : null;
      } else {
        setPictures(pictures.concat(data));
      }
      setUri('');
      setOpenCamera(false);
    });
  };
  const gotToFormSubmission = () =>
    NavigationService.navigate('Factory Details');
  return (
    <SafeAreaView>
      {selfie.length === 2 ? (
        <Title>Data Submiited to server</Title>
      ) : (
        <View
          style={{
            width: '100%',
            height: '100%',
          }}>
          {/* Show home page */}
          {uri === '' && openCamera === false ? (
            <View style={{ width: '100%', height: '100%' }}>
              <View style={{ flex: 1, flexDirection: 'column' }}>
                <Button
                  mode="contained"
                  onPress={gotToFormSubmission}
                  style={{ margin: 20 }}>
                  Submit factory data
                </Button>
                <Button
                  icon="camera"
                  mode="contained"
                  onPress={() => {
                    setType('back');
                    setOpenCamera(true);
                  }}
                  style={{ margin: 20 }}>
                  Submit photos
                </Button>
                <Button
                  mode="contained"
                  onPress={uploadFiles}
                  style={{ margin: 20 }}>
                  Insert Images
                </Button>
              </View>

              {modalVisibleStatus ? (
                <Modal
                  transparent={false}
                  animationType={'fade'}
                  visible={modalVisibleStatus}
                  onRequestClose={() => {
                    showModalFunction(!modalVisibleStatus, '');
                  }}>
                  <View style={styles.modelStyle}>
                    <FastImage
                      style={styles.fullImageStyle}
                      source={{ uri: imageuri }}
                      resizeMode={FastImage.resizeMode.contain}
                    />
                    <IconButton
                      icon="close"
                      color={Colors.red500}
                      size={30}
                      onPress={() => showModalFunction(!modalVisibleStatus, '')}
                      style={styles.closeButtonStyle}
                    />
                  </View>
                </Modal>
              ) : (
                <View style={styles.container1}>
                  <FlatList
                    data={pictures}
                    renderItem={({ item }) => (
                      <View style={styles.imageContainerStyle}>
                        <TouchableOpacity
                          key={item}
                          style={{ flex: 1 }}
                          onPress={() => {
                            showModalFunction(true, item);
                          }}>
                          <FastImage
                            style={styles.imageStyle}
                            source={{
                              uri: item,
                            }}
                          />
                        </TouchableOpacity>
                      </View>
                    )}
                    //Setting the number of column
                    numColumns={2}
                    keyExtractor={(item, index) => index.toString()}
                  />
                </View>
              )}

              <FAB.Group
                open={open}
                icon={open ? 'close' : 'plus'}
                actions={[
                  {
                    label: selfie.length === 1 ? 'Mark Exit' : 'Mark Entry',
                    icon: 'camera',
                    onPress: () => {
                      setType('front');
                      setOpenCamera(true);
                    },
                  },
                  {
                    label: 'SOS',
                    icon: 'car-brake-alert',
                    onPress: () => NavigationService.navigate('Report Factory'),
                  },
                  // {
                  //   label: 'Mark Exit',
                  //   icon: 'camera',
                  //   onPress: () => console.log('Pressed add'),
                  // },
                  // {
                  //   label: 'Mark Done',
                  //   icon: 'check',
                  //   onPress: () => console.log('Pressed add'),
                  // },
                ]}
                onStateChange={onStateChange}
              />
            </View>
          ) : null}
          {/* {{uri === '' && openCamera === false ? } */}
          {/* Show Camera */}
          {uri === '' && openCamera === true ? (
            <RNCamera
              ref={cameraRef}
              style={styles.preview}
              type={type}
              // flashMode={RNCamera.Constants.FlashMode.on}
              androidCameraPermissionOptions={{
                title: 'Permission to use camera',
                message: 'We need your permission to use your camera',
                buttonPositive: 'Ok',
                buttonNegative: 'Cancel',
              }}
              androidRecordAudioPermissionOptions={{
                title: 'Permission to use audio recording',
                message: 'We need your permission to use your audio',
                buttonPositive: 'Ok',
                buttonNegative: 'Cancel',
              }}>
              <View
                style={{
                  flex: 0,
                  flexDirection: 'row',
                  justifyContent: 'center',
                }}>
                <TouchableOpacity onPress={takePicture} style={styles.capture}>
                  <Title style={{ fontSize: 14 }}> SNAP </Title>
                </TouchableOpacity>
                <TouchableOpacity onPress={closeCamera} style={styles.capture}>
                  <Title style={{ fontSize: 14 }}> Go Back </Title>
                </TouchableOpacity>
              </View>
            </RNCamera>
          ) : null}

          {/* Show image preview */}
          {uri ? (
            <View style={{ position: 'relative' }}>
              <Image
                source={{ uri: uri }}
                style={{ width: '100%', height: '100%' }}
              />
              <View
                style={{
                  position: 'absolute',
                  bottom: 0,
                  width: '100%',
                }}>
                <View
                  style={{
                    flex: 0,
                    flexDirection: 'row',
                    justifyContent: 'center',
                  }}>
                  <TouchableOpacity onPress={removeUri} style={styles.capture}>
                    <Title style={{ fontSize: 14 }}> Cancel </Title>
                  </TouchableOpacity>
                  <TouchableOpacity onPress={saveImage} style={styles.capture}>
                    <Title style={{ fontSize: 14 }}> Save </Title>
                  </TouchableOpacity>
                </View>
              </View>
            </View>
          ) : null}
        </View>
      )}
    </SafeAreaView>
  );
};

export default Factory;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    backgroundColor: 'black',
  },
  preview: {
    flex: 1,
    justifyContent: 'flex-end',
    alignItems: 'center',
  },
  capture: {
    flex: 0,
    backgroundColor: '#fff',
    borderRadius: 5,
    padding: 15,
    paddingHorizontal: 20,
    alignSelf: 'center',
    margin: 20,
  },
  cancel: {
    position: 'absolute',
    bottom: 0,
    backgroundColor: 'transparent',
    fontWeight: '600',
    fontSize: 17,
  },
  container1: {
    flex: 1,
    backgroundColor: '#ffffff',
  },
  titleStyle: {
    padding: 16,
    fontSize: 20,
    color: 'white',
    backgroundColor: 'green',
  },
  imageContainerStyle: {
    flex: 1,
    flexDirection: 'column',
    margin: 1,
    maxWidth: '50%',
  },
  imageStyle: {
    height: 120,
    width: '100%',
  },
  fullImageStyle: {
    justifyContent: 'center',
    alignItems: 'center',
    height: '100%',
    width: '98%',
    resizeMode: 'contain',
  },
  modelStyle: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0,0,0,0.4)',
  },
  closeButtonStyle: {
    top: 40,
    right: 5,
    position: 'absolute',
  },
});
