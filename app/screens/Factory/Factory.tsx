import React, { useEffect } from 'react';
import { SafeAreaView, ScrollView, View, VirtualizedList } from 'react-native';
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
  FAB,
  Portal,
  Provider,
} from 'react-native-paper';

import NavigationService from 'app/navigation/NavigationService';
const DATA: any[] = [
  { name: 'Do this 1' },
  { name: 'Do this 2' },
  { name: 'Do this 3' },
];
const getItem = (data: any, index: number) => {
  return {
    name: data[index].name,
  };
};

const getItemCount = (data: any) => {
  return DATA.length;
};

const Item = (data) => {
  const onClick = () => NavigationService.navigate('Task', { name: data.name });
  return (
    <Card
      style={{
        width: '100%',
        height: 70,
        borderRadius: 0,
        borderLeftColor: 'blue',
        borderLeftWidth: 5,
      }}>
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
          <Title>{data.name}</Title>
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
          data={DATA}
          initialNumToRender={4}
          renderItem={({ item }) => <Item name={item.name} />}
          keyExtractor={(item) => item.name}
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
              label: 'Mark Exit',
              icon: 'camera',
              onPress: () => console.log('Pressed add'),
            },
            {
              label: 'Mark Done',
              icon: 'check',
              onPress: () => console.log('Pressed add'),
            },
          ]}
          onStateChange={onStateChange}
        />
      </View>
    </SafeAreaView>
  );
};

export default Factory;
