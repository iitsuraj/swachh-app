import React from 'react';
import { SafeAreaView, View, VirtualizedList, StyleSheet } from 'react-native';
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

const DATA: any[] = [{ name: 'suraj' }, { name: 'suraj2' }, { name: 'suraj3' }];

const getItem = (data: any, index: number) => {
  return {
    name: data[index].name,
  };
};

const getItemCount = (data: any) => {
  return DATA.length;
};

const Item = ({ name }) => {
  const onForgot = () => NavigationService.navigate('Factory', { name: name });
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
        onPress={onForgot}
        rippleColor="rgba(0, 0, 0, .32)"
        borderless={true}
        style={{ width: '100%', height: '100%', padding: 30 }}>
        <View
          style={{
            flex: 1,
            justifyContent: 'center',
            position: 'relative',
          }}>
          <Title>Hello A Compnay Name</Title>
          <Caption>Kathal more,Itki road,Ranchi</Caption>
          <IconButton
            icon="directions"
            color={Colors.blue500}
            size={20}
            onPress={onForgot}
            style={{ position: 'absolute', right: 0, zIndex: 10 }}
          />
        </View>
      </TouchableRipple>
    </Card>
  );
};
const FlatListItemSeparator = () => {
  return <Divider />;
};

const VirtualizedListExample = () => {
  return (
    <SafeAreaView style={styles.container}>
      <VirtualizedList
        data={DATA}
        initialNumToRender={4}
        renderItem={({ item }) => <Item name={item.name} />}
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
