import React from 'react';
import { View, SafeAreaView, ScrollView } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import {
  Card,
  Title,
  Caption,
  Text,
  TouchableRipple,
} from 'react-native-paper';
import styles from './styles';

const Dashboard: React.FC = () => {
  const dashboard = useSelector((state: any) => state.dashboardReducer);
  return (
    <SafeAreaView>
      <ScrollView>
        <View style={styles.container}>
          <View style={styles.cardcontainer}>
            <Card style={styles.card}>
              <TouchableRipple
                onPress={() => console.log('Pressed')}
                rippleColor="rgba(0, 0, 0, .32)"
                borderless={true}
                style={styles.ripple}>
                <View style={styles.media}>
                  <View>
                    <Title style={styles.title}>Total Assigned</Title>
                    <Caption>Assigned Factory</Caption>
                  </View>
                  <View>
                    <Text style={[styles.title, styles.number]}>
                      {dashboard.totalAssigned}
                    </Text>
                  </View>
                </View>
              </TouchableRipple>
            </Card>
            <Card style={styles.card}>
              <TouchableRipple
                onPress={() => console.log('Pressed')}
                rippleColor="rgba(0, 0, 0, .32)"
                borderless={true}
                style={styles.ripple}>
                <View style={styles.media}>
                  <View>
                    <Title style={styles.title}>Total Inspected</Title>
                    <Caption>Inspected Factory</Caption>
                  </View>
                  <View>
                    <Text style={[styles.title, styles.number]}>
                      {dashboard.totalDone}
                    </Text>
                  </View>
                </View>
              </TouchableRipple>
            </Card>
            <Card style={styles.card}>
              <TouchableRipple
                onPress={() => console.log('Pressed')}
                rippleColor="rgba(0, 0, 0, .32)"
                borderless={true}
                style={styles.ripple}>
                <View style={styles.media}>
                  <View>
                    <Title style={styles.title}>Total Remaining</Title>
                    <Caption>Remaining Factory</Caption>
                  </View>
                  <View>
                    <Text style={[styles.title, styles.number]}>
                      {dashboard.totalRemaining}
                    </Text>
                  </View>
                </View>
              </TouchableRipple>
            </Card>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default Dashboard;
