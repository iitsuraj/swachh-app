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
import NavigationService from 'app/navigation/NavigationService';

// const DATA: any[] = [{ name: 'suraj' }, { name: 'suraj2' }, { name: 'suraj3' }];

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
      source: {
        latitude: -33.8356372,
        longitude: 18.6947617,
      },
      destination: {
        latitude: -33.8600024,
        longitude: 18.697459,
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
      waypoints: [
        {
          latitude: -33.8600025,
          longitude: 18.697452,
        },
        {
          latitude: -33.8600026,
          longitude: 18.697453,
        },
        {
          latitude: -33.8600036,
          longitude: 18.697493,
        },
      ],
    };

    getDirections(data);
  };
  const onFactory = () =>
    NavigationService.navigate('Factory', { name: data.name.name });
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
  const DATA = useSelector((state: any) => state.dashboardReducer.factory);

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
