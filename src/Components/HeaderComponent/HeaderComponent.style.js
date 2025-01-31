import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  headerContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 16,
    paddingVertical: 10,
    backgroundColor: '#edf8f7',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.8,
    shadowRadius: 2,
  },
  logoContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  logo: {
    borderRadius: 20,
    width: 40,
    height: 40,
    resizeMode: 'contain',
  },
  addCardButton: {
    padding: 5,
  },
  addCardText: {
    fontSize: 18,
    color: '#000',
    fontWeight: 'bold',
  },
});

export default styles;
