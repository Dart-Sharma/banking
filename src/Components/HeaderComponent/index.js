import React from 'react';
import {View,  Image, TouchableOpacity} from 'react-native';
import styles from './HeaderComponent.style';
import logo from '../../../assets/images/logo.png';
import Icons from '../../../assets/icons';

const HeaderComponent = ({onAddCard}) => {
  return (
    <View style={styles.headerContainer}>
      <View style={styles.logoContainer}>
        <Image source={logo} style={styles.logo} />
      </View>
      <TouchableOpacity onPress={onAddCard} style={styles.addCardButton}>
        <Icons name={'AddCard'} width={30} height={30} fill='#000' stroke="#000" />
      </TouchableOpacity>
    </View>
  );
};

export default HeaderComponent;
