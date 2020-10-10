import React, { useEffect } from 'react';
import {
  SafeAreaView,
  ScrollView,
  View,
  VirtualizedList,
  ToastAndroid,
} from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import {
  Text,
  Card,
  Divider,
  Caption,
  Title,
  IconButton,
  Colors,
  TouchableRipple,
  FAB,
} from 'react-native-paper';

import NavigationService from 'app/navigation/NavigationService';

const getItem = (data: any, index: number) => {
  return {
    data: data[index],
  };
};

const getItemCount = (data: any) => {
  return data.length;
};

const Item = (data) => {
  const onClick = () =>
    NavigationService.navigate('Task', {
      name: data.factory.data.category,
      data: data.factory.data.kra,
    });
  // console.log(data);
  return (
    <Card
      style={{
        width: '100%',
        height: 100,
        borderRadius: 0,
        borderLeftColor: 'blue',
        borderLeftWidth: 5,
      }}
      key={data.factory.data.category}>
      <TouchableRipple
        onPress={onClick}
        rippleColor="rgba(0, 0, 0, .32)"
        borderless={true}
        style={{ width: '100%', height: '100%', padding: 20 }}>
        <View
          style={{
            flex: 1,
            justifyContent: 'center',
            position: 'relative',
          }}>
          <Title>{data.factory.data.category}</Title>
        </View>
      </TouchableRipple>
    </Card>
  );
};

const FlatListItemSeparator = () => {
  return <Divider />;
};

const Factory: React.FC = () => {
  const [state, setState] = React.useState({ open: false });
  const factory = useSelector((state: any) => state.factoryReducer);
  // console.log(factory);
  const onStateChange = ({ open }) => setState({ open });
  const { open } = state;

  return (
    <SafeAreaView>
      <View
        style={{
          width: '100%',
          height: '100%',
        }}>
        <VirtualizedList
          data={factory.inspections}
          initialNumToRender={4}
          renderItem={({ item }) => <Item factory={item} />}
          keyExtractor={(item) => item.data.category}
          getItemCount={getItemCount}
          getItem={getItem}
          ItemSeparatorComponent={FlatListItemSeparator}
        />
        <FAB.Group
          open={open}
          icon={open ? 'close' : 'plus'}
          actions={[
            {
              label: 'Mark Entry',
              icon: 'camera',
              onPress: () => NavigationService.navigate('Camera'),
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
      </View>
    </SafeAreaView>
  );
};

export default Factory;
