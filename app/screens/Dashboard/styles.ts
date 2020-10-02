import { StyleSheet } from 'react-native';

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
    height: 130,
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

export default styles;
