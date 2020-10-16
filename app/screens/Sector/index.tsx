import * as React from 'react';
import { View, SafeAreaView, ScrollView } from 'react-native';
import { Card, TouchableRipple, Title } from 'react-native-paper';
import { StyleSheet } from 'react-native';
import NavigationService from 'app/navigation/NavigationService';

const SectorName = [
  'chemical',
  'distillery',
  'fertilizer',
  'food & beverages',
  'oil & refinery',
  'pesticide',
  'petrochemical',
  'pharmaceutical',
  'pulp & paper',
  'slaughter house',
  'sugar',
  'tannery',
  'textile',
  'others',
];
const Sector: React.FC = () => {
  const goTo = (name) =>
    NavigationService.navigate('Factory List', { sector: name });
  return (
    <SafeAreaView>
      <ScrollView>
        <View style={styles.container}>
          <View style={styles.cardcontainer}>
            {SectorName.map((sector) => (
              <Card style={styles.card} key={sector}>
                <TouchableRipple
                  onPress={() => goTo(sector)}
                  rippleColor="rgba(0, 0, 0, .32)"
                  borderless={true}
                  style={styles.ripple}>
                  <View style={styles.media}>
                    <View>
                      <Title style={styles.title}>{sector}</Title>
                    </View>
                  </View>
                </TouchableRipple>
              </Card>
            ))}
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default Sector;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  cardcontainer: {
    marginLeft: 8,
    marginRight: 8,
    marginBottom: 8,
    marginTop: 8,
  },
  card: {
    marginBottom: 8,
    borderRadius: 10,
    width: '100%',
    height: 70,
  },
  media: {
    width: '100%',
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  title: {
    fontWeight: 'bold',
  },
  number: {
    fontSize: 50,
  },
  ripple: {
    width: '100%',
    height: '100%',
    padding: 20,
  },
});
