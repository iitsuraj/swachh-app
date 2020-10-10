import React from 'react';
import {
  SafeAreaView,
  View,
  VirtualizedList,
  StyleSheet,
  ToastAndroid,
} from 'react-native';
import getDirections from 'react-native-google-maps-directions';
import { useDispatch, useSelector } from 'react-redux';
import {
  Text,
  Card,
  List,
  Divider,
  Caption,
  Title,
  IconButton,
  Colors,
  TouchableRipple,
} from 'react-native-paper';
import Geolocation from '@react-native-community/geolocation';
import NavigationService from 'app/navigation/NavigationService';

const getItem = (data: any, index: number) => {
  return {
    name: data[index].name,
    location: data[index].location,
    coordinates: data[index].coordinates,
  };
};

const getItemCount = (data: any) => {
  return data.length;
};

const Item = (data: any) => {
  const onDirection = () => {
    const data = {
      destination: {
        latitude: 28.1601922,
        longitude: 75.5235159,
      },
      params: [
        {
          key: 'travelmode',
          value: 'driving', // may be "walking", "bicycling" or "transit" as well
        },
        {
          key: 'dir_action',
          value: 'navigate', // this instantly initializes navigation using the given travel mode
        },
      ],
    };

    getDirections(data);
  };
  const onFactory = () =>
    NavigationService.navigate('Factory', {
      name: data.name.name,
      geo: { lat: 23.364504, lon: 85.250418 },
    });
  return (
    <Card
      style={{
        width: '100%',
        height: 70,
        borderRadius: 0,
        borderLeftColor: 'blue',
        borderLeftWidth: 5,
        position: 'relative',
      }}>
      <TouchableRipple
        onPress={onFactory}
        rippleColor="rgba(0, 0, 0, .32)"
        borderless={true}
        style={{ width: '100%', height: '100%', padding: 30 }}>
        <View
          style={{
            flex: 1,
            justifyContent: 'center',
            position: 'relative',
          }}>
          <Title>{data.name.name}</Title>
          <Caption>{data.name.location}</Caption>
        </View>
      </TouchableRipple>
      <IconButton
        icon="directions"
        color={Colors.blue500}
        size={40}
        onPress={onDirection}
        style={{ position: 'absolute', right: 0, zIndex: 10 }}
      />
    </Card>
  );
};
const FlatListItemSeparator = () => {
  return <Divider />;
};

const VirtualizedListExample = () => {
  const DATA = useSelector((state: any) => state.inspectionReducer.factory);

  return (
    <SafeAreaView style={styles.container}>
      <VirtualizedList
        data={DATA}
        initialNumToRender={4}
        renderItem={({ item }) => <Item name={item} />}
        keyExtractor={(item) => item.name}
        getItemCount={getItemCount}
        getItem={getItem}
        ItemSeparatorComponent={FlatListItemSeparator}
      />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  item: {
    backgroundColor: '#f9c2ff',
    height: 150,
    justifyContent: 'center',
    marginVertical: 8,
    marginHorizontal: 16,
    padding: 20,
  },
  title: {
    fontSize: 32,
  },
});

export default VirtualizedListExample;
