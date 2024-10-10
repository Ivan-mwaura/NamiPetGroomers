// src/reducers/petReducer.js

const initialState = {
    selectedPet: "Dog",
    selectedPetCategory: null,
    selectedPetSubcategory: null,
    subscriptionId: "",

  };
  
  const petReducers = (state = initialState, action) => {
    switch (action.type) {
      case 'SET_SELECTED_PET':
        return {
          ...state,
          selectedPet: action.payload,
        };
      case 'SET_SELECTED_PET_CATEGORY':
        return {
          ...state,
          selectedPetCategory: action.payload,
        };
      case 'SET_SELECTED_PET_SUBCATEGORY':
        return {
          ...state,
          selectedPetSubcategory: action.payload,
        };
      case 'SET_SUBSCRIPTION_ID':
        return {
          ...state,
          subscriptionId: action.payload,
        };
      default:
        return state;
    }
  };
  
  export default petReducers;
  