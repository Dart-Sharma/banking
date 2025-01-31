import React, {useEffect} from 'react';
import {
  View,
  Text,
  FlatList,
  StatusBar,
  SafeAreaView,
  TouchableOpacity,
  Dimensions,
} from 'react-native';
import styles from './ListCardDetails.style';
import HeaderComponent from '../../Components/HeaderComponent';
import {useNavigation} from '@react-navigation/native';
import {useDispatch, useSelector} from 'react-redux';
import {
  deleteCardDetailsFun,
  loadCardDetailsFun,
} from '../../Redux/slice/AddCardDetails';
import Icons from '../../../assets/icons';

const ListCardDetails = () => {
  const {height} = Dimensions.get('window');
  const navigation = useNavigation();
  const dispatch = useDispatch();
  const {loading, cardList, error} = useSelector(
    state => state.cardDetailsList,
  );
  console.log(loading, 'sssss');

  useEffect(() => {
    dispatch(loadCardDetailsFun());
  }, [dispatch]);

  const cardDetails = [
    {
      id: '1',
      cardType: 'Credit',
      cardNumber: '**** **** **** 1234',
      expiryDate: '12/24',
      cardholderName: 'John Doe',
    },
    {
      id: '2',
      cardType: 'Debit',
      cardNumber: '**** **** **** 5678',
      expiryDate: '09/23',
      cardholderName: 'Jane Smith',
    },
    {
      id: '3',
      cardType: 'Credit',
      cardNumber: '**** **** **** 9012',
      expiryDate: '05/25',
      cardholderName: 'Samuel Green',
    },
    {
      id: '4',
      cardType: 'Debit',
      cardNumber: '**** **** **** 3456',
      expiryDate: '08/26',
      cardholderName: 'Alice Brown',
    },
  ];

  const handleAddCard = () => {
    navigation.navigate('AddCardDetails');
  };

  const UpdateCardDetails = item => {
    navigation.navigate('UpdateCardDetails', {item});
  };
  const deleteCard = id => {
    console.log(id);
    dispatch(deleteCardDetailsFun(id));
  };

  const renderCard = ({item}) => (
    <View style={styles.cardContainer}>
      <View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
        <View>
          <Text style={styles.cardText}>Type: {item.cardType}</Text>
          <Text style={styles.cardText}>Name: {item.cardholderName}</Text>
        </View>
        <View>
          <TouchableOpacity
            onPress={() => UpdateCardDetails(item)}
            style={styles.addCardButton}>
            <Icons
              name={'Update'}
              width={30}
              height={30}
              fill="transparent"
              stroke="#000"
            />
          </TouchableOpacity>
        </View>
      </View>
      <View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
        <View>
          <Text style={styles.cardText}>Number: {item.cardNumber}</Text>
          <Text style={styles.cardText}>CVV: {item.cvv}</Text>
          <Text style={styles.cardText}>Expiry Date: {item.expiryDate}</Text>
        </View>
        <View>
          <TouchableOpacity
            onPress={() => deleteCard(item.id)}
            style={styles.addCardButton}>
            <Icons
              name={'Delete'}
              width={30}
              height={30}
              fill="transparent"
              stroke="#000"
            />
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );

  console.log(cardList);

  return (
    <SafeAreaView style={styles.body}>
      <StatusBar backgroundColor={'#edf8f7'} barStyle={'dark-content'} />
      <HeaderComponent onAddCard={handleAddCard} />
      {cardList.length !== 0 ? (
        <View style={styles.cardListContainer}>
          <FlatList
            style={{height: height - 150}}
            data={cardList}
            renderItem={renderCard}
            keyExtractor={item => item.id}
          />
        </View>
      ) : (
        <View
          style={{
            flex: 1,
            justifyContent: 'center',
            alignItems: 'center',
            backgroundColor: '#edf8f7',
          }}>
          <Text style={{fontSize: 17}}>Add your card Details</Text>
          <TouchableOpacity
            onPress={() => navigation.navigate('AddCardDetails')}
            style={styles.button}>
            <Text
              style={{
                fontSize: 15,
                color: '#fff',
                alignSelf: 'center',
                textAlign: 'center',
              }}>
              Add
            </Text>
          </TouchableOpacity>
        </View>
      )}
    </SafeAreaView>
  );
};

export default ListCardDetails;
