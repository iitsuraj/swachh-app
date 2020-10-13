/**
 * Show TaskScreen List
 * 1. From Submission
 * 2. Image Submission
 */

import React, { useEffect } from 'react';
import { SafeAreaView, View, ToastAndroid } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import { Title, FAB, Button } from 'react-native-paper';

import NavigationService from 'app/navigation/NavigationService';
import Geolocation from '@react-native-community/geolocation';

const Factory: React.FC = ({ route }) => {
  const [state, setState] = React.useState({ open: false });
  const factory = useSelector((state: any) => state.factoryReducer);
  // console.log(factory);
  const onStateChange = ({ open }) => setState({ open });
  const { open } = state;
  /**
   * Location Check
   * Camera Open
   * Show List
   */
  useEffect(() => {
    Geolocation.getCurrentPosition(success, error, options);
  }, []);
  const [locationStatus, setLocationStatus] = React.useState(0); // Loading-0 | Ready to go-1 | Error-2 | Not in Range-3

  var options = {
    enableHighAccuracy: true,
    timeout: 5000,
    maximumAge: 10000,
  };
  const calcCrow = (lat1: number, lon1: number, lat2: number, lon2: number) => {
    var R = 6371; // km
    var dLat = toRad(lat2 - lat1);
    var dLon = toRad(lon2 - lon1);
    var lat1 = toRad(lat1);
    var lat2 = toRad(lat2);

    var a =
      Math.sin(dLat / 2) * Math.sin(dLat / 2) +
      Math.sin(dLon / 2) * Math.sin(dLon / 2) * Math.cos(lat1) * Math.cos(lat2);
    var c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
    var d = R * c;
    return d;
  };

  // Converts numeric degrees to radians
  const toRad = (Value: number) => {
    return (Value * Math.PI) / 180;
  };
  const success = (pos) => {
    var crd = pos.coords;
    const distance = calcCrow(
      Number(crd.latitude),
      Number(crd.longitude),
      Number(route.params.geo.lat),
      Number(route.params.geo.lon),
    );
    // console.log(distance);
    if (distance < 0.3) {
      setLocationStatus(1);
    } else {
      setLocationStatus(3);
    }
    // console.log('Your current position is:');
    // console.log(`Latitude : ${crd.latitude}`);
    // console.log(`Longitude: ${crd.longitude}`);
    // console.log(`More or less ${crd.accuracy} meters.`);
  };

  const error = (err) => {
    setLocationStatus(2);
    console.log(err);
  };

  const gotToFormSubmission = () =>
    NavigationService.navigate('Factory Details');

  const LocationStatus = () => {
    switch (locationStatus) {
      case 0:
        return (
          <View
            style={{
              flex: 1,
              justifyContent: 'center',
              alignItems: 'center',
            }}>
            <Title>Loading...</Title>
          </View>
        );
      case 1:
        return (
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
              onPress={() => console.log('Pressed')}
              style={{ margin: 20 }}>
              Submit photos
            </Button>
          </View>
        );
      case 2:
        return (
          <View
            style={{
              flex: 1,
              justifyContent: 'center',
              alignItems: 'center',
            }}>
            <Title>Unable to determine your location please turn on gps.</Title>
          </View>
        );
      case 3:
        return (
          <View
            style={{
              flex: 1,
              justifyContent: 'center',
              alignItems: 'center',
            }}>
            <Title>either your not in rage or your gps is not running</Title>
          </View>
        );
    }
  };

  return (
    <SafeAreaView>
      <View
        style={{
          width: '100%',
          height: '100%',
        }}>
        {LocationStatus()}
        {locationStatus === 1 ? (
          <FAB.Group
            open={open}
            icon={open ? 'close' : 'plus'}
            actions={[
              {
                label: 'Mark Entry',
                icon: 'camera',
                onPress: () =>
                  NavigationService.navigate('Camera', { type: 'front' }),
              },
              {
                label: 'SOS',
                icon: 'car-brake-alert',
                onPress: () =>
                  ToastAndroid.show('Reported to CPCB', ToastAndroid.SHORT),
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
        ) : null}
      </View>
    </SafeAreaView>
  );
};

export default Factory;
