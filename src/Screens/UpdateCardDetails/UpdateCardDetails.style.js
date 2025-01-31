import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  body: {
    backgroundColor: '#d3d4d4',
    flex: 1,
  },
  formContainer: {
    borderRadius: 10,
    elevation: 4,
    marginTop:15,
    padding: 10,
    marginHorizontal: 15,
    backgroundColor: '#edf8f7',
  },
  input: {
    height: 40,
    borderColor: 'gray',
    borderBottomWidth: 1,
    marginBottom: 12,
    paddingLeft: 8,
    borderRadius: 5,
  },
  inputCvvExpiryDate: {
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    marginBottom: 12,
    paddingLeft: 8,
    borderRadius: 5,
    width: '45%',
  },
  addCardButton:{
    height: 40,
    backgroundColor: '#4e5050',
    padding: 10,
    borderRadius: 5,
    alignItems: 'center',
    justifyContent: 'center',
    marginTop:5,
  },
  buttonText:{
    color:'#f4f4f4',
    fontSize:16
  }
});

export default styles;
