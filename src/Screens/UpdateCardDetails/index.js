import React, {useState} from 'react';
import {
  View,
  Text,
  TextInput,
  SafeAreaView,
  TouchableOpacity,
} from 'react-native';
import styles from './UpdateCardDetails.style';
import {updateCardDetailsFun} from '../../Redux/slice/AddCardDetails';
import {useDispatch, useSelector} from 'react-redux';
import Icons from '../../../assets/icons';
import {useNavigation} from '@react-navigation/native';
import AlertModal from '../../Components/AlertModal';

const UpdateCardDetails = ({route}) => {
  const {item} = route.params;
  const navigation = useNavigation();
  const [cardType, setCardType] = useState(item.cardType);
  const [cardNumber, setCardNumber] = useState(item.cardNumber);
  const [expiryDate, setExpiryDate] = useState(item.expiryDate);
  const [cvv, setCvv] = useState(item.cvv);
  const [cardholderName, setCardholderName] = useState(item.cardholderName);
  const dispatch = useDispatch();

  const [modalVisible, setModalVisible] = useState(false); // Modal visibility state
  const [modalMessage, setModalMessage] = useState('');

  const {loading, updateStatus, error} = useSelector(
    state => state.cardDetailsList,
  );

  const handleAddCard = async () => {
    if (cardType && cardNumber && expiryDate && cardholderName && cvv) {
      if (/^\d{3,4}$/.test(cvv)) {
        const updatedCard = {
          id: item.id,
          cardType: cardType,
          cardNumber: `**** **** **** ${cardNumber.slice(-4)}`,
          expiryDate: expiryDate,
          cardholderName: cardholderName,
          cvv: cvv,
        };
        const data = await dispatch(updateCardDetailsFun(updatedCard));
        console.log(data.payload, 'check');

        setCardType('');
        setCardNumber('');
        setExpiryDate('');
        setCardholderName('');
        setCvv('');
        setModalMessage('Your Card Updated.');
        setModalVisible(true);
      } else {
        setModalMessage('CVV must be a 3 or 4-digit number.');
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
            keyboardType="numeric"
            placeholderTextColor="#4e5050"
            maxLength={3}
            value={cvv}
            onChangeText={setCvv}
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
          <Text style={styles.buttonText}>Update Card</Text>
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

export default UpdateCardDetails;
