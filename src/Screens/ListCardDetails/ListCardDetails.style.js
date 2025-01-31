import {Button, StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  body: {
    backgroundColor: '#d3d4d4',
    flex: 1,
  },
  cardListContainer: {
    marginVertical: 10,
  },
  cardText: {
    fontSize: 16,
    marginBottom: 5,
  },
  noCardsText: {
    textAlign: 'center',
    fontSize: 16,
    color: 'gray',
  },
  cardContainer: {
    elevation: 2,
    borderColor: '#d32222',
    padding: 12,
    marginHorizontal: 10,
    marginBottom: 10,
    backgroundColor: '#edf8f7',
    borderRadius: 5,
  },
  button: {
    justifyContent:'center',
    alignItems:'center',
    marginTop: 5,
    borderRadius: 5,
    backgroundColor: '#4e5050',
    width: '20%',
    height: '5%',
  },
});

export default styles;
