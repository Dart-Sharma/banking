import React, {useEffect, useState} from 'react';
import {
  View,
  Text,
  TextInput,
  Button,
  SafeAreaView,
  TouchableOpacity,
} from 'react-native';
import styles from './AddCardDetails.style';
import {addCardDetailsFun} from '../../Redux/slice/AddCardDetails';
import {useDispatch, useSelector} from 'react-redux';
import Icons from '../../../assets/icons';
import {useNavigation} from '@react-navigation/native';
import AlertModal from '../../Components/AlertModal';

const AddCardDetails = () => {
  const navigation = useNavigation();
  const [cardType, setCardType] = useState('');
  const [cardNumber, setCardNumber] = useState('');
  const [expiryDate, setExpiryDate] = useState('');
  const [cvv, setCvv] = useState('');

  const [cardholderName, setCardholderName] = useState('');
  const dispatch = useDispatch();

  const [modalVisible, setModalVisible] = useState(false);
  const [modalMessage, setModalMessage] = useState('');

  const handleAddCard = () => {
    if (cardType && cardNumber && expiryDate && cardholderName && cvv) {
      const sanitizedCardNumber = cardNumber.replace(/\s/g, '');
      if (/^\d{16}$/.test(sanitizedCardNumber)) {
        if (/^\d{3,4}$/.test(cvv)) {
          const newCard = {
            id: Math.floor(Math.random() * 900) + 100,
            cardType,
            cardNumber: `**** **** **** ${sanitizedCardNumber.slice(-4)}`,
            expiryDate,
            cardholderName,
            cvv,
          };
          dispatch(addCardDetailsFun(newCard));
          setCardType('');
          setCardNumber('');
          setExpiryDate('');
          setCardholderName('');
          setCvv('');
          setModalMessage('Your Card Added.');
          setModalVisible(true);
        } else {
          setModalMessage('CVV must be a 3 or 4-digit number.');
          setModalVisible(true);
        }
      } else {
        setModalMessage('Card number must be exactly 16 digits and numeric.');
        setModalVisible(true);
      }
    } else {
      setModalMessage('Please fill all the fields.');
      setModalVisible(true);
    }
  };


  return (
    <SafeAreaView style={styles.body}>
      <TouchableOpacity
        style={{
          flexDirection: 'row',
          alignItems: 'center',
          backgroundColor: '#edf8f7',
          paddingVertical: 15,
        }}
        onPress={() => navigation.goBack()}>
        <Icons name={'Goback'} width={20} height={20} stroke="#0c5891" />
        <Text style={{color: '#4e5050', fontSize: 16}}>Go Back</Text>
      </TouchableOpacity>

      <View style={styles.formContainer}>
        <TextInput
          style={styles.input}
          placeholder="Card Type (credit/debit)"
          placeholderTextColor="#4e5050"
          value={cardType}
          onChangeText={setCardType}
        />
        <TextInput
          style={styles.input}
          placeholder="Card Number"
          placeholderTextColor="#4e5050"
          keyboardType="numeric"
          maxLength={16}
          value={cardNumber}
          onChangeText={setCardNumber}
        />
        <TextInput
          style={styles.input}
          placeholder="Cardholder Name"
          placeholderTextColor="#4e5050"
          value={cardholderName}
          onChangeText={setCardholderName}
        />
        <View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
          <TextInput
            style={styles.inputCvvExpiryDate}
            placeholder="CVV"
            placeholderTextColor="#4e5050"
            value={cvv}
            onChangeText={setCvv}
            keyboardType="numeric"
            maxLength={3}
          />
          <TextInput
            style={styles.inputCvvExpiryDate}
            placeholder="Expiry Date (MM/YY)"
            placeholderTextColor="#4e5050"
            value={expiryDate}
            onChangeText={setExpiryDate}
          />
        </View>
        <TouchableOpacity onPress={handleAddCard} style={styles.addCardButton}>
          <Text style={styles.buttonText}>Add Card</Text>
        </TouchableOpacity>
      </View>

      <AlertModal
        visible={modalVisible}
        message={modalMessage}
        onClose={() => setModalVisible(false)}
      />
    </SafeAreaView>
  );
};

export default AddCardDetails;
