import {createAsyncThunk, createSlice} from '@reduxjs/toolkit';
import AsyncStorage from '@react-native-async-storage/async-storage';

// Function to load card details from AsyncStorage
const loadCardDetails = async () => {
  try {
    const storedCards = await AsyncStorage.getItem('cardDetails');
    return storedCards ? JSON.parse(storedCards) : [];
  } catch (error) {
    console.log('Error loading card details:', error);
    return [];
  }
};

// Function to save card details to AsyncStorage
const saveCardDetails = async cardDetails => {
  try {
    await AsyncStorage.setItem('cardDetails', JSON.stringify(cardDetails));
  } catch (error) {
    console.log('Error saving card details:', error);
  }
};

// Create a Redux async thunk for loading card details from AsyncStorage
export const loadCardDetailsFun = createAsyncThunk(
  'loadCardDetails',
  async () => {
    return await loadCardDetails(); // Load the card details from AsyncStorage
  },
);

// Create a Redux async thunk for adding new card details to AsyncStorage
export const addCardDetailsFun = createAsyncThunk(
  'addCardDetails',
  async newCard => {
    const currentCards = await loadCardDetails();
    const updatedCards = [...currentCards, newCard];
    await saveCardDetails(updatedCards);
    return updatedCards;
  },
);

// Create a Redux async thunk for updating card details in AsyncStorage
export const updateCardDetailsFun = createAsyncThunk(
  'updateCardDetails',
  async updatedCard => {
    const currentCards = await loadCardDetails();
    const updatedCards = currentCards.map(card =>
      card.id === updatedCard.id ? {...card, ...updatedCard} : card,
    );
    await saveCardDetails(updatedCards);
    return updatedCards;
  },
);

export const deleteCardDetailsFun = createAsyncThunk(
  'deleteCardDetails',
  async cardId => {
    const currentCards = await loadCardDetails();
    const updatedCards = currentCards.filter(card => card.id !== cardId);
    await saveCardDetails(updatedCards);
    return updatedCards;
  },
);

const addCardSlice = createSlice({
  name: 'addCardDetailsSlice',
  initialState: {
    loading: false,
    error: null,
    cardList: [],
  },
  reducers: {},
  extraReducers: builder => {
    builder
      // Handle loading card details from AsyncStorage
      .addCase(loadCardDetailsFun.pending, state => {
        state.loading = true;
        state.error = null;
      })
      .addCase(loadCardDetailsFun.fulfilled, (state, action) => {
        state.loading = false;
        state.cardList = action.payload;
      })
      .addCase(loadCardDetailsFun.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      })

      // Handle adding a new card and saving it to AsyncStorage
      .addCase(addCardDetailsFun.pending, state => {
        state.loading = true;
        state.error = null;
      })
      .addCase(addCardDetailsFun.fulfilled, (state, action) => {
        state.loading = false;
        state.cardList = action.payload;
      })
      .addCase(addCardDetailsFun.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      })

      // Handle deleting a card from the list
      .addCase(deleteCardDetailsFun.pending, state => {
        state.loading = true;
        state.error = null;
      })
      .addCase(deleteCardDetailsFun.fulfilled, (state, action) => {
        state.loading = false;
        state.cardList = action.payload;
      })
      .addCase(deleteCardDetailsFun.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      })

      // Handle updating a card's details
      .addCase(updateCardDetailsFun.pending, state => {
        state.loading = true;
        state.error = null;
      })
      .addCase(updateCardDetailsFun.fulfilled, (state, action) => {
        state.loading = false;
        state.cardList = action.payload; // Updated card list after the update
      })
      .addCase(updateCardDetailsFun.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      });
  },
});

export default addCardSlice.reducer;
